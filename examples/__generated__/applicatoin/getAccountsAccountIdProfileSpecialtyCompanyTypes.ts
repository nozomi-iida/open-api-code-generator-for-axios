import type * as Types from './@types';
export type GetAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdProfileSpecialtyCompanyTypesResponse = {
  specialtyCompanyTypes: Types.SpecialtyCompanyType[]
}
export type GetAccountsAccountIdProfileSpecialtyCompanyTypes = {
  variables: {
    urlParams: GetAccountsAccountIdProfileSpecialtyCompanyTypesUrlParams
  }
}