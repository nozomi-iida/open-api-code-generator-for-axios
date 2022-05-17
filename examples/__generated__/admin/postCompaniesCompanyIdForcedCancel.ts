import type * as Types from './@types';
export type PostCompaniesCompanyIdForcedCancelUrlParams = {
  companyId: string
} | undefined
export type PostCompaniesCompanyIdForcedCancelResponse = Types.Company & {
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
export type PostCompaniesCompanyIdForcedCancel = {
  variables: {
    urlParams: PostCompaniesCompanyIdForcedCancelUrlParams
  }
}