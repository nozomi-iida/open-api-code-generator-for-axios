import type * as Types from './@types';
export type PostJobsJobIdInvoicesUrlParams = {
  jobId: string
} | undefined
export type PostJobsJobIdInvoicesResponse = Types.Invoice_v1
export type PostJobsJobIdInvoicesRequestBody = {
  invoice: {
    /** 請求日 */
    issuedAt: string
    title: string
    /** 支払期日 */
    deadline: string
    /** 請求書ファイル */
    files?: string[] | undefined
    /** 備考 */
    note?: string | undefined
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
export type PostJobsJobIdInvoices = {
  variables: {
    urlParams: PostJobsJobIdInvoicesUrlParams
    requestBody: PostJobsJobIdInvoicesRequestBody
  }
}