import {OpenAPIV3} from "openapi-types";
import {$ref2Type, getPropertyName, isRefObject, schema2value} from "./builderUtils/converters";
import {Prop, props2String, props2StringForRes, PropValue} from "./builderUtils/props2String";
import {resolveReqRef, resolveResRef} from "./builderUtils/resolvers";
import schemas2Props from "./builderUtils/schemas2Props";
import humps from "humps"

// ファイルの生成の前までここでやる
export const buildV3 = (openapi: OpenAPIV3.Document) => {
  const files: { fileName: string; methods: string }[] = []
  Object.entries(openapi.paths).forEach(([path, targetUrl]) => {
    if(!targetUrl) return;
    // targetUrl.parametersはurlParamsのこと
    if(targetUrl.parameters) {
      const reqUrlParams: Prop[] = []

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
          reqUrlParams.push(prop)
        }
      })
      // urlParamsの型の文字列
      const res = props2String(reqUrlParams, '')
      // console.log(res)
    }
    // 前で処理を終えているため
    delete targetUrl.parameters
    Object.entries(targetUrl).map(([method, target]) => {
      const params: string[] = []

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
              const response: Prop = {
                name: "response",
                required: true,
                // example response消すため
                description: "",
                values: [val]
              }
              // Types.model名になってるの気になる
              params.push(`export type ${pascalizedTargetOperationId}Response = ${props2StringForRes([response], '')}`)
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
          const req: Prop = {
            name: 'requestBody',
            required,
            description,
            values: [reqBody]
          }
          // FIXME: indentを揃える
          params.push(`export type ${pascalizedTargetOperationId}RequestBody ${props2StringForRes([req], '')}`)
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
            const prop: Prop = {
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
        params.push(`export type ${pascalizedTargetOperationId}Query = ${props2String(queryParams, '')}`)
      }
      /*
        paramsはオブジェクトにして、そこのnameをもとにハンドリングするのが良さそう
        urlParamsをparamsに含める
        file名をつける
        axiosの通信の関数を作る
      */
      console.log(params)
    })
    // TODO: ここで一つの文字列にまとめる(joinするだけ?)
  })
}
