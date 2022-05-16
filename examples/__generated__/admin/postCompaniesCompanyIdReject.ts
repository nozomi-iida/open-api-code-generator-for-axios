import type * as Types from './@types';
export type PostCompaniesCompanyIdRejectUrlParams = {
  company_id: string
} | undefined
export type PostCompaniesCompanyIdRejectResponse = Types.Company & {
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
export type PostCompaniesCompanyIdReject = {
  variables: {
    urlParams: PostCompaniesCompanyIdRejectUrlParams
  }
}