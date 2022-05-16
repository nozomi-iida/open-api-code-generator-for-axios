import {OpenAPIV3} from "openapi-types";
import {$ref2Type, BINARY_TYPE, getPropertyName, isRefObject, schema2value} from "./builderUtils/converters";
import {
  description2Doc,
  Prop,
  props2String,
  props2StringForHoge,
  PropValue,
  value2String
} from "./builderUtils/props2String";
import {resolveReqRef, resolveResRef} from "./builderUtils/resolvers";
import schemas2Props from "./builderUtils/schemas2Props";
import humps from "humps"

// ファイルの生成の前までここでやる
export const buildV3 = (openapi: OpenAPIV3.Document) => {
  const files: { file: string; methods: string[] }[] = []
  const schemas = schemas2Props(openapi.components?.schemas, openapi) || []
  Object.entries(openapi.paths).forEach(([path, targetUrl]) => {
    const urlParams: Prop[] = []

    if(!targetUrl) return;
    // targetUrl.parametersはurlParamsのこと
    if(targetUrl.parameters) {

      targetUrl.parameters.map(p => {
        if(isRefObject(p)) {
          // refは今存在しないので後回し
        } else {
          const value = schema2value(p.schema, true)
          if(!value) return;
          const prop: Prop = {
            name: getPropertyName(p.name),
            required: p.required ?? false,
            description: p.description ?? null,
            values: [value]
          }
          urlParams.push(prop)
        }
      })
    }
    // 前で処理を終えているため
    delete targetUrl.parameters
    Object.entries(targetUrl).map(([method, target]) => {
      const params: Prop[] = urlParams.length ? [{
        name: "urlParams",
        required: false,
        description: null,
        values: [{
          isArray: false,
          isEnum: false,
          nullable: false,
          description: null,
          value: urlParams
        }]
      }] : []

      // 前で処理を終えているため(ここでparametersの処理をしてもよいか、型がやや面倒くさそうだった
      if(Array.isArray(target) || typeof target === "string") return
      if(!target.operationId) {
        console.log(`operationIdは必須です`)
        return;
      }
      const pascalizedTargetOperationId = humps.pascalize(target.operationId)
      if(target.responses) {
        const code = Object.keys(target.responses).find(code => code.match(/^(20\d|30\d)$/))
        if(code) {
          const res = target.responses[code]
          const ref = isRefObject(res) ? resolveResRef(openapi, res.$ref) : res
          const content =
            (ref.content &&
              Object.entries(ref.content).find(([key]) =>
                key.startsWith('application/')
              )?.[1]) ??
            ref.content?.[Object.keys(ref.content)[0]]
          if(content?.schema) {
            const val = schema2value(content.schema, true, true)
            if(val) {
              const res: Prop = {
                name: "response",
                required: true,
                // example response消すため
                description: "",
                values: [val]
              }
              // Types.model名になってるの気になる
              // params.push(`export type ${pascalizedTargetOperationId}Response = ${props2StringForHoge([response], '')}`)
              params.push(res)
            }
          }
        }
      }
      if(target.requestBody) {
        // TODO: reqFormatは一旦無視
        let reqFormat = ''
        let reqBody: PropValue | null = null
        let required = true
        let description: string | null = null
        if (isRefObject(target.requestBody)) {
          const ref = resolveReqRef(openapi, target.requestBody.$ref)
          if (ref.content['multipart/form-data']?.schema) {
            reqFormat = 'FormData'
          }

          reqBody = {
            isArray: false,
            isEnum: false,
            nullable: false,
            description: null,
            value: $ref2Type(target.requestBody.$ref)
          }
          required = ref.required ?? true
          description = ref.description ?? null
        } else {
          required = target.requestBody.required ?? true
          description = target.requestBody.description ?? null

          if (target.requestBody.content['multipart/form-data']?.schema) {
            reqFormat = 'FormData'
            reqBody = schema2value(
              target.requestBody.content['multipart/form-data'].schema,
              true
            )
          } else {
            const content =
              target.requestBody.content &&
              Object.entries(target.requestBody.content).find(([key]) =>
                key.startsWith('application/')
              )?.[1]

            if (content?.schema) reqBody = schema2value(content.schema, true)
          }
        }
        if(reqBody) {
          const requestBody: Prop = {
            name: 'requestBody',
            required,
            description,
            values: [reqBody]
          }
          params.push(requestBody)
        }
      }
      if(target.parameters) {
        const queryParams: Prop[] = []
        target.parameters.map(p => {
          if(isRefObject(p)) {
            // refは今存在しないので後回し
          } else {
            const value = schema2value(p.schema, true)
            if(!value) return;
            const prop = {
              name: getPropertyName(p.name),
              required: p.required ?? false,
              description: p.description ?? null,
              values: [value]
            }
            switch (p.in) {
              case "query":
                queryParams.push(prop)
            }
          }
        })
        // params.push(`export type ${pascalizedTargetOperationId}Query = ${props2String(queryParams, '')}`)
        params.push({
          name: "queryParams",
          required: false,
          description: null,
          values: [{
            isArray: false,
            isEnum: false,
            nullable: false,
            description: null,
            value: queryParams
          }]
        })
      }
      /*
        paramsはオブジェクトにして、そこのnameをもとにハンドリングするのが良さそう
        urlParamsをparamsに含める
        file名をつける
        axiosの通信の関数を作る
        最後にprettierで揃えてもらうのもなしじゃなさそう
      */
      const methods: string[] = []
      let responseType = ""
      methods.push("import type * as Types from './@types';\n")
      params.map(param => {
        switch (param.name) {
          case "urlParams":
            methods.push(`export type ${pascalizedTargetOperationId}UrlParams = ${props2StringForHoge([param], '')}`)
            return
          case "queryParams":
            methods.push(`export type ${pascalizedTargetOperationId}QueryParams = ${props2StringForHoge([param], '')}`)
            return;
          case "requestBody":
            methods.push(`export type ${pascalizedTargetOperationId}RequestBody = ${props2StringForHoge([param], '')}`)
            return;
          case "response":
            methods.push(`export type ${pascalizedTargetOperationId}Response = ${props2StringForHoge([param], '')}`)
            responseType = `${pascalizedTargetOperationId}Response`
            return;
        }
      })
      if(methods.find(method => method.includes(BINARY_TYPE))) {
        methods.unshift("import type { ReadStream } from 'fs'\n");
      }
      files.push({file: target.operationId, methods: methods})
      /*
        TODO:
         ハードコーディングがすぎる
         独自のaxiosを使うってなったときにどうするか考える
         aspidaのコードをリーディングしてみたほうが良さそう
      */
      // const methodContent = `import axios from "axios"\n\n` +
      //   `${methodTypes.join("")}\n` +
      //   `type: ${pascalizedTargetOperationId} = {\n ${variables.join("")}\n}\n\n` +
      //   `export async function ${humps.camelize(target.operationId)}(variables: ${pascalizedTargetOperationId}) {\n` +
      //   `  const res = await axios.${method}${responseType && `<${responseType}>`}(\n` +
      //   `    "${variablesPath()}"\n` +
      //   "  );\n" +
      //   "}"
    })
  })
  const typesText =
    schemas.length
      ? [
        ...schemas.map(s => ({
          name: s.name,
          description: s.value.description,
          text: value2String(s.value, '').replace(/\n {2}/g, '\n')
        }))
      ]
        .map(p => `\n${description2Doc(p.description, '')}export type ${p.name} = ${p.text}\n`)
        .join('')
        .replace(/(\W)Types\./g, '$1')
        .replace(/\]\?:/g, ']:')
      : null

  return {
    types: typesText &&
      `/* eslint-disable */${
        typesText.includes(BINARY_TYPE) ? "\nimport type { ReadStream } from 'fs'\n" : ''
      }${typesText}`,
    files
  }
}
