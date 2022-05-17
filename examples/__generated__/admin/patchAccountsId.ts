import type { ReadStream } from 'fs'
import type * as Types from './@types';
export type PatchAccountsIdUrlParams = {
  id: string
} | undefined
export type PatchAccountsIdResponse = Types.Account
export type PatchAccountsIdRequestBody = {
  account: {
    email: string
    avatar: (File | ReadStream)
    isCareerScoutTarget: boolean
    isProjectScoutTarget: boolean
    isPublicWork: boolean
  }
}
export type PatchAccountsId = {
  variables: {
    urlParams: PatchAccountsIdUrlParams
    requestBody: PatchAccountsIdRequestBody
  }
}