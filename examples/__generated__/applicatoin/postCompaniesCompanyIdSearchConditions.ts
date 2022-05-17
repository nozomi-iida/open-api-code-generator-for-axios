import type * as Types from './@types';
export type PostCompaniesCompanyIdSearchConditionsUrlParams = {
  id: string
} | undefined
export type PostCompaniesCompanyIdSearchConditionsResponse = Types.SearchCondition_v1
export type PostCompaniesCompanyIdSearchConditionsRequestBody =   /** filtersは部分的な更新ができないため、更新でも必ずすべてのフィルターを送る */
{
  searchCondition: {
    title?: string | undefined
    target?: 'account' | 'recruitment' | 'company' | undefined
    filters: {
      /** クエリパラメータのキー */
      key: string
    }[]
  }
}
export type PostCompaniesCompanyIdSearchConditions = {
  variables: {
    urlParams: PostCompaniesCompanyIdSearchConditionsUrlParams
    requestBody: PostCompaniesCompanyIdSearchConditionsRequestBody
  }
}