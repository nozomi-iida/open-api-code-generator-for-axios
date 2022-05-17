import type * as Types from './@types';
export type GetRecruitmentsIdUrlParams = {
  id: string
} | undefined
export type GetRecruitmentsIdResponse = Types.Recruitment
export type GetRecruitmentsId = {
  variables: {
    urlParams: GetRecruitmentsIdUrlParams
  }
}