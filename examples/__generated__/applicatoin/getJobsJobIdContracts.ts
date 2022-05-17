import type * as Types from './@types';
export type GetJobsJobIdContractsUrlParams = {
  jobId: string
} | undefined
export type GetJobsJobIdContractsResponse = {
  invoices: Types.Invoice_v1[]
  totalDataNums: number
}
export type GetJobsJobIdContracts = {
  variables: {
    urlParams: GetJobsJobIdContractsUrlParams
  }
}