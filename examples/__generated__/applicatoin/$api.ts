import { AxiosStatic, AxiosInstance } from "axios"
import { GetAccountsId, GetAccountsIdResponse } from "./getAccountsId"
import { PatchAccountsId, PatchAccountsIdResponse } from "./patchAccountsId"
import { DeleteAccountsId, DeleteAccountsIdResponse } from "./deleteAccountsId"
import { GetAccountsAccountIdFollowing, GetAccountsAccountIdFollowingResponse } from "./getAccountsAccountIdFollowing"
import { PostAccountsAccountIdFollowing, PostAccountsAccountIdFollowingResponse } from "./postAccountsAccountIdFollowing"
import { GetAccountsAccountIdMessages, GetAccountsAccountIdMessagesResponse } from "./getAccountsAccountIdMessages"
import { GetAccountsAccountIdNotifications, GetAccountsAccountIdNotificationsResponse } from "./getAccountsAccountIdNotifications"
import { GetAccountsAccountIdSearchConditions, GetAccountsAccountIdSearchConditionsResponse } from "./getAccountsAccountIdSearchConditions"
import { PostCompaniesCompanyIdSearchConditions, PostCompaniesCompanyIdSearchConditionsResponse } from "./postCompaniesCompanyIdSearchConditions"
import { GetAccountsAccountIdApplicants, GetAccountsAccountIdApplicantsResponse } from "./getAccountsAccountIdApplicants"
import { PostAccountsAccountIdApplicants, PostAccountsAccountIdApplicantsResponse } from "./postAccountsAccountIdApplicants"
import { GetAccountsAccountIdWorkHistories, GetAccountsAccountIdWorkHistoriesResponse } from "./getAccountsAccountIdWorkHistories"
import { PostAccountsAccountIdWorkHistories, PostAccountsAccountIdWorkHistoriesResponse } from "./postAccountsAccountIdWorkHistories"
import { GetAccountsAccountIdAcademicHistories, GetAccountsAccountIdAcademicHistoriesResponse } from "./getAccountsAccountIdAcademicHistories"
import { PostAccountsAccountIdAcademicHistories, PostAccountsAccountIdAcademicHistoriesResponse } from "./postAccountsAccountIdAcademicHistories"
import { GetAccountsAccountIdProfile, GetAccountsAccountIdProfileResponse } from "./getAccountsAccountIdProfile"
import { PostAccountsAccountIdProfile, PostAccountsAccountIdProfileResponse } from "./postAccountsAccountIdProfile"
import { PatchAccountsAccountIdProfile, PatchAccountsAccountIdProfileResponse } from "./patchAccountsAccountIdProfile"
import { PutAccountsAccountIdProfileFiles, PutAccountsAccountIdProfileFilesResponse } from "./putAccountsAccountIdProfileFiles"
import { DeleteAccountsAccountIdProfileFilesFileId, DeleteAccountsAccountIdProfileFilesFileIdResponse } from "./deleteAccountsAccountIdProfileFilesFileId"
import { GetAccountsAccountIdProfileSpecialtyCompanyTypes, GetAccountsAccountIdProfileSpecialtyCompanyTypesResponse } from "./getAccountsAccountIdProfileSpecialtyCompanyTypes"
import { PostAccountsAccountIdProfileSpecialtyCompanyTypes } from "./postAccountsAccountIdProfileSpecialtyCompanyTypes"
import { GetAccountsAccountIdProfileSpecialtyPositions } from "./getAccountsAccountIdProfileSpecialtyPositions"
import { PostAccountsAccountIdProfileSpecialtyPositions } from "./postAccountsAccountIdProfileSpecialtyPositions"
import { GetAccountsAccountIdEmployments, GetAccountsAccountIdEmploymentsResponse } from "./getAccountsAccountIdEmployments"
import { DeleteEmploymentsId } from "./deleteEmploymentsId"
import { GetAccountsAccountIdSkills, GetAccountsAccountIdSkillsResponse } from "./getAccountsAccountIdSkills"
import { PatchAccountsAccountIdSkills, PatchAccountsAccountIdSkillsResponse } from "./patchAccountsAccountIdSkills"
import { GetAccountsAccountIdMessages, GetAccountsAccountIdMessagesResponse } from "./getAccountsAccountIdMessages"
import { GetAccountsAccountIdIncomeHistories, GetAccountsAccountIdIncomeHistoriesResponse } from "./getAccountsAccountIdIncomeHistories"
import { GetAccountsAccountIdWithdrawals, GetAccountsAccountIdWithdrawalsResponse } from "./getAccountsAccountIdWithdrawals"
import { PostAccountsAccountIdWithdrawals, PostAccountsAccountIdWithdrawalsResponse } from "./postAccountsAccountIdWithdrawals"
import { GetAccountsAccountIdWithdrawalBalance, GetAccountsAccountIdWithdrawalBalanceResponse } from "./getAccountsAccountIdWithdrawalBalance"
import { GetAccountsAccountIdBankAccount, GetAccountsAccountIdBankAccountResponse } from "./getAccountsAccountIdBankAccount"
import { PostAccountsAccountIdBankAccount, PostAccountsAccountIdBankAccountResponse } from "./postAccountsAccountIdBankAccount"
import { PostAccountsAccountIdBankAccountChange, PostAccountsAccountIdBankAccountChangeResponse } from "./postAccountsAccountIdBankAccountChange"
import { GetAccountsAccountIdContracts, GetAccountsAccountIdContractsResponse } from "./getAccountsAccountIdContracts"
import { GetAccountsAccountIdWorks, GetAccountsAccountIdWorksResponse } from "./getAccountsAccountIdWorks"
import { GetAccountsAccountIdRecruitmentInterests, GetAccountsAccountIdRecruitmentInterestsResponse } from "./getAccountsAccountIdRecruitmentInterests"
import { PostAccountsAccountIdRecruitmentInterests, PostAccountsAccountIdRecruitmentInterestsResponse } from "./postAccountsAccountIdRecruitmentInterests"
import { PostAccountsAccountIdSupport, PostAccountsAccountIdSupportResponse } from "./postAccountsAccountIdSupport"
import { DeleteAccountsAccountIdSupport } from "./deleteAccountsAccountIdSupport"
import { PatchAccountsAccountIdSupport, PatchAccountsAccountIdSupportResponse } from "./patchAccountsAccountIdSupport"
import { GetAccountsAccountIdSupport, GetAccountsAccountIdSupportResponse } from "./getAccountsAccountIdSupport"
import { GetAccountsAccountIdProjectResults, GetAccountsAccountIdProjectResultsResponse } from "./getAccountsAccountIdProjectResults"
import { GetAccountsAccountIdAchievements, GetAccountsAccountIdAchievementsResponse } from "./getAccountsAccountIdAchievements"
import { PostAccountsAccountIdAchievements, PostAccountsAccountIdAchievementsResponse } from "./postAccountsAccountIdAchievements"
import { PostAccountsAccountIdMarkAsRead } from "./postAccountsAccountIdMarkAsRead"
import { PostAccountsAccountIdHopes, PostAccountsAccountIdHopesResponse } from "./postAccountsAccountIdHopes"
import { GetAccountsAccountIdHope, GetAccountsAccountIdHopeResponse } from "./getAccountsAccountIdHope"
import { GetAccountsAccountIdIndustryHistories, GetAccountsAccountIdIndustryHistoriesResponse } from "./getAccountsAccountIdIndustryHistories"
import { PostAccountsAccountIdIndustryHistories, PostAccountsAccountIdIndustryHistoriesResponse } from "./postAccountsAccountIdIndustryHistories"
import { GetAccountsAccountIdOccupationHistories, GetAccountsAccountIdOccupationHistoriesResponse } from "./getAccountsAccountIdOccupationHistories"
import { PostAccountsAccountIdOccupationHistories, PostAccountsAccountIdOccupationHistoriesResponse } from "./postAccountsAccountIdOccupationHistories"
import { GetAccountsAccountIdIdentification, GetAccountsAccountIdIdentificationResponse } from "./getAccountsAccountIdIdentification"
import { GetaccountsAccountIdAgreeConsentMatters, GetaccountsAccountIdAgreeConsentMattersResponse } from "./getaccountsAccountIdAgreeConsentMatters"
import { PostAccountsAccountIdCompletionReports, PostAccountsAccountIdCompletionReportsResponse } from "./postAccountsAccountIdCompletionReports"
import { GetAccountsAccountIdJobChangeCompletionReports, GetAccountsAccountIdJobChangeCompletionReportsResponse } from "./getAccountsAccountIdJobChangeCompletionReports"
import { DeleteAccountsAccountIdFollowingCompanyId } from "./deleteAccountsAccountIdFollowingCompanyId"
import { GetRecruitments, GetRecruitmentsResponse } from "./getRecruitments"
import { GetRecruitmentsRecommended, GetRecruitmentsRecommendedResponse } from "./getRecruitmentsRecommended"
import { GetRecruitmentsId, GetRecruitmentsIdResponse } from "./getRecruitmentsId"
import { GetAccountsAccountIdRoomsId, GetAccountsAccountIdRoomsIdResponse } from "./getAccountsAccountIdRoomsId"
import { GetAccountsAccountIdRoomsRoomIdMessages, GetAccountsAccountIdRoomsRoomIdMessagesResponse } from "./getAccountsAccountIdRoomsRoomIdMessages"
import { PostAccountsAccountIdRoomsRoomIdMessages, PostAccountsAccountIdRoomsRoomIdMessagesResponse } from "./postAccountsAccountIdRoomsRoomIdMessages"
import { PostRoomsRoomIdMarkAsRead } from "./postRoomsRoomIdMarkAsRead"
import { GetAccountsAccountIdRoomsRoomIdMessagesId, GetAccountsAccountIdRoomsRoomIdMessagesIdResponse } from "./getAccountsAccountIdRoomsRoomIdMessagesId"
import { GetContentMatters, GetContentMattersResponse } from "./getContentMatters"
import { GetContentMattersId, GetContentMattersIdResponse } from "./getContentMattersId"
import { GetSearchConditionsId, GetSearchConditionsIdResponse } from "./getSearchConditionsId"
import { PostCompaniesCompanyIdSearchConditions, PostCompaniesCompanyIdSearchConditionsResponse } from "./postCompaniesCompanyIdSearchConditions"
import { DeleteSearchConditionsId } from "./deleteSearchConditionsId"
import { GetJobChangeCompletionReportsId, GetJobChangeCompletionReportsIdResponse } from "./getJobChangeCompletionReportsId"
import { GetCities, GetCitiesResponse } from "./getCities"
import { GetCitiesId, GetCitiesIdResponse } from "./getCitiesId"
import { GetWorkHistoriesId, GetWorkHistoriesIdResponse } from "./getWorkHistoriesId"
import { PatchWorkHistoriesId, PatchWorkHistoriesIdResponse } from "./patchWorkHistoriesId"
import { DeleteWorkHistoriesId } from "./deleteWorkHistoriesId"
import { GetWorkHistoriesWorkHistoryIdProjectHistories, GetWorkHistoriesWorkHistoryIdProjectHistoriesResponse } from "./getWorkHistoriesWorkHistoryIdProjectHistories"
import { PostWorkHistoriesWorkHistoryIdProjectHistories, PostWorkHistoriesWorkHistoryIdProjectHistoriesResponse } from "./postWorkHistoriesWorkHistoryIdProjectHistories"
import { PatchProjectHistoriesId, PatchProjectHistoriesIdResponse } from "./patchProjectHistoriesId"
import { DeleteProjectHistoriesId, DeleteProjectHistoriesIdResponse } from "./deleteProjectHistoriesId"
import { GetAcademicHistoriesId, GetAcademicHistoriesIdResponse } from "./getAcademicHistoriesId"
import { PatchAcademicHistoriesId, PatchAcademicHistoriesIdResponse } from "./patchAcademicHistoriesId"
import { DeleteAcademicHistoriesId } from "./deleteAcademicHistoriesId"
import { DeleteNotAgreedConsentMattersId } from "./deleteNotAgreedConsentMattersId"
import { GetOccupationMainCategories, GetOccupationMainCategoriesResponse } from "./getOccupationMainCategories"
import { GetIndustryCategories, GetIndustryCategoriesResponse } from "./getIndustryCategories"
import { GetCompanies, GetCompaniesResponse } from "./getCompanies"
import { PostCompanies } from "./postCompanies"
import { GetCompaniesRecommended, GetCompaniesRecommendedResponse } from "./getCompaniesRecommended"
import { GetCompaniesId, GetCompaniesIdResponse } from "./getCompaniesId"
import { GetCompaniesCompanyIdRecruitments, GetCompaniesCompanyIdRecruitmentsResponse } from "./getCompaniesCompanyIdRecruitments"
import { GetOccupationHistoriesId, GetOccupationHistoriesIdResponse } from "./getOccupationHistoriesId"
import { PatchOccupationHistoriesId, PatchOccupationHistoriesIdResponse } from "./patchOccupationHistoriesId"
import { DeleteOccupationHistoriesId } from "./deleteOccupationHistoriesId"
import { GetIndustryHistoriesId, GetIndustryHistoriesIdResponse } from "./getIndustryHistoriesId"
import { PatchIndustryHistoriesId, PatchIndustryHistoriesIdResponse } from "./patchIndustryHistoriesId"
import { DeleteIndustryHistoriesId } from "./deleteIndustryHistoriesId"
import { GetHopesId, GetHopesIdResponse } from "./getHopesId"
import { PatchHopesId, PatchHopesIdResponse } from "./patchHopesId"
import { DeleteHopesId } from "./deleteHopesId"
import { GetNda, GetNdaResponse } from "./getNda"
import { PostNdaNdaIdConsent, PostNdaNdaIdConsentResponse } from "./postNdaNdaIdConsent"
import { GetEmploymentsVerifyEmail } from "./getEmploymentsVerifyEmail"
import { PostEmploymentsEmploymentIdJoin } from "./postEmploymentsEmploymentIdJoin"
import { GetSkills, GetSkillsResponse } from "./getSkills"
import { PostSkills, PostSkillsResponse } from "./postSkills"
import { GetPolicies, GetPoliciesResponse } from "./getPolicies"
import { PatchAchievementsId, PatchAchievementsIdResponse } from "./patchAchievementsId"
import { DeleteAchievementsId } from "./deleteAchievementsId"
import { DeleteRecruitmentInterestsRecruitmentId } from "./deleteRecruitmentInterestsRecruitmentId"
import { PatchSpecialtyCompanyTypesId, PatchSpecialtyCompanyTypesIdResponse } from "./patchSpecialtyCompanyTypesId"
import { DeleteSpecialtyCompanyTypesId } from "./deleteSpecialtyCompanyTypesId"
import { PatchSpecialtyPositionsId, PatchSpecialtyPositionsIdResponse } from "./patchSpecialtyPositionsId"
import { DeleteSpecialtyPositionsId } from "./deleteSpecialtyPositionsId"
import { GetJobOrdersId, GetJobOrdersIdResponse } from "./getJobOrdersId"
import { PatchJobOrdersId, PatchJobOrdersIdResponse } from "./patchJobOrdersId"
import { GetJobsId, GetJobsIdResponse } from "./getJobsId"
import { PatchJobsId, PatchJobsIdResponse } from "./patchJobsId"
import { GetJobsJobIdContracts, GetJobsJobIdContractsResponse } from "./getJobsJobIdContracts"
import { PostJobsJobIdInvoices, PostJobsJobIdInvoicesResponse } from "./postJobsJobIdInvoices"
import { PostJobsJobIdInvoicesCheck, PostJobsJobIdInvoicesCheckResponse } from "./postJobsJobIdInvoicesCheck"
import { GetInvoicesId, GetInvoicesIdResponse } from "./getInvoicesId"
import { GetJobsJobIdJobReviews, GetJobsJobIdJobReviewsResponse } from "./getJobsJobIdJobReviews"
import { GetJobReviewsId, GetJobReviewsIdResponse } from "./getJobReviewsId"

