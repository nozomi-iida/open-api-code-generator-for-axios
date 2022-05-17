import type * as Types from './@types';
export type GetAccountsAccountIdSkillsUrlParams = {
  accountId: string
} | undefined
export type GetAccountsAccountIdSkillsResponse = {
  skills: Types.Skill[]
}
export type GetAccountsAccountIdSkills = {
  variables: {
    urlParams: GetAccountsAccountIdSkillsUrlParams
  }
}