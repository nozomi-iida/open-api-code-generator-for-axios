import type * as Types from './@types';
export type GetCompaniesIdUrlParams = {
  id: string
} | undefined
export type GetCompaniesIdResponse = Types.Company_v1
export type GetCompaniesId = {
  variables: {
    urlParams: GetCompaniesIdUrlParams
  }
}