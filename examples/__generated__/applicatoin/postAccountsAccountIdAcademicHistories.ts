import type * as Types from './@types';
export type PostAccountsAccountIdAcademicHistoriesUrlParams = {
  accountId: string
} | undefined
export type PostAccountsAccountIdAcademicHistoriesResponse = Types.AcademicHistory_v1
export type PostAccountsAccountIdAcademicHistoriesRequestBody = {
  academicHistory: {
    name: string
    faculty?: string | undefined
    sinceDate: string
    untilDate: string
    /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
    type: 'graduate_school' | 'university' | 'community_college' | 'junior_college' | 'high_school'
  }
}
export type PostAccountsAccountIdAcademicHistories = {
  variables: {
    urlParams: PostAccountsAccountIdAcademicHistoriesUrlParams
    requestBody: PostAccountsAccountIdAcademicHistoriesRequestBody
  }
}