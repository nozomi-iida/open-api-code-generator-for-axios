export type Variables = {
  operationId: string
  method: string
  urlParams: string
  queryParams?: string
  requestBody?: string
  response: string
}

// export const variables2functions = (variables: Variables) => {
//   const VariablesType = `type ${variables.operationId} = {\n` +
//   `${variables.urlParams && `urlParams: ${variables.urlParams}\N`}
//   ${variables.queryParams && `queryParams: ${variables.queryParams}\n`}
//   ${variables.requestBody && `requestBody: ${variables.requestBody}\n`}
//   ` + "}\n"
//   const axiosFunction = `export function ${variables.operationId}({variables: ${VariablesType}) {\n` +
//     `const res = await axios.post<${variables.operationId}>(\n` +
//     `accounts/${variables.urlParams.accountId}/attendances` + ")" +
//     "return res.data"
//     +"}"
// }
