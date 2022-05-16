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

/*
  必要な情報
  - responseの型
  - 変数の型
  - 上記のimport文
  - axiosのimport文
  - apiの関数
  - 変数・responseがあるか・ないかをどうやって判断するか
*/
export const buildApi = ({files, outputDir}: BuildApiProps) => {
  const dirPath = `${outputDir}/$api.ts`
  const imports: string[] = []
  const apis: string[] = []
  files.forEach((file) => {
    const hasResponse = file.methods.join("").includes("Response");
    const hasQueryParams = file.methods.join("").includes("QueryParams");
    const hasRequestBody = file.methods.join("").includes("RequestBody");
    imports.push(`import { ${humps.pascalize(file.file)}${hasResponse ? `, ${humps.pascalize(file.file)}Response` : ""} } from "./${file.file}"\n`)
    apis.push(
      `  async ${file.file}({ variables }: ${humps.pascalize(file.file)})${hasResponse ? `: Promise<${humps.pascalize(file.file)}Response>` : ""} {\n` +
      `    const res = await fetch.${file.method}("${file.url}"${hasRequestBody ? `, variables.requestBody` : ""} ${hasQueryParams ? `, variables.queryParams` : ""})\n` +
      `    return res.data`
    )
  })
  const apiText = `import { AxiosStatic } from "axios"\n` +
    `${imports.join("")}\n` +
    `type ApiProps = {\n` +
    `fetch: AxiosStatic\n` +
    `};\n` +
    `export const api = ({ fetch }: ApiProps) => {\n` +
    `return {\n` +
    `${apis.join("\n  },\n")}` +
    `}\n` +
    `  }\n` +
    `}`
  fs.writeFileSync(dirPath, apiText, "utf-8")
}
