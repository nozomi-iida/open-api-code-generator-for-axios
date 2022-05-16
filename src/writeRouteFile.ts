import fs from "fs";
import humps from "humps";

type WriteRouteFileProps = {
  types: string | null
  files: {
    file: string
    methods: string[]
  }[]
  outputDir?: string
}

export const writeRouteFile = ({types, files, outputDir}: WriteRouteFileProps) => {
  if (types) {
    fs.mkdirSync(`${outputDir}/@types`)
    fs.writeFileSync(`${outputDir}/@types/index.ts`, types, 'utf8')
  }

  files.forEach((file, i, dirList) => {
    const dirPath = `${outputDir}/${file.file}.ts`
    fs.writeFileSync(`${dirPath}`, file.methods.join(""), "utf-8")
  })
}
