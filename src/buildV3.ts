import {OpenAPIV3} from "openapi-types";

// ファイルの生成の前までここでやる
export const buildV3 = (openapi: OpenAPIV3.Document) => {
  // fileName = operationId
  const files: { fileName: string; methods: string }[] = []
  Object.keys(openapi.paths).forEach(path => {
    console.log(openapi.paths[path]?.parameters)
  })
}
