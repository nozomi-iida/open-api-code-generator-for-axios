import type * as Types from './@types';
export type PostAccountsAccountIdRecruitmentInterestsUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdRecruitmentInterestsResponse = Types.Recruitment_v1
export type PostAccountsAccountIdRecruitmentInterestsRequestBody = {
  recruitmentInterest: {
    recruitmentId: string
  }
}
export type PostAccountsAccountIdRecruitmentInterests = {
  variables: {
    urlParams: PostAccountsAccountIdRecruitmentInterestsUrlParams
    requestBody: PostAccountsAccountIdRecruitmentInterestsRequestBody
  }
}