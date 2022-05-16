import type * as Types from './@types';
export type GetAccountsAccountIdSkillsUrlParams = {
  account_id: string
} | undefined
export type GetAccountsAccountIdSkillsResponse = {
  skills: Types.Skill[]
}
export type GetAccountsAccountIdSkills = {
  variables: {
    urlParams: GetAccountsAccountIdSkillsUrlParams
  }
}