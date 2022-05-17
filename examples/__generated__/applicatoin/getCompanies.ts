import type * as Types from './@types';
export type GetCompaniesResponse = {
  companies: Types.Company_v1
  totalDataNums: number
}
export type GetCompaniesQueryParams = {
  /** 検索キーワード */
  keyword?: string | undefined
  /** stubを渡せばstub企業を含めた全企業一覧取得に */
  type?: 'stub' | undefined
  /** 発注に紐付いた募集のみ（発注のフィルター用） */
  isJobOrdered?: boolean | undefined
  /** 業務に紐付いた募集のみ（業務のフィルター用） */
  isJobed?: boolean | undefined
} | undefined
export type GetCompanies = {
  variables: {
    queryParams: GetCompaniesQueryParams
  }
}