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
    is_career_scout_target: boolean
    is_project_scout_target: boolean
    is_public_work: boolean
  }
}
export type PatchAccountsId = {
  variables: {
    urlParams: PatchAccountsIdUrlParams
requestBody: PatchAccountsIdRequestBody
  }
}