import type * as Types from './@types';
export type PostAccountsAccountIdBankAccountUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdBankAccountResponse = Types.AccountBankAccount_v1
export type PostAccountsAccountIdBankAccountRequestBody = {
  bankAccount: {
    bankName: string
    branchName: string
    accountNumber: string
    accountHolderName: string
    bankCode: string
    branchCode: string
  }
}
export type PostAccountsAccountIdBankAccount = {
  variables: {
    urlParams: PostAccountsAccountIdBankAccountUrlParams
    requestBody: PostAccountsAccountIdBankAccountRequestBody
  }
}