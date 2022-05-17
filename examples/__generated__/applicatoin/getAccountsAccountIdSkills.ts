import type * as Types from './@types';
export type GetAccountsAccountIdSkillsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdSkillsResponse = {
  skills: Types.Skill_v1[]
}
export type GetAccountsAccountIdSkills = {
  variables: {
    urlParams: GetAccountsAccountIdSkillsUrlParams
  }
}