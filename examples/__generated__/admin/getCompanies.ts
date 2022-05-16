import type * as Types from './@types';
export type GetCompaniesResponse = {
  companies: (Types.Company & {
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
  })[]
  total_data_nums: number
}
export type GetCompaniesQueryParams = {
  /** 企業名 */
  keyword?: string | undefined
  /** 担当者名 */
  owner_keyword?: string | undefined
  /** 通常orスタブ */
  type?: 'account' | 'stub' | undefined
  /** admin審査状態 */
  admin_verification_status?: 'unspecified' | 'request' | 'verified' | 'rejected' | undefined
  /** trueなら昇順、falseなら降順 */
  sort_asc_updated_at?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sort_asc_subscribed_at?: boolean | undefined
} | undefined
export type GetCompanies = {
  variables: {
    queryParams: GetCompaniesQueryParams
  }
}