type ApiProps = {
  fetch: AxiosStatic | AxiosInstance
};
export const api = ({ fetch }: ApiProps) => {
  return {
    async getAccountsId({ variables }: GetAccountsId): Promise<GetAccountsIdResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.id}`)
      return res.data
    },
    async patchAccountsId({ variables }: PatchAccountsId): Promise<PatchAccountsIdResponse> {
      const res = await fetch.patch(`/accounts/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteAccountsId({ variables }: DeleteAccountsId): Promise<DeleteAccountsIdResponse> {
      const res = await fetch.delete(`/accounts/${variables.urlParams?.id}`)
      return res.data
    },
    async getAccountsAccountIdFollowing({ variables }: GetAccountsAccountIdFollowing): Promise<GetAccountsAccountIdFollowingResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/followings`)
      return res.data
    },
    async postAccountsAccountIdFollowing({ variables }: PostAccountsAccountIdFollowing): Promise<PostAccountsAccountIdFollowingResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/followings`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdMessages({ variables }: GetAccountsAccountIdMessages): Promise<GetAccountsAccountIdMessagesResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/rooms`)
      return res.data
    },
    async getAccountsAccountIdNotifications({ variables }: GetAccountsAccountIdNotifications): Promise<GetAccountsAccountIdNotificationsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/notifications`, {
        params: variables.queryParams
      })
      return res.data
    },
    async getAccountsAccountIdSearchConditions({ variables }: GetAccountsAccountIdSearchConditions): Promise<GetAccountsAccountIdSearchConditionsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/searchConditions`, {
        params: variables.queryParams
      })
      return res.data
    },
    async postCompaniesCompanyIdSearchConditions({ variables }: PostCompaniesCompanyIdSearchConditions): Promise<PostCompaniesCompanyIdSearchConditionsResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/searchConditions`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdApplicants({ variables }: GetAccountsAccountIdApplicants): Promise<GetAccountsAccountIdApplicantsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/applicants`)
      return res.data
    },
    async postAccountsAccountIdApplicants({ variables }: PostAccountsAccountIdApplicants): Promise<PostAccountsAccountIdApplicantsResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/applicants`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdWorkHistories({ variables }: GetAccountsAccountIdWorkHistories): Promise<GetAccountsAccountIdWorkHistoriesResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/workHistories`)
      return res.data
    },
    async postAccountsAccountIdWorkHistories({ variables }: PostAccountsAccountIdWorkHistories): Promise<PostAccountsAccountIdWorkHistoriesResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/workHistories`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdAcademicHistories({ variables }: GetAccountsAccountIdAcademicHistories): Promise<GetAccountsAccountIdAcademicHistoriesResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/academicHistories`)
      return res.data
    },
    async postAccountsAccountIdAcademicHistories({ variables }: PostAccountsAccountIdAcademicHistories): Promise<PostAccountsAccountIdAcademicHistoriesResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/academicHistories`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdProfile({ variables }: GetAccountsAccountIdProfile): Promise<GetAccountsAccountIdProfileResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/profile`)
      return res.data
    },
    async postAccountsAccountIdProfile({ variables }: PostAccountsAccountIdProfile): Promise<PostAccountsAccountIdProfileResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/profile`, variables.requestBody)
      return res.data
    },
    async patchAccountsAccountIdProfile({ variables }: PatchAccountsAccountIdProfile): Promise<PatchAccountsAccountIdProfileResponse> {
      const res = await fetch.patch(`/accounts/${variables.urlParams?.accountId}/profile`, variables.requestBody)
      return res.data
    },
    async putAccountsAccountIdProfileFiles({ variables }: PutAccountsAccountIdProfileFiles): Promise<PutAccountsAccountIdProfileFilesResponse> {
      const res = await fetch.put(`/accounts/${variables.urlParams?.accountId}/profile/files`, variables.requestBody)
      return res.data
    },
    async deleteAccountsAccountIdProfileFilesFileId({ variables }: DeleteAccountsAccountIdProfileFilesFileId): Promise<DeleteAccountsAccountIdProfileFilesFileIdResponse> {
      const res = await fetch.delete(`/accounts/${variables.urlParams?.accountId}/profile/files/:fileId`)
      return res.data
    },
    async getAccountsAccountIdProfileSpecialtyCompanyTypes({ variables }: GetAccountsAccountIdProfileSpecialtyCompanyTypes): Promise<GetAccountsAccountIdProfileSpecialtyCompanyTypesResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/profile/specialtyCompanyTypes`)
      return res.data
    },
    async postAccountsAccountIdProfileSpecialtyCompanyTypes({ variables }: PostAccountsAccountIdProfileSpecialtyCompanyTypes) {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/profile/specialtyCompanyTypes`)
      return res.data
    },
    async getAccountsAccountIdProfileSpecialtyPositions({ variables }: GetAccountsAccountIdProfileSpecialtyPositions) {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/profile/specialtyPositions`)
      return res.data
    },
    async postAccountsAccountIdProfileSpecialtyPositions({ variables }: PostAccountsAccountIdProfileSpecialtyPositions) {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/profile/specialtyPositions`)
      return res.data
    },
    async getAccountsAccountIdEmployments({ variables }: GetAccountsAccountIdEmployments): Promise<GetAccountsAccountIdEmploymentsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/employments`)
      return res.data
    },
    async deleteEmploymentsId({ variables }: DeleteEmploymentsId) {
      const res = await fetch.delete(`/accounts/${variables.urlParams?.accountId}/employments`)
      return res.data
    },
    async getAccountsAccountIdSkills({ variables }: GetAccountsAccountIdSkills): Promise<GetAccountsAccountIdSkillsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/skills`)
      return res.data
    },
    async patchAccountsAccountIdSkills({ variables }: PatchAccountsAccountIdSkills): Promise<PatchAccountsAccountIdSkillsResponse> {
      const res = await fetch.patch(`/accounts/${variables.urlParams?.accountId}/skills`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdMessages({ variables }: GetAccountsAccountIdMessages): Promise<GetAccountsAccountIdMessagesResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/messages`, {
        params: variables.queryParams
      })
      return res.data
    },
    async getAccountsAccountIdIncomeHistories({ variables }: GetAccountsAccountIdIncomeHistories): Promise<GetAccountsAccountIdIncomeHistoriesResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/incomeHistories`)
      return res.data
    },
    async getAccountsAccountIdWithdrawals({ variables }: GetAccountsAccountIdWithdrawals): Promise<GetAccountsAccountIdWithdrawalsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/withdrawals`)
      return res.data
    },
    async postAccountsAccountIdWithdrawals({ variables }: PostAccountsAccountIdWithdrawals): Promise<PostAccountsAccountIdWithdrawalsResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/withdrawals`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdWithdrawalBalance({ variables }: GetAccountsAccountIdWithdrawalBalance): Promise<GetAccountsAccountIdWithdrawalBalanceResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/withdrawalBalance`)
      return res.data
    },
    async getAccountsAccountIdBankAccount({ variables }: GetAccountsAccountIdBankAccount): Promise<GetAccountsAccountIdBankAccountResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/bankAccount`)
      return res.data
    },
    async postAccountsAccountIdBankAccount({ variables }: PostAccountsAccountIdBankAccount): Promise<PostAccountsAccountIdBankAccountResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/bankAccount`, variables.requestBody)
      return res.data
    },
    async postAccountsAccountIdBankAccountChange({ variables }: PostAccountsAccountIdBankAccountChange): Promise<PostAccountsAccountIdBankAccountChangeResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/bankAccount/change`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdContracts({ variables }: GetAccountsAccountIdContracts): Promise<GetAccountsAccountIdContractsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/jobOrders`, {
        params: variables.queryParams
      })
      return res.data
    },
    async getAccountsAccountIdWorks({ variables }: GetAccountsAccountIdWorks): Promise<GetAccountsAccountIdWorksResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/jobs`, {
        params: variables.queryParams
      })
      return res.data
    },
    async getAccountsAccountIdRecruitmentInterests({ variables }: GetAccountsAccountIdRecruitmentInterests): Promise<GetAccountsAccountIdRecruitmentInterestsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/recruitmentInterests`)
      return res.data
    },
    async postAccountsAccountIdRecruitmentInterests({ variables }: PostAccountsAccountIdRecruitmentInterests): Promise<PostAccountsAccountIdRecruitmentInterestsResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/recruitmentInterests`, variables.requestBody)
      return res.data
    },
    async postAccountsAccountIdSupport({ variables }: PostAccountsAccountIdSupport): Promise<PostAccountsAccountIdSupportResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/support`, variables.requestBody)
      return res.data
    },
    async deleteAccountsAccountIdSupport({ variables }: DeleteAccountsAccountIdSupport) {
      const res = await fetch.delete(`/accounts/${variables.urlParams?.accountId}/support`)
      return res.data
    },
    async patchAccountsAccountIdSupport({ variables }: PatchAccountsAccountIdSupport): Promise<PatchAccountsAccountIdSupportResponse> {
      const res = await fetch.patch(`/accounts/${variables.urlParams?.accountId}/support`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdSupport({ variables }: GetAccountsAccountIdSupport): Promise<GetAccountsAccountIdSupportResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/support`)
      return res.data
    },
    async getAccountsAccountIdProjectResults({ variables }: GetAccountsAccountIdProjectResults): Promise<GetAccountsAccountIdProjectResultsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/projectResult`)
      return res.data
    },
    async getAccountsAccountIdAchievements({ variables }: GetAccountsAccountIdAchievements): Promise<GetAccountsAccountIdAchievementsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/achievements`)
      return res.data
    },
    async postAccountsAccountIdAchievements({ variables }: PostAccountsAccountIdAchievements): Promise<PostAccountsAccountIdAchievementsResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/achievements`, variables.requestBody)
      return res.data
    },
    async postAccountsAccountIdMarkAsRead({ variables }: PostAccountsAccountIdMarkAsRead) {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/markAsRead`)
      return res.data
    },
    async postAccountsAccountIdHopes({ variables }: PostAccountsAccountIdHopes): Promise<PostAccountsAccountIdHopesResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/hopes`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdHope({ variables }: GetAccountsAccountIdHope): Promise<GetAccountsAccountIdHopeResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/hopes`)
      return res.data
    },
    async getAccountsAccountIdIndustryHistories({ variables }: GetAccountsAccountIdIndustryHistories): Promise<GetAccountsAccountIdIndustryHistoriesResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/industryHistories`)
      return res.data
    },
    async postAccountsAccountIdIndustryHistories({ variables }: PostAccountsAccountIdIndustryHistories): Promise<PostAccountsAccountIdIndustryHistoriesResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/industryHistories`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdOccupationHistories({ variables }: GetAccountsAccountIdOccupationHistories): Promise<GetAccountsAccountIdOccupationHistoriesResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/occupationHistories`)
      return res.data
    },
    async postAccountsAccountIdOccupationHistories({ variables }: PostAccountsAccountIdOccupationHistories): Promise<PostAccountsAccountIdOccupationHistoriesResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/occupationHistories`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdIdentification({ variables }: GetAccountsAccountIdIdentification): Promise<GetAccountsAccountIdIdentificationResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/identification`)
      return res.data
    },
    async getaccountsAccountIdAgreeConsentMatters({ variables }: GetaccountsAccountIdAgreeConsentMatters): Promise<GetaccountsAccountIdAgreeConsentMattersResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/notAgreedConsentMatters`)
      return res.data
    },
    async postAccountsAccountIdCompletionReports({ variables }: PostAccountsAccountIdCompletionReports): Promise<PostAccountsAccountIdCompletionReportsResponse> {
      const res = await fetch.post(`/accounts/${variables.urlParams?.accountId}/jobChangeCompletionReports`, variables.requestBody)
      return res.data
    },
    async getAccountsAccountIdJobChangeCompletionReports({ variables }: GetAccountsAccountIdJobChangeCompletionReports): Promise<GetAccountsAccountIdJobChangeCompletionReportsResponse> {
      const res = await fetch.get(`/accounts/${variables.urlParams?.accountId}/jobChangeCompletionReports`)
      return res.data
    },
    async deleteAccountsAccountIdFollowingCompanyId({ variables }: DeleteAccountsAccountIdFollowingCompanyId) {
      const res = await fetch.delete(`/followings/${variables.urlParams?.companyId}`)
      return res.data
    },
    async getRecruitments({ variables }: GetRecruitments): Promise<GetRecruitmentsResponse> {
      const res = await fetch.get(`/recruitments`, {
        params: variables.queryParams
      })
      return res.data
    },
    async getRecruitmentsRecommended({ variables }: GetRecruitmentsRecommended): Promise<GetRecruitmentsRecommendedResponse> {
      const res = await fetch.get(`/recruitments/recommended`)
      return res.data
    },
    async getRecruitmentsId({ variables }: GetRecruitmentsId): Promise<GetRecruitmentsIdResponse> {
      const res = await fetch.get(`/recruitments/${variables.urlParams?.id}`)
      return res.data
    },
    async getAccountsAccountIdRoomsId({ variables }: GetAccountsAccountIdRoomsId): Promise<GetAccountsAccountIdRoomsIdResponse> {
      const res = await fetch.get(`/rooms/${variables.urlParams?.id}`)
      return res.data
    },
    async getAccountsAccountIdRoomsRoomIdMessages({ variables }: GetAccountsAccountIdRoomsRoomIdMessages): Promise<GetAccountsAccountIdRoomsRoomIdMessagesResponse> {
      const res = await fetch.get(`/rooms/${variables.urlParams?.roomId}/messages`)
      return res.data
    },
    async postAccountsAccountIdRoomsRoomIdMessages({ variables }: PostAccountsAccountIdRoomsRoomIdMessages): Promise<PostAccountsAccountIdRoomsRoomIdMessagesResponse> {
      const res = await fetch.post(`/rooms/${variables.urlParams?.roomId}/messages`, variables.requestBody)
      return res.data
    },
    async postRoomsRoomIdMarkAsRead({ variables }: PostRoomsRoomIdMarkAsRead) {
      const res = await fetch.post(`/rooms/${variables.urlParams?.roomId}/markAsRead`)
      return res.data
    },
    async getAccountsAccountIdRoomsRoomIdMessagesId({ variables }: GetAccountsAccountIdRoomsRoomIdMessagesId): Promise<GetAccountsAccountIdRoomsRoomIdMessagesIdResponse> {
      const res = await fetch.get(`/messages/${variables.urlParams?.id}`)
      return res.data
    },
    async getContentMatters({ variables }: GetContentMatters): Promise<GetContentMattersResponse> {
      const res = await fetch.get(`/contentMatters`)
      return res.data
    },
    async getContentMattersId({ variables }: GetContentMattersId): Promise<GetContentMattersIdResponse> {
      const res = await fetch.get(`/consentMatters/${variables.urlParams?.id}`)
      return res.data
    },
    async getSearchConditionsId({ variables }: GetSearchConditionsId): Promise<GetSearchConditionsIdResponse> {
      const res = await fetch.get(`/searchConditions/${variables.urlParams?.id}`)
      return res.data
    },
    async postCompaniesCompanyIdSearchConditions({ variables }: PostCompaniesCompanyIdSearchConditions): Promise<PostCompaniesCompanyIdSearchConditionsResponse> {
      const res = await fetch.patch(`/searchConditions/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteSearchConditionsId({ variables }: DeleteSearchConditionsId) {
      const res = await fetch.delete(`/searchConditions/${variables.urlParams?.id}`)
      return res.data
    },
    async getJobChangeCompletionReportsId({ variables }: GetJobChangeCompletionReportsId): Promise<GetJobChangeCompletionReportsIdResponse> {
      const res = await fetch.get(`/jobChangeCompletionReports/${variables.urlParams?.id}`)
      return res.data
    },
    async getCities({ variables }: GetCities): Promise<GetCitiesResponse> {
      const res = await fetch.get(`/stateCategories`)
      return res.data
    },
    async getCitiesId({ variables }: GetCitiesId): Promise<GetCitiesIdResponse> {
      const res = await fetch.get(`/stateCategories/${variables.urlParams?.id}`)
      return res.data
    },
    async getWorkHistoriesId({ variables }: GetWorkHistoriesId): Promise<GetWorkHistoriesIdResponse> {
      const res = await fetch.get(`/workHistories/${variables.urlParams?.id}`)
      return res.data
    },
    async patchWorkHistoriesId({ variables }: PatchWorkHistoriesId): Promise<PatchWorkHistoriesIdResponse> {
      const res = await fetch.patch(`/workHistories/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteWorkHistoriesId({ variables }: DeleteWorkHistoriesId) {
      const res = await fetch.delete(`/workHistories/${variables.urlParams?.id}`)
      return res.data
    },
    async getWorkHistoriesWorkHistoryIdProjectHistories({ variables }: GetWorkHistoriesWorkHistoryIdProjectHistories): Promise<GetWorkHistoriesWorkHistoryIdProjectHistoriesResponse> {
      const res = await fetch.get(`/workHistories/${variables.urlParams?.workHistoryId}/projectHistories`)
      return res.data
    },
    async postWorkHistoriesWorkHistoryIdProjectHistories({ variables }: PostWorkHistoriesWorkHistoryIdProjectHistories): Promise<PostWorkHistoriesWorkHistoryIdProjectHistoriesResponse> {
      const res = await fetch.post(`/workHistories/${variables.urlParams?.workHistoryId}/projectHistories`, variables.requestBody)
      return res.data
    },
    async patchProjectHistoriesId({ variables }: PatchProjectHistoriesId): Promise<PatchProjectHistoriesIdResponse> {
      const res = await fetch.patch(`/projectHistories/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteProjectHistoriesId({ variables }: DeleteProjectHistoriesId): Promise<DeleteProjectHistoriesIdResponse> {
      const res = await fetch.delete(`/projectHistories/${variables.urlParams?.id}`)
      return res.data
    },
    async getAcademicHistoriesId({ variables }: GetAcademicHistoriesId): Promise<GetAcademicHistoriesIdResponse> {
      const res = await fetch.get(`/academicHistories/${variables.urlParams?.id}`)
      return res.data
    },
    async patchAcademicHistoriesId({ variables }: PatchAcademicHistoriesId): Promise<PatchAcademicHistoriesIdResponse> {
      const res = await fetch.patch(`/academicHistories/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteAcademicHistoriesId({ variables }: DeleteAcademicHistoriesId) {
      const res = await fetch.delete(`/academicHistories/${variables.urlParams?.id}`)
      return res.data
    },
    async deleteNotAgreedConsentMattersId({ variables }: DeleteNotAgreedConsentMattersId) {
      const res = await fetch.delete(`/notAgreedConsentMatters/${variables.urlParams?.id}`)
      return res.data
    },
    async getOccupationMainCategories({ variables }: GetOccupationMainCategories): Promise<GetOccupationMainCategoriesResponse> {
      const res = await fetch.get(`/occupationMainCategories`)
      return res.data
    },
    async getIndustryCategories({ variables }: GetIndustryCategories): Promise<GetIndustryCategoriesResponse> {
      const res = await fetch.get(`/industryCategories`)
      return res.data
    },
    async getCompanies({ variables }: GetCompanies): Promise<GetCompaniesResponse> {
      const res = await fetch.get(`/companies`, {
        params: variables.queryParams
      })
      return res.data
    },
    async postCompanies({ variables }: PostCompanies) {
      const res = await fetch.post(`/companies`, variables.requestBody)
      return res.data
    },
    async getCompaniesRecommended({ variables }: GetCompaniesRecommended): Promise<GetCompaniesRecommendedResponse> {
      const res = await fetch.get(`/companies/recommended`)
      return res.data
    },
    async getCompaniesId({ variables }: GetCompaniesId): Promise<GetCompaniesIdResponse> {
      const res = await fetch.get(`/companies/${variables.urlParams?.id}`)
      return res.data
    },
    async getCompaniesCompanyIdRecruitments({ variables }: GetCompaniesCompanyIdRecruitments): Promise<GetCompaniesCompanyIdRecruitmentsResponse> {
      const res = await fetch.get(`/companies/${variables.urlParams?.companyId}/recruitments`, {
        params: variables.queryParams
      })
      return res.data
    },
    async getOccupationHistoriesId({ variables }: GetOccupationHistoriesId): Promise<GetOccupationHistoriesIdResponse> {
      const res = await fetch.get(`/occupationHistories/${variables.urlParams?.id}`)
      return res.data
    },
    async patchOccupationHistoriesId({ variables }: PatchOccupationHistoriesId): Promise<PatchOccupationHistoriesIdResponse> {
      const res = await fetch.patch(`/occupationHistories/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteOccupationHistoriesId({ variables }: DeleteOccupationHistoriesId) {
      const res = await fetch.delete(`/occupationHistories/${variables.urlParams?.id}`)
      return res.data
    },
    async getIndustryHistoriesId({ variables }: GetIndustryHistoriesId): Promise<GetIndustryHistoriesIdResponse> {
      const res = await fetch.get(`/industryHistories/${variables.urlParams?.id}`)
      return res.data
    },
    async patchIndustryHistoriesId({ variables }: PatchIndustryHistoriesId): Promise<PatchIndustryHistoriesIdResponse> {
      const res = await fetch.patch(`/industryHistories/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteIndustryHistoriesId({ variables }: DeleteIndustryHistoriesId) {
      const res = await fetch.delete(`/industryHistories/${variables.urlParams?.id}`)
      return res.data
    },
    async getHopesId({ variables }: GetHopesId): Promise<GetHopesIdResponse> {
      const res = await fetch.get(`/hopes/${variables.urlParams?.id}`)
      return res.data
    },
    async patchHopesId({ variables }: PatchHopesId): Promise<PatchHopesIdResponse> {
      const res = await fetch.patch(`/hopes/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteHopesId({ variables }: DeleteHopesId) {
      const res = await fetch.delete(`/hopes/${variables.urlParams?.id}`)
      return res.data
    },
    async getNda({ variables }: GetNda): Promise<GetNdaResponse> {
      const res = await fetch.get(`/nda`)
      return res.data
    },
    async postNdaNdaIdConsent({ variables }: PostNdaNdaIdConsent): Promise<PostNdaNdaIdConsentResponse> {
      const res = await fetch.post(`/nda/${variables.urlParams?.ndaId}/consent`, variables.requestBody)
      return res.data
    },
    async getEmploymentsVerifyEmail({ variables }: GetEmploymentsVerifyEmail) {
      const res = await fetch.get(`/employments/verifyEmail`, variables.requestBody)
      return res.data
    },
    async postEmploymentsEmploymentIdJoin({ variables }: PostEmploymentsEmploymentIdJoin) {
      const res = await fetch.post(`/employments/${variables.urlParams?.employmentId}/join`, variables.requestBody)
      return res.data
    },
    async getSkills({ variables }: GetSkills): Promise<GetSkillsResponse> {
      const res = await fetch.get(`/skills`, {
        params: variables.queryParams
      })
      return res.data
    },
    async postSkills({ variables }: PostSkills): Promise<PostSkillsResponse> {
      const res = await fetch.post(`/skills`, variables.requestBody)
      return res.data
    },
    async getPolicies({ variables }: GetPolicies): Promise<GetPoliciesResponse> {
      const res = await fetch.get(`/policies`)
      return res.data
    },
    async patchAchievementsId({ variables }: PatchAchievementsId): Promise<PatchAchievementsIdResponse> {
      const res = await fetch.patch(`/achievements/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteAchievementsId({ variables }: DeleteAchievementsId) {
      const res = await fetch.delete(`/achievements/${variables.urlParams?.id}`)
      return res.data
    },
    async deleteRecruitmentInterestsRecruitmentId({ variables }: DeleteRecruitmentInterestsRecruitmentId) {
      const res = await fetch.delete(`/recruitmentInterests/${variables.urlParams?.recruitmentId}`)
      return res.data
    },
    async patchSpecialtyCompanyTypesId({ variables }: PatchSpecialtyCompanyTypesId): Promise<PatchSpecialtyCompanyTypesIdResponse> {
      const res = await fetch.patch(`/specialtyCompanyTypes/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteSpecialtyCompanyTypesId({ variables }: DeleteSpecialtyCompanyTypesId) {
      const res = await fetch.delete(`/specialtyCompanyTypes/${variables.urlParams?.id}`)
      return res.data
    },
    async patchSpecialtyPositionsId({ variables }: PatchSpecialtyPositionsId): Promise<PatchSpecialtyPositionsIdResponse> {
      const res = await fetch.patch(`/specialtyPositions/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async deleteSpecialtyPositionsId({ variables }: DeleteSpecialtyPositionsId) {
      const res = await fetch.delete(`/specialtyPositions/${variables.urlParams?.id}`)
      return res.data
    },
    async getJobOrdersId({ variables }: GetJobOrdersId): Promise<GetJobOrdersIdResponse> {
      const res = await fetch.get(`/jobOrders/${variables.urlParams?.id}`)
      return res.data
    },
    async patchJobOrdersId({ variables }: PatchJobOrdersId): Promise<PatchJobOrdersIdResponse> {
      const res = await fetch.patch(`/jobOrders/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async getJobsId({ variables }: GetJobsId): Promise<GetJobsIdResponse> {
      const res = await fetch.get(`/jobs/${variables.urlParams?.id}`)
      return res.data
    },
    async patchJobsId({ variables }: PatchJobsId): Promise<PatchJobsIdResponse> {
      const res = await fetch.patch(`/jobs/${variables.urlParams?.id}`, variables.requestBody)
      return res.data
    },
    async getJobsJobIdContracts({ variables }: GetJobsJobIdContracts): Promise<GetJobsJobIdContractsResponse> {
      const res = await fetch.get(`/jobs/${variables.urlParams?.jobId}/invoices`)
      return res.data
    },
    async postJobsJobIdInvoices({ variables }: PostJobsJobIdInvoices): Promise<PostJobsJobIdInvoicesResponse> {
      const res = await fetch.post(`/jobs/${variables.urlParams?.jobId}/invoices`, variables.requestBody)
      return res.data
    },
    async postJobsJobIdInvoicesCheck({ variables }: PostJobsJobIdInvoicesCheck): Promise<PostJobsJobIdInvoicesCheckResponse> {
      const res = await fetch.post(`/jobs/${variables.urlParams?.jobId}/invoices/check`, variables.requestBody)
      return res.data
    },
    async getInvoicesId({ variables }: GetInvoicesId): Promise<GetInvoicesIdResponse> {
      const res = await fetch.get(`/invoices/${variables.urlParams?.id}`)
      return res.data
    },
    async getJobsJobIdJobReviews({ variables }: GetJobsJobIdJobReviews): Promise<GetJobsJobIdJobReviewsResponse> {
      const res = await fetch.get(`/jobs/${variables.urlParams?.jobId}/jobReviews`)
      return res.data
    },
    async getJobReviewsId({ variables }: GetJobReviewsId): Promise<GetJobReviewsIdResponse> {
      const res = await fetch.get(`/jobReviews/${variables.urlParams?.id}`)
      return res.data
    }
  }
}