import type * as Types from './@types';
export type PostCompaniesCompanyIdAcceptUrlParams = {
  companyId: string
} | undefined
export type PostCompaniesCompanyIdAcceptResponse = Types.Company & {
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
export type PostCompaniesCompanyIdAccept = {
  variables: {
    urlParams: PostCompaniesCompanyIdAcceptUrlParams
  }
}