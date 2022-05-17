import type * as Types from './@types';
export type GetAccountsAccountIdRoomsRoomIdMessagesUrlParams = {
  roomId: string
} | undefined
export type GetAccountsAccountIdRoomsRoomIdMessagesResponse = {
  messages: Types.Message_v1[]
  totalDataNums: number
}
export type GetAccountsAccountIdRoomsRoomIdMessages = {
  variables: {
    urlParams: GetAccountsAccountIdRoomsRoomIdMessagesUrlParams
  }
}