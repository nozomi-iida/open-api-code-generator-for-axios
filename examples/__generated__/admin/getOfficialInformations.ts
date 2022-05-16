import type * as Types from './@types';
export type GetOfficialInformationsResponse = {
  official_informations: Types.OfficialInformation[]
}
export type GetOfficialInformationsQueryParams = {
  /** 公開中か */
  is_released?: boolean | undefined
} | undefined
export type GetOfficialInformations = {
  variables: {
    queryParams: GetOfficialInformationsQueryParams
  }
}