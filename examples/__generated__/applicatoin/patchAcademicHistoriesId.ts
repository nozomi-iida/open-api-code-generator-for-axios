import type * as Types from './@types';
export type PatchAcademicHistoriesIdUrlParams = {
  id: string
} | undefined
export type PatchAcademicHistoriesIdResponse = Types.AcademicHistory_v1
export type PatchAcademicHistoriesIdRequestBody = {
  academicHistory: {
    name: string
    faculty: string
    sinceDate: string
    untilDate: string
    /** 「大学院」「大学」「専門学校」「短期大学」「高校」 */
    type: 'graduate_school' | 'university' | 'community_college' | 'junior_college' | 'high_school'
  }
}
export type PatchAcademicHistoriesId = {
  variables: {
    urlParams: PatchAcademicHistoriesIdUrlParams
    requestBody: PatchAcademicHistoriesIdRequestBody
  }
}