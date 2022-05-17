import type * as Types from './@types';
export type GetJobsJobIdJobReviewsUrlParams = {
  jobId: string
} | undefined
export type GetJobsJobIdJobReviewsResponse = {
  jobReviews: Types.JobReview_v1[]
  totalDataNums: number
}
export type GetJobsJobIdJobReviews = {
  variables: {
    urlParams: GetJobsJobIdJobReviewsUrlParams
  }
}