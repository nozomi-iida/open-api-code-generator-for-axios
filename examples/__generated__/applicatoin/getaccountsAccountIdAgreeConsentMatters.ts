import type * as Types from './@types';
export type GetaccountsAccountIdAgreeConsentMattersUrlParams = {
  accountId: string
} | undefined
export type GetaccountsAccountIdAgreeConsentMattersResponse = {
  consentMatters: Types.ConsentMatter_v1[]
}
export type GetaccountsAccountIdAgreeConsentMatters = {
  variables: {
    urlParams: GetaccountsAccountIdAgreeConsentMattersUrlParams
  }
}