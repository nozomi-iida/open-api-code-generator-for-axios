import type * as Types from './@types';
export type PostPrivacyPolicyHistoriesResponse = Types.PrivacyPolicyHistory
export type PostPrivacyPolicyHistoriesRequestBody = {
  privacyPolicyHistory: {
    content: string
    version: string
  }
}
export type PostPrivacyPolicyHistories = {
  variables: {
    requestBody: PostPrivacyPolicyHistoriesRequestBody
  }
}