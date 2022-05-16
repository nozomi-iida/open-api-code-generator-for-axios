import type * as Types from './@types';
export type PatchCompaniesIdUrlParams = {
  id: string
} | undefined
export type PatchCompaniesIdResponse = Types.Company & {
    owner: Types.Account & {
      profile: Types.Profile
    }
  } & {
    subscription: Types.Subscription & {
      price: Types.Price
    }
  } & {
    recruitments: Types.Recruitment[]
  } & {
    industries: Types.IndustryHistory[]
  } & {
    features: Types.Feature[]
  }
export type PatchCompaniesIdRequestBody = {
}
export type PatchCompaniesId = {
  variables: {
    urlParams: PatchCompaniesIdUrlParams
requestBody: PatchCompaniesIdRequestBody
  }
}