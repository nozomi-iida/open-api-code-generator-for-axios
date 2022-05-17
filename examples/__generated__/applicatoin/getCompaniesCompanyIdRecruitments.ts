import type * as Types from './@types';
export type GetCompaniesCompanyIdRecruitmentsUrlParams = {
  companyId: string
} | undefined
export type GetCompaniesCompanyIdRecruitmentsResponse = {
  recruitments: Types.Recruitment_v1[]
}
export type GetCompaniesCompanyIdRecruitmentsQueryParams = {
  /** 職種 */
  'occupationIds[]'?: string | undefined
  /** 業種 */
  'industryIds[]'?: string | undefined
  /** 勤務地 */
  'workplaceIds[]'?: string | undefined
  /** 雇用形態 */
  'employmentStatusIds[]'?: string | undefined
  /** タイプ */
  type?: string | undefined
  /** 年収最高金額（キャリア） */
  maxYearlyAmount?: number | undefined
  /** 年収最低金額（キャリア） */
  minYearlyAmount?: number | undefined
  /** 単価最高金額（プロジェクト） */
  maxUnitAmount?: number | undefined
  /** 単価最低金額（プロジェクト） */
  minUnitAmount?: number | undefined
  /** キーワード */
  keyword?: string | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscCreatedAt?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscAmount?: boolean | undefined
  /** trueなら昇順、falseなら降順 */
  sortAscApplicant?: boolean | undefined
} | undefined
export type GetCompaniesCompanyIdRecruitments = {
  variables: {
    urlParams: GetCompaniesCompanyIdRecruitmentsUrlParams
    queryParams: GetCompaniesCompanyIdRecruitmentsQueryParams
  }
}