import { AxiosStatic } from "axios"
import { GetEmploymentStatuses, GetEmploymentStatusesResponse } from "./getEmploymentStatuses"
import { PostEmploymentStatuses, PostEmploymentStatusesResponse } from "./postEmploymentStatuses"
import { GetEmploymentStatusesId, GetEmploymentStatusesIdResponse } from "./getEmploymentStatusesId"
import { PatchEmploymentStatusesId, PatchEmploymentStatusesIdResponse } from "./patchEmploymentStatusesId"
import { DeleteEmploymentStatusesId } from "./deleteEmploymentStatusesId"
import { GetStates, GetStatesResponse } from "./getStates"
import { PostStates, PostStatesResponse } from "./postStates"
import { GetStatesId, GetStatesIdResponse } from "./getStatesId"
import { PatchStatesId, PatchStatesIdResponse } from "./patchStatesId"
import { DeleteStatesId } from "./deleteStatesId"
import { GetTermHistories, GetTermHistoriesResponse } from "./getTermHistories"
import { PostTermHistories, PostTermHistoriesResponse } from "./postTermHistories"
import { GetTermHistoriesId, GetTermHistoriesIdResponse } from "./getTermHistoriesId"
import { GetPrivacyPolicyHistories, GetPrivacyPolicyHistoriesResponse } from "./getPrivacyPolicyHistories"
import { PostPrivacyPolicyHistories, PostPrivacyPolicyHistoriesResponse } from "./postPrivacyPolicyHistories"
import { GetPrivacyPolicyHistoriesId, GetPrivacyPolicyHistoriesIdResponse } from "./getPrivacyPolicyHistoriesId"
import { GetConsentMatters, GetConsentMattersResponse } from "./getConsentMatters"
import { PostConsentMatters, PostConsentMattersResponse } from "./postConsentMatters"
import { GetConsentMattersId, GetConsentMattersIdResponse } from "./getConsentMattersId"
import { GetProduct, GetProductResponse } from "./getProduct"
import { PostProduct, PostProductResponse } from "./postProduct"
import { GetProductsId, GetProductsIdResponse } from "./getProductsId"
import { PatchProductsId, PatchProductsIdResponse } from "./patchProductsId"
import { DeleteProductsId } from "./deleteProductsId"
import { GetProductsIdPrices, GetProductsIdPricesResponse } from "./getProductsIdPrices"
import { PostProductsIdPrices, PostProductsIdPricesResponse } from "./postProductsIdPrices"
import { GetPricesId, GetPricesIdResponse } from "./getPricesId"
import { PatchPricesId, PatchPricesIdResponse } from "./patchPricesId"
import { GetJobChangeCompletionReports, GetJobChangeCompletionReportsResponse } from "./getJobChangeCompletionReports"
import { GetRecruitmentCompletionReports, GetRecruitmentCompletionReportsResponse } from "./getRecruitmentCompletionReports"
import { GetRecruitments, GetRecruitmentsResponse } from "./getRecruitments"
import { GetRecruitmentsId, GetRecruitmentsIdResponse } from "./getRecruitmentsId"
import { PatchRecruitmentsId, PatchRecruitmentsIdResponse } from "./patchRecruitmentsId"
import { DeleteRecruitmentsId } from "./deleteRecruitmentsId"
import { GetCompanies, GetCompaniesResponse } from "./getCompanies"
import { GetCompaniesId, GetCompaniesIdResponse } from "./getCompaniesId"
import { PatchCompaniesId, PatchCompaniesIdResponse } from "./patchCompaniesId"
import { DeleteCompaniesId } from "./deleteCompaniesId"
import { PostCompaniesCompanyIdAccept, PostCompaniesCompanyIdAcceptResponse } from "./postCompaniesCompanyIdAccept"
import { PostCompaniesCompanyIdReject, PostCompaniesCompanyIdRejectResponse } from "./postCompaniesCompanyIdReject"
import { PostCompaniesCompanyIdForcedCancel, PostCompaniesCompanyIdForcedCancelResponse } from "./postCompaniesCompanyIdForcedCancel"
import { GetAccounts, GetAccountsResponse } from "./getAccounts"
import { GetAccountsId, GetAccountsIdResponse } from "./getAccountsId"
import { PatchAccountsId, PatchAccountsIdResponse } from "./patchAccountsId"
import { DeleteAccountsId } from "./deleteAccountsId"
import { GetAccountsAccountIdAcademicHistories, GetAccountsAccountIdAcademicHistoriesResponse } from "./getAccountsAccountIdAcademicHistories"
import { GetAccountsAccountIdWorkHistories, GetAccountsAccountIdWorkHistoriesResponse } from "./getAccountsAccountIdWorkHistories"
import { GetAccountsAccountIdSkills, GetAccountsAccountIdSkillsResponse } from "./getAccountsAccountIdSkills"
import { GetAccountsAccountIdHopes, GetAccountsAccountIdHopesResponse } from "./getAccountsAccountIdHopes"
import { GetAccountsAccountIdProjectResult, GetAccountsAccountIdProjectResultResponse } from "./getAccountsAccountIdProjectResult"
import { GetAccountsAccountIdOccupationHistories, GetAccountsAccountIdOccupationHistoriesResponse } from "./getAccountsAccountIdOccupationHistories"
import { GetAccountsAccountIdIndustryHistories, GetAccountsAccountIdIndustryHistoriesResponse } from "./getAccountsAccountIdIndustryHistories"
import { GetAccountsAccountIdAchievements, GetAccountsAccountIdAchievementsResponse } from "./getAccountsAccountIdAchievements"
import { GetWithdrawals, GetWithdrawalsResponse } from "./getWithdrawals"
import { GetPayouts, GetPayoutsResponse } from "./getPayouts"
import { GetFeatures, GetFeaturesResponse } from "./getFeatures"
import { PostFeatures, PostFeaturesResponse } from "./postFeatures"
import { GetOfficialInformations, GetOfficialInformationsResponse } from "./getOfficialInformations"
import { PostOfficialInformations, PostOfficialInformationsResponse } from "./postOfficialInformations"
import { GetOfficialInformationsId, GetOfficialInformationsIdResponse } from "./getOfficialInformationsId"
import { PatchOfficialInformationsId, PatchOfficialInformationsIdResponse } from "./patchOfficialInformationsId"
import { DeleteOfficialInformationsId } from "./deleteOfficialInformationsId"

