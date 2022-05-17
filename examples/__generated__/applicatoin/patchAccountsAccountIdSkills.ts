import type * as Types from './@types';
export type PatchAccountsAccountIdSkillsUrlParams = {
  accountId: string
} | undefined
export type PatchAccountsAccountIdSkillsResponse = {
  skills: Types.Skill_v1[]
}
export type PatchAccountsAccountIdSkillsRequestBody = {
  skill: {
    ids: string[]
  }
}
export type PatchAccountsAccountIdSkills = {
  variables: {
    urlParams: PatchAccountsAccountIdSkillsUrlParams
    requestBody: PatchAccountsAccountIdSkillsRequestBody
  }
}