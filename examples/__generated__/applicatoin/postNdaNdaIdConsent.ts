import type * as Types from './@types';
export type PostNdaNdaIdConsentUrlParams = {
  ndaId: string
} | undefined
export type PostNdaNdaIdConsentResponse = Types.ConsentNda_v1
export type PostNdaNdaIdConsentRequestBody = {
  nda: {
    name: string
    address: string
  }
}
export type PostNdaNdaIdConsent = {
  variables: {
    urlParams: PostNdaNdaIdConsentUrlParams
    requestBody: PostNdaNdaIdConsentRequestBody
  }
}