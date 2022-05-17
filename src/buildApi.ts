import fs from "fs";
import humps from "humps";

type BuildApiProps = {
  files: {
    file: string
    methods: string[]
    method: string
    url: string
  }[]
  outputDir?: string
}

export const buildApi = ({files, outputDir}: BuildApiProps) => {
  const dirPath = `${outputDir}/$api.ts`
  const imports: string[] = []
  const apis: string[] = []
  files.forEach((file) => {
    const hasResponse = file.methods.join("").includes("Response");
    const hasQueryParams = file.methods.join("").includes("QueryParams");
    const hasRequestBody = file.methods.join("").includes("RequestBody");
    imports.push(`import { ${humps.pascalize(file.file)}${hasResponse ? `, ${humps.pascalize(file.file)}Response` : ""} } from "./${file.file}"\n`)
    // TODO: snake_caseをcamelCaseに変換する
    const addUrl2UrlParams = () => {
      const urlVariables = file.url.match(/\{.*?\}/g)
      if(urlVariables) {
        let urlParams = file.url
        urlVariables.forEach(urlVariable => {
          const urlId = urlVariable.match(/\{(.+)\}/)?.[1]
          urlParams = urlParams.replace(urlVariable, `\${variables.urlParams?.${urlId}}`)
        })
        return urlParams
      } else {
        return file.url
      }
    }
    apis.push(
      `    async ${file.file}({ variables }: ${humps.pascalize(file.file)})${hasResponse ? `: Promise<${humps.pascalize(file.file)}Response>` : ""} {\n` +
      `      const res = await fetch.${file.method}(\`${addUrl2UrlParams()}\`${hasRequestBody ? `, variables.requestBody` : ""} ${hasQueryParams ? `, variables.queryParams` : ""})\n` +
      `      return res.data`
    )
  })
  const apiText = `import { AxiosStatic } from "axios"\n` +
    `${imports.join("")}\n` +
    `type ApiProps = {\n` +
    `fetch: AxiosStatic\n` +
    `};\n` +
    `export const api = ({ fetch }: ApiProps) => {\n` +
    `  return {\n` +
    `${apis.join("\n    },\n")}` +
    `\n    }\n` +
    `  }\n` +
    `}`
  fs.writeFileSync(dirPath, apiText, "utf-8")
}
