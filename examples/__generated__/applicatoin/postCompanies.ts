import type * as Types from './@types';
export type PostCompaniesRequestBody = {
  company: {
    name: string
    nameKana: string
    headOfficeLocation: string
    yearOfEstablishment: string
    hpUrl?: string | undefined
    phone?: string | undefined
    capital: number
    isListed: boolean
    representative: string
    representativeKana: string
    netSales?: string | undefined
    numbersOfEmployees?: string | undefined
    averageAge?: number | undefined
    businessSummary: string
    corporatePr?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    cover?: string | undefined
    /** 画像も投稿したい時はform-dataで投げて */
    logo?: string | undefined
    featureIds?: string[] | undefined
    industryIds?: string[] | undefined
  }

  employment: {
    email: string
  }
}
export type PostCompanies = {
  variables: {
    requestBody: PostCompaniesRequestBody
  }
}