import type * as Types from './@types';
export type PostConsentMattersResponse = Types.ConsentMatter
export type PostConsentMattersRequestBody = {
  consentMatter: {
    content: string
  }
}
export type PostConsentMatters = {
  variables: {
    requestBody: PostConsentMattersRequestBody
  }
}