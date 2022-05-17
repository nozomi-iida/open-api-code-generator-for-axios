import type * as Types from './@types';
export type PostSkillsResponse = Types.Skill_v1
export type PostSkillsRequestBody = {
  skill: {
    name: string
  }
}
export type PostSkills = {
  variables: {
    requestBody: PostSkillsRequestBody
  }
}