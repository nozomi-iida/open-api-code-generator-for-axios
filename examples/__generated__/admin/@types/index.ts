/* eslint-disable */
export type EmploymentStatus = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  name?: string | undefined
  type?: 'CAREER' | 'PROJECT' | undefined
  /** 「請負」「準委任」「業務委託」 */
  project_classification?: 'contract' | 'quasi_mandate' | 'outsourcing' | undefined
  /** 募集作成の時に選択可能か */
  is_selectable?: boolean | undefined
}

export type State = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  country_code?: string | undefined
  name?: string | undefined
}

export type TermHistory = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  content?: string | undefined
  version?: string | undefined
  type?: 'common' | 'plan' | undefined
}

export type PrivacyPolicyHistory = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  content?: string | undefined
  version?: string | undefined
}

export type ConsentMatter = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  content?: string | undefined
}

export type Product = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  name?: string | undefined
  description?: string | undefined
  active?: boolean | undefined
  type?: 'good' | 'service' | undefined
  plan_type?: 'standard' | 'agent' | 'starter' | undefined
  number?: number | undefined
}

export type Price = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  active?: string | undefined
  currency?: string | undefined
  /** 価格（税抜） */
  unit_amount_without_tax?: number | undefined
  /** 価格（税） */
  tax_for_unit_amount?: number | undefined
  /** 価格（税込） */
  unit_amount?: number | undefined
}

export type JobChangeCompletionReport = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  amount?: number | undefined
}

export type RecruitmentCompletionReport = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  /** 年収（税の概念なし） */
  amount?: number | undefined
  system_fee_ratio?: number | undefined
  /** 手数料（税抜） */
  system_fee_without_tax?: number | undefined
  /** 手数料（税） */
  tax_for_system_fee?: number | undefined
  /** 手数料（税込） */
  system_fee?: number | undefined
  payment_status?: 'unpaid' | 'paid' | 'failed' | 'pending' | undefined
  joined_date?: string | undefined
  memo?: string | undefined
  is_enable?: boolean | undefined
}

export type Company = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  type?: 'account' | 'stub' | undefined
  name?: string | undefined
  name_kana?: string | undefined
  head_office_location?: string | undefined
  year_of_establishment?: string | undefined
  hp_url?: string | undefined
  phone?: string | undefined
  /** 資本金（税の概念なし） */
  capital?: number | undefined
  is_listed?: boolean | undefined
  representative?: string | undefined
  representative_kana?: string | undefined
  /** 前年度の売上高（税込） */
  net_sales?: number | undefined
  numbers_of_employees?: string | undefined
  average_age?: number | undefined
  business_summary?: string | undefined
  corporate_pr?: string | undefined
  logo_url?: string | undefined
  cover_image_url?: string | undefined
  is_sample?: boolean | undefined
  /** admin審査状態 */
  admin_verification_status?: 'unspecified' | 'requested' | 'verified' | 'rejected' | 'canceled' | undefined
  public_verification_status?: 'unspecified' | 'requested' | 'verified' | 'rejected' | undefined
  /** 有料職業紹介事業許可番号 */
  employment_placement_permit_number?: string | undefined
  /** admin指定の採用報告手数料率 */
  recruitment_fee_ratio?: number | undefined
  /** admin指定の紹介報告手数料率 */
  introduction_fee_ratio?: number | undefined
  deleted_at?: string | undefined
  /** フォロワー数 */
  follower_nums?: number | undefined
  /** ownerのEmploymentのメールアドレス */
  owner_email?: string | undefined
}

export type Recruitment = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  title?: string | undefined
  department?: string | undefined
  position?: string | undefined
  job_description?: string | undefined
  work_conditions?: string | undefined
  qualification_requirement?: string | undefined
  /** 「下書き」「公開」「休止」「終了」「強制停止」 */
  publishment_status?: 'draft' | 'published' | 'suspending' | 'terminated' | 'rejected' | undefined
  /** サンプルか */
  is_sample?: boolean | undefined
  /** 「全体公開（誰でも見れる）」「非公開（許可した人のみ見れる）」 */
  accessible_type?: 'public' | 'private' | undefined
  /** 「転職」「副業・フリーランス」 */
  type?: 'career' | 'project' | undefined
  /** 最低金額（税込） */
  min_amount?: number | undefined
  /** 最高金額（税込） */
  max_amount?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billing_method?: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project' | undefined
  /** 「クライアント作成（企業）」「エージェント作成」「サービス作成（クローリング）」 */
  source_type?: 'client' | 'agent' | 'service' | undefined
  /** 推定単価（税込） */
  estimated_unit_amount?: number | undefined
  /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
  target_company_status?: 'none' | 'private' | 'certained' | 'specified' | undefined
  /** target_company_statusがcertainedの時、表示名を指定 */
  target_company_certain_name?: string | undefined
  nearest_station?: string | undefined
  project_number?: string | undefined
  /** 掲載期間（開始） */
  published_since_date?: string | undefined
  /** 掲載期間（終了） */
  published_until_date?: string | undefined
  /** 応募済みか */
  is_applied?: boolean | undefined
  /** 企業内でのフラグ */
  is_organizational_checked?: boolean | undefined
  /** admin用のフラグ */
  is_admin_checked?: boolean | undefined
  /** 公開出来ない理由 */
  can_not_release_reasons?: string[] | undefined
  /** PV数 */
  page_views?: number | undefined
  /** 候補者数 */
  applied_accounts?: number | undefined
  /** その募集を気になるしてるアカウントの数 */
  interested_accounts?: number | undefined

  target_company?: Company | null | undefined
}

