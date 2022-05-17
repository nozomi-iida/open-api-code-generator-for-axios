import type * as Types from './@types';
export type GetOfficialInformationsResponse = {
  officialInformations: Types.OfficialInformation[]
}
export type GetOfficialInformationsQueryParams = {
  /** 公開中か */
  isReleased?: boolean | undefined
} | undefined
export type GetOfficialInformations = {
  variables: {
    queryParams: GetOfficialInformationsQueryParams
  }
}