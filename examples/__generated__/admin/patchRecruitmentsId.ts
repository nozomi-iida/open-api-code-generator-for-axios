import type * as Types from './@types';
export type PatchRecruitmentsIdUrlParams = {
  id: string
} | undefined
export type PatchRecruitmentsIdResponse = Types.Recruitment
export type PatchRecruitmentsIdRequestBody = {
  recruitment: {
    title: string
    department: string
    position: string
    workplace_id: string
    job_description: string
    work_conditions: string
    qualification_requirements: string
    is_released: boolean
    type: 'career' | 'project'
    accessible_type: 'public' | 'private'
    tax_type: 'included' | 'excluded'
    min_amount: number
    max_amount: number
    /** 「時給」「日給」「月給」「年収」「1案件」 */
    billing_method: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project'
    /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
    target_company_status: 'none' | 'private' | 'certained' | 'specified'
    /** 募集元企業を指定する場合は必須 */
    target_company_id: string
    /** target_company_statusがcertainedの時、表示名を指定 */
    target_company_certain_name: string
    nearest_station: string
    project_number: string
    /** 企業内でのフラグ */
    is_organizational_checked: boolean
    /** adminのフラグ */
    is_admin_checked: boolean
    employment_status_ids: string[]
    occupation_ids: string[]
    industry_ids: string[]
    feature_ids: string[]
  }
}
export type PatchRecruitmentsId = {
  variables: {
    urlParams: PatchRecruitmentsIdUrlParams
requestBody: PatchRecruitmentsIdRequestBody
  }
}