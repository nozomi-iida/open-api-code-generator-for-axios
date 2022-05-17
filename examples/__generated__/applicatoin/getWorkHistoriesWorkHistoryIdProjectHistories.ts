import type * as Types from './@types';
export type GetWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams = {
  workHistoryId: string
} | undefined
export type GetWorkHistoriesWorkHistoryIdProjectHistoriesResponse = {
  projectHistories: Types.ProjectHistory_v1[]
}
export type GetWorkHistoriesWorkHistoryIdProjectHistories = {
  variables: {
    urlParams: GetWorkHistoriesWorkHistoryIdProjectHistoriesUrlParams
  }
}