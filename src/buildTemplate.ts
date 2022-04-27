import {Config} from "./types";
import $SwaggerParser from '@apidevtools/swagger-parser'
import {buildV3} from "./buildV3";
import {OpenAPIV3} from "openapi-types";

export const buildTemplate = async (config: Config) => {
  const openapi = await $SwaggerParser.parse(config.input)

  // FIXME: 条件分岐無理矢理感あり
  if((openapi as OpenAPIV3.Document).openapi === "3.0.0") {
    buildV3(openapi as OpenAPIV3.Document)
  }
}