export type Account = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  email?: string | undefined
  email_verification_status?: 'unspecified' | 'request' | 'verified' | undefined
  avatar_url?: string | undefined
  last_sign_in_at?: string | undefined
  last_notification_read_at?: string | undefined
  /** キャリアスカウト受け入れるか */
  is_career_scout_target?: boolean | undefined
  /** プロジェクトスカウト受け入れるか */
  is_project_scout_target?: boolean | undefined
  /** ProbWorksプロジェクト実績を公開するか */
  is_public_with_work?: boolean | undefined
  identity_verification_status?: 'unspecified' | 'verified' | 'checking' | 'failed' | undefined
  /** 本人確認に足りない項目の配列（'external_account'は銀行口座、'individual.verification.document'は身分証明書） */
  identification_requirements?: string[] | undefined
  /** 求職者必須項目の不足項目 */
  missing_requirements_for_general?: string[] | undefined
  /** エージェント必須項目の不足項目 */
  missing_requirements_for_agent?: string[] | undefined
  /** サンプルか */
  is_sample?: boolean | undefined
  /** 論理削除時刻 */
  deleted_at?: string | undefined
  register_as?: 'general' | 'organizational' | undefined
  /** 学生か */
  is_student?: boolean | undefined
  display_name?: string | undefined
  is_concluded_nda?: boolean | undefined
  /** プロフィール完成度（%表記） */
  profile_completeness?: number | undefined
  companies?: Company[] | undefined
}

export type Profile = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  first_name_kana?: string | undefined
  last_name_kana?: string | undefined
  gender?: 'MALE' | 'FEMALE' | 'OTHER' | undefined
  phone?: string | undefined
  nationality?: string | undefined
  postal_code?: string | undefined
  address?: string | undefined
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  english_skill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  date_of_birth?: string | undefined
  biography?: string | undefined
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  japanese_skill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  /** 直近の年収（税の概念なし） */
  recent_income_amount?: number | undefined
  /** マネジメント経験人数 */
  management_experience?: 'nothing' | 'less_than_5' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
  /** 転職回数 */
  number_of_job_changes?: number | undefined
  academic_background?: string | undefined
  year_of_agent_experience?: number | undefined
  agent_area_in_charge?: string | undefined
  agent_self_message?: string | undefined
  agent_self_introduction?: string | undefined
  agent_achievement?: string | undefined

  /** 履歴書等のPDFファイル */
  files?: {
    id?: string | undefined
    name?: string | undefined
    url?: string | undefined
    content_type?: string | undefined
    created_at?: string | undefined
  } | undefined
}

export type Subscription = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  status?: 'active' | 'past_due' | 'unpaid' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'all' | 'ended' | 'pending' | undefined
  since_date?: string | undefined
  until_date?: string | undefined
}

export type IndustryHistory = {
  id?: string | undefined
  /** 年単位 */
  year_of_experience?: number | undefined

  industry?: {
    name?: string | undefined
  } | undefined
}

export type Feature = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  name?: string | undefined
  type?: 'default' | 'organizational' | undefined
  source_type?: 'company' | 'recruitment' | undefined
}

export type AcademicHistory = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  name?: string | undefined
  faculty?: string | undefined
  since_date?: string | undefined
  until_date?: string | undefined
  /** 「大学院（博士）」「大学院（修士）」「大学」「高専」「専門学校」「短期大学」「高校」 */
  type?: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school' | undefined
}

export type WorkHistory = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  name?: string | undefined
  /** 「在職中」「離職中」 */
  is_employed?: boolean | undefined
  position?: string | undefined
  since_date?: string | undefined
  until_date?: string | undefined
  department?: string | undefined
}

export type Skill = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  name?: string | undefined
}

export type Hope = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  type?: 'career' | 'project' | undefined
  amount?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billing_method?: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project' | undefined
  /** 転職希望時期(Nヶ月以内) */
  time_to_change_job?: number | undefined
  /** 特筆事項 */
  special_note?: string | undefined
  /** 案件開始時期 */
  beginning_period?: string | undefined
}

export type Job = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  /** 「進行中」「完了」 */
  status?: 'in_progress' | 'completed' | undefined
  is_sample?: boolean | undefined
}

export type ProjectResult = {
  total_rate?: number | undefined
  skills?: Skill[] | undefined
  total_jobs_num?: number | undefined
  jobs?: Job[] | undefined
}

export type Occupation = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  name?: string | undefined
}

export type OccupationHistory = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  /** 年単位 */
  year_of_experience?: number | undefined
  occupation?: Occupation | undefined
}

export type Achievement = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  content?: string | undefined
  created_date?: string | undefined
  description?: string | undefined
}

export type Payout = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  amount?: number | undefined
  currency?: string | undefined
  status?: 'pending' | 'in_transit' | 'paid' | 'failed' | 'canceled' | undefined
  /** 支払完了予想日付 */
  arrival_date?: string | undefined
}

export type OfficialInformation = {
  id?: string | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
  title?: string | undefined
  content?: string | undefined
  html_content?: string | undefined
  is_released?: boolean | undefined
}
