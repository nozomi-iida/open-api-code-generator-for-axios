import type * as Types from './@types';
export type PostFeaturesResponse = Types.Feature
export type PostFeaturesRequestBody = {
  feature: {
    name: string
    source_type: 'company' | 'recruitment'
  }
}
export type PostFeatures = {
  variables: {
    requestBody: PostFeaturesRequestBody
  }
}