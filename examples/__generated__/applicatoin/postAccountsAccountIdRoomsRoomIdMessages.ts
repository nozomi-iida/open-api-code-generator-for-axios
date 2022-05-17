import type * as Types from './@types';
export type PostAccountsAccountIdRoomsRoomIdMessagesUrlParams = {
  roomId: string
} | undefined
export type PostAccountsAccountIdRoomsRoomIdMessagesResponse = Types.Message_v1
export type PostAccountsAccountIdRoomsRoomIdMessagesRequestBody = {
  message: {
    /** 発言するaccountのid */
    senderId: string
    content: string
  }
}
export type PostAccountsAccountIdRoomsRoomIdMessages = {
  variables: {
    urlParams: PostAccountsAccountIdRoomsRoomIdMessagesUrlParams
    requestBody: PostAccountsAccountIdRoomsRoomIdMessagesRequestBody
  }
}