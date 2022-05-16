import type * as Types from './@types';
export type PostStatesResponse = Types.State
export type PostStatesRequestBody = {
  state: {
    name: string
    country_code: string
  }
}
export type PostStates = {
  variables: {
    requestBody: PostStatesRequestBody
  }
}