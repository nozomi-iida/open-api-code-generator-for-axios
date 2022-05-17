import type * as Types from './@types';
export type PostTermHistoriesResponse = Types.TermHistory
export type PostTermHistoriesRequestBody = {
  termHistory: {
    content: string
    version: string
  }
}
export type PostTermHistories = {
  variables: {
    requestBody: PostTermHistoriesRequestBody
  }
}