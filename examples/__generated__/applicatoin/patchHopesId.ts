import type * as Types from './@types';
export type PatchHopesIdUrlParams = {
  id: string
} | undefined
export type PatchHopesIdResponse = Types.Hope_v1
export type PatchHopesIdRequestBody = {
  hope: {
    /** 何ヶ月以内に転職したいか */
    timeToChangeJob: number
    amount: number
    /** 「時給」「月給」「年収」 */
    billingMethod?: 'hourly' | 'monthly' | 'yearly' | undefined
    type: 'career' | 'project'
    canMoving?: boolean | undefined
    specialNote?: string | undefined
    beginningPeriod?: number | undefined
    /** StateのID */
    workplaceId: string
    employmentStatusIds: string[]
    occupationIds: string[]
    /** 「~20%(週に1回)」「40~60%(週に2.3回)」「80%~(週に4回)」 */
    ratioOfOperation?: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | undefined
  }
}
export type PatchHopesId = {
  variables: {
    urlParams: PatchHopesIdUrlParams
    requestBody: PatchHopesIdRequestBody
  }
}