import type * as Types from './@types';
export type PostStatesResponse = Types.State
export type PostStatesRequestBody = {
  state: {
    name: string
    countryCode: string
  }
}
export type PostStates = {
  variables: {
    requestBody: PostStatesRequestBody
  }
}