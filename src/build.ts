import fs from "fs"
import fse from "fs-extra"
import {Config} from "./types";
import { buildTemplate } from "./buildTemplate";

export const build = (configs: Config[]) => {
  configs.forEach(async (config) => {
    if(!fs.existsSync(config.outputdir)) {
      fse.ensureDirSync(config.outputdir)
    } else {
      console.log(`${config.outputdir}は既に存在しています`)
      return
    }

    await buildTemplate(config)
  })
}
