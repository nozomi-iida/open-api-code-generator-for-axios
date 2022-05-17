import type * as Types from './@types';
export type GetWithdrawalsResponse = {
  withdrawals: {
    amount: number
    withdrawalMethod: 'manual' | 'automatic'
    createdAt: string
    account?: Types.Account | undefined
    company?: Types.Company | undefined
  }[]
  totalDataNums: number
}
export type GetWithdrawals = {
  variables: {
    
  }
}