import type { ReadStream } from 'fs'
import type * as Types from './@types';
export type PatchAccountsIdUrlParams = {
  id: string
} | undefined
export type PatchAccountsIdResponse = Types.Account_v1
export type PatchAccountsIdRequestBody = {
  account: {
    email: string
    avatar: (File | ReadStream)
    isCareerScoutTarget: boolean
    isProjectScoutTarget: boolean
    isPublicWork: boolean
    isStudent: boolean
    /** 新パスワードを設定する時に必要 */
    currentPassword: string
    newPassword: string
    newPasswordConfirmation: string
    blockCompanyIds: string[]
  }
}
export type PatchAccountsId = {
  variables: {
    urlParams: PatchAccountsIdUrlParams
    requestBody: PatchAccountsIdRequestBody
  }
}