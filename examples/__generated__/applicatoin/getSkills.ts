import type * as Types from './@types';
export type GetSkillsResponse = {
  skills: Types.Skill_v1[]
  totalDataNums: number
}
export type GetSkillsQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
} | undefined
export type GetSkills = {
  variables: {
    queryParams: GetSkillsQueryParams
  }
}