type ApiProps = {
fetch: AxiosStatic
};
export const api = ({ fetch }: ApiProps) => {
return {
  async getEmploymentStatuses({ variables }: GetEmploymentStatuses): Promise<GetEmploymentStatusesResponse> {
    const res = await fetch.get("/employment_statuses" )
    return res.data
  },
  async postEmploymentStatuses({ variables }: PostEmploymentStatuses): Promise<PostEmploymentStatusesResponse> {
    const res = await fetch.post("/employment_statuses", variables.requestBody )
    return res.data
  },
  async getEmploymentStatusesId({ variables }: GetEmploymentStatusesId): Promise<GetEmploymentStatusesIdResponse> {
    const res = await fetch.get("/employment_statuses/{id}" )
    return res.data
  },
  async patchEmploymentStatusesId({ variables }: PatchEmploymentStatusesId): Promise<PatchEmploymentStatusesIdResponse> {
    const res = await fetch.patch("/employment_statuses/{id}", variables.requestBody )
    return res.data
  },
  async deleteEmploymentStatusesId({ variables }: DeleteEmploymentStatusesId) {
    const res = await fetch.delete("/employment_statuses/{id}" )
    return res.data
  },
  async getStates({ variables }: GetStates): Promise<GetStatesResponse> {
    const res = await fetch.get("/states" )
    return res.data
  },
  async postStates({ variables }: PostStates): Promise<PostStatesResponse> {
    const res = await fetch.post("/states", variables.requestBody )
    return res.data
  },
  async getStatesId({ variables }: GetStatesId): Promise<GetStatesIdResponse> {
    const res = await fetch.get("/states/{id}" )
    return res.data
  },
  async patchStatesId({ variables }: PatchStatesId): Promise<PatchStatesIdResponse> {
    const res = await fetch.patch("/states/{id}", variables.requestBody )
    return res.data
  },
  async deleteStatesId({ variables }: DeleteStatesId) {
    const res = await fetch.delete("/states/{id}" )
    return res.data
  },
  async getTermHistories({ variables }: GetTermHistories): Promise<GetTermHistoriesResponse> {
    const res = await fetch.get("/term_histories" , variables.queryParams)
    return res.data
  },
  async postTermHistories({ variables }: PostTermHistories): Promise<PostTermHistoriesResponse> {
    const res = await fetch.post("/term_histories", variables.requestBody )
    return res.data
  },
  async getTermHistoriesId({ variables }: GetTermHistoriesId): Promise<GetTermHistoriesIdResponse> {
    const res = await fetch.get("/term_histories/{id}" )
    return res.data
  },
  async getPrivacyPolicyHistories({ variables }: GetPrivacyPolicyHistories): Promise<GetPrivacyPolicyHistoriesResponse> {
    const res = await fetch.get("/privacy_policy_histories" )
    return res.data
  },
  async postPrivacyPolicyHistories({ variables }: PostPrivacyPolicyHistories): Promise<PostPrivacyPolicyHistoriesResponse> {
    const res = await fetch.post("/privacy_policy_histories", variables.requestBody )
    return res.data
  },
  async getPrivacyPolicyHistoriesId({ variables }: GetPrivacyPolicyHistoriesId): Promise<GetPrivacyPolicyHistoriesIdResponse> {
    const res = await fetch.get("/privacy_policy_histories/{id}" )
    return res.data
  },
  async getConsentMatters({ variables }: GetConsentMatters): Promise<GetConsentMattersResponse> {
    const res = await fetch.get("/consent_matters" )
    return res.data
  },
  async postConsentMatters({ variables }: PostConsentMatters): Promise<PostConsentMattersResponse> {
    const res = await fetch.post("/consent_matters", variables.requestBody )
    return res.data
  },
  async getConsentMattersId({ variables }: GetConsentMattersId): Promise<GetConsentMattersIdResponse> {
    const res = await fetch.get("/consent_matters/{id}" )
    return res.data
  },
  async getProduct({ variables }: GetProduct): Promise<GetProductResponse> {
    const res = await fetch.get("/products" )
    return res.data
  },
  async postProduct({ variables }: PostProduct): Promise<PostProductResponse> {
    const res = await fetch.post("/products", variables.requestBody )
    return res.data
  },
  async getProductsId({ variables }: GetProductsId): Promise<GetProductsIdResponse> {
    const res = await fetch.get("/products/{id}" )
    return res.data
  },
  async patchProductsId({ variables }: PatchProductsId): Promise<PatchProductsIdResponse> {
    const res = await fetch.patch("/products/{id}", variables.requestBody )
    return res.data
  },
  async deleteProductsId({ variables }: DeleteProductsId) {
    const res = await fetch.delete("/products/{id}" )
    return res.data
  },
  async getProductsIdPrices({ variables }: GetProductsIdPrices): Promise<GetProductsIdPricesResponse> {
    const res = await fetch.get("/products/{id}/prices" )
    return res.data
  },
  async postProductsIdPrices({ variables }: PostProductsIdPrices): Promise<PostProductsIdPricesResponse> {
    const res = await fetch.post("/products/{id}/prices", variables.requestBody )
    return res.data
  },
  async getPricesId({ variables }: GetPricesId): Promise<GetPricesIdResponse> {
    const res = await fetch.get("/prices/{id}" )
    return res.data
  },
  async patchPricesId({ variables }: PatchPricesId): Promise<PatchPricesIdResponse> {
    const res = await fetch.patch("/prices/{id}", variables.requestBody )
    return res.data
  },
  async getJobChangeCompletionReports({ variables }: GetJobChangeCompletionReports): Promise<GetJobChangeCompletionReportsResponse> {
    const res = await fetch.get("/job_change_completion_reports" )
    return res.data
  },
  async getRecruitmentCompletionReports({ variables }: GetRecruitmentCompletionReports): Promise<GetRecruitmentCompletionReportsResponse> {
    const res = await fetch.get("/recruitment_completion_reports" )
    return res.data
  },
  async getRecruitments({ variables }: GetRecruitments): Promise<GetRecruitmentsResponse> {
    const res = await fetch.get("/recruitments" , variables.queryParams)
    return res.data
  },
  async getRecruitmentsId({ variables }: GetRecruitmentsId): Promise<GetRecruitmentsIdResponse> {
    const res = await fetch.get("/recruitments/{id}" )
    return res.data
  },
  async patchRecruitmentsId({ variables }: PatchRecruitmentsId): Promise<PatchRecruitmentsIdResponse> {
    const res = await fetch.patch("/recruitments/{id}", variables.requestBody )
    return res.data
  },
  async deleteRecruitmentsId({ variables }: DeleteRecruitmentsId) {
    const res = await fetch.delete("/recruitments/{id}" )
    return res.data
  },
  async getCompanies({ variables }: GetCompanies): Promise<GetCompaniesResponse> {
    const res = await fetch.get("/companies" , variables.queryParams)
    return res.data
  },
  async getCompaniesId({ variables }: GetCompaniesId): Promise<GetCompaniesIdResponse> {
    const res = await fetch.get("/companies/{id}" )
    return res.data
  },
  async patchCompaniesId({ variables }: PatchCompaniesId): Promise<PatchCompaniesIdResponse> {
    const res = await fetch.patch("/companies/{id}", variables.requestBody )
    return res.data
  },
  async deleteCompaniesId({ variables }: DeleteCompaniesId) {
    const res = await fetch.delete("/companies/{id}" )
    return res.data
  },
  async postCompaniesCompanyIdAccept({ variables }: PostCompaniesCompanyIdAccept): Promise<PostCompaniesCompanyIdAcceptResponse> {
    const res = await fetch.post("/companies/{company_id}/accept" )
    return res.data
  },
  async postCompaniesCompanyIdReject({ variables }: PostCompaniesCompanyIdReject): Promise<PostCompaniesCompanyIdRejectResponse> {
    const res = await fetch.post("/companies/{company_id}/reject" )
    return res.data
  },
  async postCompaniesCompanyIdForcedCancel({ variables }: PostCompaniesCompanyIdForcedCancel): Promise<PostCompaniesCompanyIdForcedCancelResponse> {
    const res = await fetch.post("/companies/{company_id}/forced_cancel" )
    return res.data
  },
  async getAccounts({ variables }: GetAccounts): Promise<GetAccountsResponse> {
    const res = await fetch.get("/accounts" , variables.queryParams)
    return res.data
  },
  async getAccountsId({ variables }: GetAccountsId): Promise<GetAccountsIdResponse> {
    const res = await fetch.get("/accounts/{id}" )
    return res.data
  },
  async patchAccountsId({ variables }: PatchAccountsId): Promise<PatchAccountsIdResponse> {
    const res = await fetch.patch("/accounts/{id}", variables.requestBody )
    return res.data
  },
  async deleteAccountsId({ variables }: DeleteAccountsId) {
    const res = await fetch.delete("/accounts/{id}" )
    return res.data
  },
  async getAccountsAccountIdAcademicHistories({ variables }: GetAccountsAccountIdAcademicHistories): Promise<GetAccountsAccountIdAcademicHistoriesResponse> {
    const res = await fetch.get("/accounts/{account_id}/academic_histories" , variables.queryParams)
    return res.data
  },
  async getAccountsAccountIdWorkHistories({ variables }: GetAccountsAccountIdWorkHistories): Promise<GetAccountsAccountIdWorkHistoriesResponse> {
    const res = await fetch.get("/accounts/{account_id}/work_histories" )
    return res.data
  },
  async getAccountsAccountIdSkills({ variables }: GetAccountsAccountIdSkills): Promise<GetAccountsAccountIdSkillsResponse> {
    const res = await fetch.get("/accounts/{account_id}/skills" )
    return res.data
  },
  async getAccountsAccountIdHopes({ variables }: GetAccountsAccountIdHopes): Promise<GetAccountsAccountIdHopesResponse> {
    const res = await fetch.get("/accounts/{account_id}/hopes" )
    return res.data
  },
  async getAccountsAccountIdProjectResult({ variables }: GetAccountsAccountIdProjectResult): Promise<GetAccountsAccountIdProjectResultResponse> {
    const res = await fetch.get("/accounts/{account_id}/project_result" )
    return res.data
  },
  async getAccountsAccountIdOccupationHistories({ variables }: GetAccountsAccountIdOccupationHistories): Promise<GetAccountsAccountIdOccupationHistoriesResponse> {
    const res = await fetch.get("/accounts/{account_id}/occupation_histories" )
    return res.data
  },
  async getAccountsAccountIdIndustryHistories({ variables }: GetAccountsAccountIdIndustryHistories): Promise<GetAccountsAccountIdIndustryHistoriesResponse> {
    const res = await fetch.get("/accounts/{account_id}/industry_histories" )
    return res.data
  },
  async getAccountsAccountIdAchievements({ variables }: GetAccountsAccountIdAchievements): Promise<GetAccountsAccountIdAchievementsResponse> {
    const res = await fetch.get("/accounts/{account_id}/achievements" )
    return res.data
  },
  async getWithdrawals({ variables }: GetWithdrawals): Promise<GetWithdrawalsResponse> {
    const res = await fetch.get("/withdrawals" )
    return res.data
  },
  async getPayouts({ variables }: GetPayouts): Promise<GetPayoutsResponse> {
    const res = await fetch.get("/payouts" )
    return res.data
  },
  async getFeatures({ variables }: GetFeatures): Promise<GetFeaturesResponse> {
    const res = await fetch.get("/features" , variables.queryParams)
    return res.data
  },
  async postFeatures({ variables }: PostFeatures): Promise<PostFeaturesResponse> {
    const res = await fetch.post("/features", variables.requestBody )
    return res.data
  },
  async getOfficialInformations({ variables }: GetOfficialInformations): Promise<GetOfficialInformationsResponse> {
    const res = await fetch.get("/official_informations" , variables.queryParams)
    return res.data
  },
  async postOfficialInformations({ variables }: PostOfficialInformations): Promise<PostOfficialInformationsResponse> {
    const res = await fetch.post("/official_informations", variables.requestBody )
    return res.data
  },
  async getOfficialInformationsId({ variables }: GetOfficialInformationsId): Promise<GetOfficialInformationsIdResponse> {
    const res = await fetch.get("/official_informations/{id}" )
    return res.data
  },
  async patchOfficialInformationsId({ variables }: PatchOfficialInformationsId): Promise<PatchOfficialInformationsIdResponse> {
    const res = await fetch.patch("/official_informations/{id}", variables.requestBody )
    return res.data
  },
  async deleteOfficialInformationsId({ variables }: DeleteOfficialInformationsId) {
    const res = await fetch.delete("/official_informations/{id}" )
    return res.data}
  }
}