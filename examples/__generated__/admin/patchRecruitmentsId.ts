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
    workplaceId: string
    jobDescription: string
    workConditions: string
    qualificationRequirements: string
    isReleased: boolean
    type: 'career' | 'project'
    accessibleType: 'public' | 'private'
    taxType: 'included' | 'excluded'
    minAmount: number
    maxAmount: number
    /** 「時給」「日給」「月給」「年収」「1案件」 */
    billingMethod: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project'
    /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
    targetCompanyStatus: 'none' | 'private' | 'certained' | 'specified'
    /** 募集元企業を指定する場合は必須 */
    targetCompanyId: string
    /** target_company_statusがcertainedの時、表示名を指定 */
    targetCompanyCertainName: string
    nearestStation: string
    projectNumber: string
    /** 企業内でのフラグ */
    isOrganizationalChecked: boolean
    /** adminのフラグ */
    isAdminChecked: boolean
    employmentStatusIds: string[]
    occupationIds: string[]
    industryIds: string[]
    featureIds: string[]
  }
}
export type PatchRecruitmentsId = {
  variables: {
    urlParams: PatchRecruitmentsIdUrlParams
    requestBody: PatchRecruitmentsIdRequestBody
  }
}