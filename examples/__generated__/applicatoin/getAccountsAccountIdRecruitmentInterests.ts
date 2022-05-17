import type * as Types from './@types';
export type GetAccountsAccountIdRecruitmentInterestsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdRecruitmentInterestsResponse = {
  recruitments: Types.Recruitment_v1[]
}
export type GetAccountsAccountIdRecruitmentInterests = {
  variables: {
    urlParams: GetAccountsAccountIdRecruitmentInterestsUrlParams
  }
}