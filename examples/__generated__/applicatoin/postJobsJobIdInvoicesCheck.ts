import type * as Types from './@types';
export type PostJobsJobIdInvoicesCheckUrlParams = {
  jobId: string
} | undefined
export type PostJobsJobIdInvoicesCheckResponse = Types.Invoice_v1
export type PostJobsJobIdInvoicesCheckRequestBody = {
  invoice: {
    invoiceDetailedItems: {
      invoiceDetailedItem: {
        /** 項目名 */
        description: string
        /** 数量 */
        quantity: number
        /** 単位 */
        unitLabel: string
        /** 単価 */
        unitPrice: number
        /** 消費税 */
        taxRatio: number
        /** 金額 */
        amount: number
      }
    }[]
  }
}
export type PostJobsJobIdInvoicesCheck = {
  variables: {
    urlParams: PostJobsJobIdInvoicesCheckUrlParams
    requestBody: PostJobsJobIdInvoicesCheckRequestBody
  }
}