import type * as Types from './@types';
export type GetAccountsAccountIdHopesUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdHopesResponse = {
  hopes: Types.Hope[]
}
export type GetAccountsAccountIdHopes = {
  variables: {
    urlParams: GetAccountsAccountIdHopesUrlParams
  }
}