import type * as Types from './@types';
export type GetAccountsAccountIdHopesUrlParams = {
  account_id: string
} | undefined
export type GetAccountsAccountIdHopesResponse = {
  hopes: Types.Hope[]
}
export type GetAccountsAccountIdHopes = {
  variables: {
    urlParams: GetAccountsAccountIdHopesUrlParams
  }
}