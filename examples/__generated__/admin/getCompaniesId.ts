import type * as Types from './@types';
export type GetCompaniesIdUrlParams = {
  id: string
} | undefined
export type GetCompaniesIdResponse = Types.Company & {
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
export type GetCompaniesId = {
  variables: {
    urlParams: GetCompaniesIdUrlParams
  }
}