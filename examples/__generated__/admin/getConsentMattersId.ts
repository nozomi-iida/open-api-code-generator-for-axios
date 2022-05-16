import type * as Types from './@types';
export type GetConsentMattersIdUrlParams = {
  id: string
} | undefined
export type GetConsentMattersIdResponse = Types.ConsentMatter
export type GetConsentMattersId = {
  variables: {
    urlParams: GetConsentMattersIdUrlParams
  }
}