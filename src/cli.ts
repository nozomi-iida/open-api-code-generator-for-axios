import minimist from 'minimist'
import {build} from "./build";
import path from "path";

export const run = () => {
  const configs = require(path.join(process.cwd(), "codegen.config.js"))
  build(configs)
}

