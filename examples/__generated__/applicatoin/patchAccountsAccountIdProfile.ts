import type * as Types from './@types';
export type PatchAccountsAccountIdProfileUrlParams = {
  accountId: string
} | undefined
export type PatchAccountsAccountIdProfileResponse = Types.Profile_v1
export type PatchAccountsAccountIdProfileRequestBody = {
  profile: {
    firstName: string
    lastName: string
    firstNameKana: string
    lastNameKana: string
    gender: 'MALE' | 'FEMALE' | 'OTHER'
    phone: string
    nationality: string
    placeOfResidenceId: string
    postalCode: string
    address: string
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」 */
    englishSkill: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing'
    birthOfDate: string
    biography: string
    jobSummary: string
    /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」 */
    japaneseSkill: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing'
    /** 直近の年収 */
    recentIncomeAmount: number
    /** マネジメント経験人数 */
    managemntExperience: number
    /** 転職回数 */
    numberOfJobChanges: number
    /** エージェント経験年数 */
    yearOfAgentExperience: string
    /** エージェント担当エリア */
    agentAreaInCharge: string
    /** エージェント自己紹介メッセージ */
    agentSelfMessage: string
    /** エージェント自己PR */
    agentSelfIntroduction: string
    /** エージェント実績 */
    agentAchievement: string
    /** 「配偶者無」「配偶者有」 */
    maritalStatus: 'single' | 'married'
    /** エージェント得意職種 */
    occupationMainCategoryIds: string[]
    /** エージェント得意業種 */
    industryCategoryIds: string[]
  }
}
export type PatchAccountsAccountIdProfile = {
  variables: {
    urlParams: PatchAccountsAccountIdProfileUrlParams
    requestBody: PatchAccountsAccountIdProfileRequestBody
  }
}