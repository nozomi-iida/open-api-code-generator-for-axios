import type * as Types from './@types';
export type GetAccountsAccountIdNotificationsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdNotificationsResponse = {
  accountNotifications: Types.AccountNotification_v1[]
  totalDataNums: number
}
export type GetAccountsAccountIdNotificationsQueryParams = {
  notificationType?: 'general' | 'message' | undefined
  isRead?: boolean | undefined
} | undefined
export type GetAccountsAccountIdNotifications = {
  variables: {
    urlParams: GetAccountsAccountIdNotificationsUrlParams
    queryParams: GetAccountsAccountIdNotificationsQueryParams
  }
}