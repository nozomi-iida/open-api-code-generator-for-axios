import type * as Types from './@types';
export type GetRecruitmentsResponse = {
  recruitments: Types.Recruitment_v1[]
  totalDataNums: number
}
export type GetRecruitmentsQueryParams = {
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
  /** 発注に紐付いた募集のみ（発注のフィルター用） */
  isJobOrdered?: boolean | undefined
  /** 業務に紐付いた募集のみ（業務のフィルター用） */
  isJobed?: boolean | undefined
} | undefined
export type GetRecruitments = {
  variables: {
    queryParams: GetRecruitmentsQueryParams
  }
}