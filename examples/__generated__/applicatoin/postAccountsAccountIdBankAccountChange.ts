import type * as Types from './@types';
export type PostAccountsAccountIdBankAccountChangeUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdBankAccountChangeResponse = Types.AccountBankAccount_v1
export type PostAccountsAccountIdBankAccountChangeRequestBody = {
  bankAccount: {
    bankName: string
    branchName: string
    accountNumber: string
    accountHolderName: string
    bankCode: string
    branchCode: string
  }
}
export type PostAccountsAccountIdBankAccountChange = {
  variables: {
    urlParams: PostAccountsAccountIdBankAccountChangeUrlParams
    requestBody: PostAccountsAccountIdBankAccountChangeRequestBody
  }
}