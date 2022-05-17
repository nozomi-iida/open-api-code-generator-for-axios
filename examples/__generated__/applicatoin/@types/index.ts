/* eslint-disable */
export type State_v1 = {
  id: string
  /** 国名コードの数字 */
  countryCode: number
  name: string
}

export type SpecialtyCompanyType = {
  id: string
  content: string
}

export type SpecialtyPosition = {
  id: string
  content: string
}

/** 職種 */
export type Occupation_v1 = {
  id: string
  name: string
}

/** 職種「中項目」 */
export type OccupationSubCategory_v1 = {
  id: string
  name: string
  occupations?: Occupation_v1[] | undefined
}

/** 職種「大項目」 */
export type OccupationMainCategory_v1 = {
  id: string
  name: string
  occupationSubCategories?: OccupationSubCategory_v1[] | undefined
}

/** 業種 */
export type Industry_v1 = {
  id: string
  name: string
}

/** 業種カテゴリー */
export type IndustryCategory_v1 = {
  id: string
  name: string
  industries?: Industry_v1[] | undefined
}

export type Profile_v1 = {
  id: string
  firstName: string
  lastName: string
  firstNameKana?: string | undefined
  lastNameKana?: string | undefined
  gender?: 'MALE' | 'FEMALE' | 'OTHER' | undefined
  phone?: string | undefined
  nationality?: string | undefined
  placeOfResidence?: State_v1 | undefined
  postalCode?: string | undefined
  address?: string | undefined
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  englishSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  dateOfBirth?: string | undefined
  biography?: string | undefined
  /** 「日常会話レベル」「ビジネス会話レベル」「ネイティブレベル」「なし」 */
  japaneseSkill?: 'daily_conversation' | 'business_conversation' | 'native' | 'nothing' | undefined
  /** 直近の年収（税の概念なし） */
  recentIncomeAmount?: number | undefined
  /** マネジメント経験人数 */
  managementExperience?: 'nothing' | 'less_than_5' | 'from_6_to_10' | 'from_11_to_20' | 'from_21_to_50' | 'from_51_to_100' | 'from_101_to_500' | 'more_than_501' | undefined
  /** 転職回数 */
  numberOfJobChanges?: number | undefined
  academicBackground?: string | undefined
  yearOfAgentExperience?: number | undefined
  agentAreaInCharge?: string | undefined
  agentSelfMessage?: string | undefined
  agentSelfIntroduction?: string | undefined
  agentAchievement?: string | undefined
  /** 「配偶者無」「配偶者有」 */
  maritalStatus?: 'single' | 'married' | undefined
  specialtyCompanyTypes?: SpecialtyCompanyType[] | undefined
  specialtyPositions?: SpecialtyPosition[] | undefined
  occupationMainCategories?: OccupationMainCategory_v1[] | undefined
  industryCategories?: IndustryCategory_v1[] | undefined

  /** 履歴書等のPDFファイル */
  files?: {
    id?: string | undefined
    name?: string | undefined
    url?: string | undefined
    contentType?: string | undefined
    createdAt?: string | undefined
  } | undefined
}

export type Account_v1 = {
  id?: string | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  email?: string | undefined
  emailVerificationStatus?: 'unspecified' | 'request' | 'verified' | undefined
  emailVerificationToken?: string | undefined
  avatarUrl?: string | undefined
  lastSignInAt?: string | undefined
  lastNotificationReadAt?: string | undefined
  identityVerificationStatus?: 'unspecified' | 'verified' | 'checking' | 'failed' | undefined
  isConcludedNda?: boolean | undefined
  profile?: Profile_v1 | undefined
  /** キャリアスカウト受け入れるか */
  isCareerScoutTarget?: boolean | undefined
  /** プロジェクトスカウト受け入れるか */
  isProjectScoutTarget?: boolean | undefined
  consentNdaVersion?: string | undefined
  /** パスワードリセット用トークン */
  passwordResetToken?: string | undefined
  /** プロフィール完成度（%表記） */
  profileCompleteness?: number | undefined
  /** ProbWorksプロジェクト実績を公開するか */
  isPublicWithWork?: boolean | undefined
  /** 本人確認に足りない項目の配列（'external_account'は銀行口座、'individual.verification.document'は身分証明書） */
  identificationRequirements?: string[] | undefined
  /** 非公開サポート申請をしているか（Applicationエンドポイントのみ返ってくる） */
  isSupported?: boolean | undefined
  /** 求職者必須項目の不足項目 */
  missingRequirementsForGeneral?: string[] | undefined
  /** エージェント必須項目の不足項目 */
  missingRequirementsForAgent?: string[] | undefined
  /** サンプルか */
  isSample?: boolean | undefined
  /** 表示用のname */
  displayName?: string | undefined
  /** 論理削除時刻 */
  deletedAt?: string | undefined
  followingCurrentCompany?: Following | undefined
  scoutFromCurrentCompany?: Scout_v1 | undefined
  /** current_companyがそのアカウントのApplicantResourceを保持しているか（Enterprise側のみ） */
  existsApplicantResourceFromCurrentCompany?: boolean | undefined
  /** current_companyのkeeping_listsに存在するか（Enterprise側のみ） */
  alreadyKeepFromCurrentCompany?: boolean | undefined
  /** current_companyへの興味・応募一覧表示用（Enterprise側のみ） */
  applicantContactHistoriesFromCurrentCompany?: ApplicantContactEvent[] | undefined
  registerAs?: 'general' | 'organizational' | undefined
  /** ブロックする企業一覧 */
  blockCompanies?: Company_v1[] | undefined
  /** 学生か */
  isStudent?: boolean | undefined
}

export type Feature_v1 = {
  id: string
  name: string
  type: 'default' | 'organizational'
  sourceType: 'company' | 'recruitment'
}

export type PaymentMethod_v1 = {
  id: string
  brand: 'visa' | 'mastercard' | 'jcb' | 'american_express' | 'diners'
  expMonth: string
  expYear: string
  last4: string
  isDefault: boolean
}

export type Company_v1 = {
  id?: string | undefined
  type?: 'account' | 'stub' | undefined
  name?: string | undefined
  nameKana?: string | undefined
  headOfficeLocation?: string | undefined
  yearOfEstablishment?: string | undefined
  hpUrl?: string | undefined
  phone?: string | undefined
  /** 資本金（税の概念なし） */
  capital?: number | undefined
  isListed?: boolean | undefined
  representative?: string | undefined
  representativeKana?: string | undefined
  /** 前年度の売上高（税込） */
  netSales?: number | undefined
  numbersOfEmployees?: string | undefined
  averageAge?: number | undefined
  features?: Feature_v1[] | undefined
  businessSummary?: string | undefined
  corporatePr?: string | undefined
  logoUrl?: string | undefined
  paymentMethod?: PaymentMethod_v1 | undefined
  paymentHistories?: PaymentHistory_v1[] | undefined
  subscription?: Subscription_v1 | undefined
  /** その企業がやっている業種一覧 */
  industries?: Industry_v1[] | undefined
  coverImageUrl?: string | undefined
  isFollowing?: boolean | undefined
  /** admin審査状態 */
  adminVerificationStatus?: 'unspecified' | 'requested' | 'verified' | 'rejected' | 'canceled' | undefined
  publicVerificationStatus?: 'unspecified' | 'requested' | 'verified' | 'rejected' | undefined
  /** 有料職業紹介事業許可番号 */
  employmentPlacementPermitNumber?: string | undefined
  /**
   * (Adminのcompany一覧レスポンスのみ取得可能)
   * ownerのEmploymentのメールアドレス
   * （Ownerはstub企業には付いていない）
   */
  ownerEmail?: string | undefined
  owner?: Account_v1 | undefined
  isSample?: boolean | undefined
  deletedAt?: string | undefined
  /** フォロワー数 */
  followerNums?: number | undefined
  /** admin指定の採用報告手数料率 */
  recruitmentFeeRatio?: number | undefined
  /** admin指定の紹介報告手数料率 */
  introductionFeeRatio?: number | undefined
}

export type Price_v1 = {
  id: string
  active: string
  currency: string
  /** 価格（税抜） */
  unitAmountWithoutTax?: number | undefined
  /** 価格（税） */
  taxForUnitAmount?: number | undefined
  /** 価格（税込） */
  unitAmount: number
}

export type PaymentHistory_v1 = {
  id: string
  name: string
  amount: number
  createdAt: string
  company: Company_v1
  paymentMethod: PaymentMethod_v1
  price?: Price_v1 | undefined
}

export type Subscription_v1 = {
  id: string
  status: 'active' | 'past_due' | 'unpaid' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'trialing' | 'all' | 'ended' | 'pending'
  sinceDate: string
  untilDate: string
  createdAt: string
  price: Price_v1
}

export type Following = {
  id?: string | undefined
  account?: Account_v1 | undefined
  company?: Company_v1 | undefined
}

export type Message_v1 = {
  id?: string | undefined
  content?: string | undefined
  createdAt?: string | undefined
  actAs?: 'personal' | 'organizational' | undefined

  attachment?: {
    filename?: string | undefined
    url?: string | undefined
    /** MIME Type */
    contentType?: string | undefined
  } | undefined

  sender?: Account_v1 | undefined
  room?: Room_v1 | undefined
  recruitment?: Recruitment_v1 | undefined
}

export type JobChangeCompletionReport_v1 = {
  id: string
  /** 年収（税の概念なし） */
  amount: number
  account: Account_v1
  company: Company_v1
}

export type RecruitmentCompletionReport_v1 = {
  id: string
  /** 年収（税の概念なし） */
  amount: number
  systemFeeRatio: number
  /** 手数料（税抜） */
  systemFeeWithoutTax?: number | undefined
  /** 手数料（税） */
  taxForSystemFee?: number | undefined
  /** 手数料（税込） */
  systemFee: number
  paymentStatus: 'unpaid' | 'paid' | 'failed' | 'pending'
  company: Company_v1
  account: Account_v1
  joinedDate?: string | undefined
  memo?: string | undefined
  isEnable?: boolean | undefined
}

export type IntroductionCompletionReport_v1 = {
  id?: string | undefined
  /** 年収 */
  amount: number
  /** システム手数料比率 */
  systemFeeRatio: number
  /** 手数料（税抜） */
  systemFeeWithoutTax?: number | undefined
  /** 手数料（税） */
  taxForSystemFee?: number | undefined
  /** 手数料（税込） */
  systemFee: number
  /** 紹介料比率 */
  commissionFeeRatio?: number | undefined
  /** 紹介料（税抜） */
  commissionFeeWithoutTax?: number | undefined
  /** 紹介料（税） */
  taxForCommissionFee?: number | undefined
  /** 紹介料（年収 x 紹介料比率） */
  commissionFee: number
  paymentStatus: 'unpaid' | 'paid' | 'failed' | 'pending'
  company: Company_v1
  account: Account_v1
  joinedDate?: string | undefined
  memo?: string | undefined
  isEnable?: boolean | undefined
}

export type Room_v1 = {
  id: string
  account: Account_v1
  company: Company_v1
  latestMessage: Message_v1
  /** 未読メッセージがあればfalse */
  isReadMessage: boolean
  jobChangeCompletionReport?: JobChangeCompletionReport_v1 | undefined
  recruitmentCompletionReport?: RecruitmentCompletionReport_v1 | undefined
  introductionCompletionReport?: IntroductionCompletionReport_v1 | undefined
  /** 未返信メッセージがあるか */
  existsNotReplied: boolean
}

export type EmploymentStatus_v1 = {
  id: string
  name: string
  type: 'CAREER' | 'PROJECT'
  /** 「請負」「準委任」「業務委託」 */
  projectClassification?: 'contract' | 'quasi_mandate' | 'outsourcing' | undefined
  /** 募集作成の時に選択可能か */
  isSelectable: boolean
}

/** クローリングサービス */
export type ExternalService = {
  id: string
  name: string
  isContracted: boolean
  company?: Company_v1 | undefined
}

export type Recruitment_v1 = {
  id?: string | undefined
  title?: string | undefined
  /** 最低金額（税抜） */
  minAmountWithoutTax?: number | undefined
  /** 最低金額（税） */
  taxForMinAmount?: number | undefined
  /** 最低金額（税込） */
  minAmount?: number | undefined
  /** 最高金額（税抜） */
  maxAmountWithoutTax?: number | undefined
  /** 最高金額（税） */
  taxForMaxAmount?: number | undefined
  /** 最高金額（税込） */
  maxAmount?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod?: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project' | undefined
  department?: string | undefined
  position?: string | undefined
  jobDescription?: string | undefined
  workConditions?: string | undefined
  qualificationRequirement?: string | undefined
  /** サンプルか */
  isSample?: boolean | undefined
  /** 掲載期間（開始） */
  publishedSinceDate?: string | undefined
  /** 掲載期間（終了） */
  publishedUntilDate?: string | undefined
  /** 「転職」「副業・フリーランス」 */
  type?: 'career' | 'project' | undefined
  /** 「下書き」「公開」「休止」「終了」「強制停止」 */
  publishmentStatus?: 'draft' | 'published' | 'suspending' | 'terminated' | 'rejected' | undefined
  /** 「全体公開（誰でも見れる）」「非公開（許可した人のみ見れる）」 */
  accessibleType?: 'public' | 'private' | undefined
  /** 「クライアント作成（企業）」「エージェント作成」「サービス作成（クローリング）」 */
  sourceType?: 'client' | 'agent' | 'service' | undefined
  /** 推定単価（税込） */
  estimatedUnitAmount?: number | undefined
  /** 募集元企業の状態「なし」「非公開」「某社」「指定あり」 */
  targetCompanyStatus?: 'none' | 'private' | 'certained' | 'specified' | undefined
  targetCompany?: Company_v1 | undefined
  /** target_company_statusがcertainedの時、表示名を指定 */
  targetCompanyCertainName?: string | undefined
  /** 企業内でのフラグ */
  isOrganizationalChecked?: boolean | undefined
  /** admin用のフラグ */
  isAdminChecked?: boolean | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
  company?: Company_v1 | undefined
  occupations?: Occupation_v1[] | undefined
  industries?: Industry_v1[] | undefined
  workplace?: State_v1 | undefined
  employmentStatuses?: EmploymentStatus_v1[] | undefined
  author?: Account_v1 | undefined
  externalService?: ExternalService | undefined
  /** PV数 */
  pageViews?: number | undefined
  /** 気になるリストに入ってるか */
  isInterested?: boolean | undefined
  /** 応募済みか */
  isApplied?: boolean | undefined
  /** 候補者数 */
  appliedAccounts?: number | undefined
  /** その募集を気になるしてるアカウントの数 */
  interestedAccounts?: number | undefined
  /** target_accountにWorkがあるか（Enterpriseのエンドポイントのみ） */
  isWorkedWithTargetAccount?: boolean | undefined
  /** 公開出来ない理由 */
  canNotReleaseReasons?: string[] | undefined
  applicants?: Applicant_v1[] | undefined
  features?: Feature_v1[] | undefined
}

export type Applicant_v1 = {
  id?: string | undefined
  recruitment?: Recruitment_v1 | undefined
  account?: Account_v1 | undefined
  createdAt?: string | undefined
  updatedAt?: string | undefined
}

export type Scout_v1 = {
  id: string
  company: Company_v1
  account: Account_v1
  message?: Message_v1 | undefined
  createdAt: string
  type: 'career' | 'project'
}

export type RecruitmentInterest = {
  id?: string | undefined
  account?: Account_v1 | undefined
  recruitment?: Recruitment_v1 | undefined
}

export type ApplicantContactEvent = {
  typename: 'Applicant' | 'RecruitmentInterest'
  timestamp: string

  resource?: Applicant_v1 | RecruitmentInterest | undefined
}

/** STIを使って実装する */
export type AccountNotification_v1 = {
  id: string
  content: string
  account: Account_v1
  createdAt: string
  /** 「未読」「既読」 */
  isRead: boolean
  /** 「通常通知」or「メッセージ通知」 */
  notificationType: 'general' | 'message'
  room?: Room_v1 | undefined
  /** Accountであればavatar_url、Companyであればlogo_url */
  iconUrl?: string | undefined
}

export type SearchCondition_v1 = {
  id: string
  title: string
  target: 'recruitment' | 'company' | 'account'
  account?: Account_v1 | undefined
  company?: Company_v1 | undefined
  filters: {
    /** クエリパラメータのキー */
    key: string
  }[]
}

export type WorkHistory_v1 = {
  id: string
  name: string
  /** 「在職中」「離職中」 */
  isEmployed: boolean
  position: string
  sinceDate: string
  untilDate?: string | undefined
  department: string
  projectHistories?: ProjectHistory_v1[] | undefined
}

/** 職歴に紐付くプロジェクト経歴（name・positionどちらかは必須） */
export type ProjectHistory_v1 = {
  id: string
  name?: string | undefined
  position?: string | undefined
  businessContent?: string | undefined
  sinceDate: string
  untilDate?: string | undefined
  isEmployed: boolean
  workHistory: WorkHistory_v1
}

export type AcademicHistory_v1 = {
  id: string
  name: string
  faculty?: string | undefined
  sinceDate: string
  untilDate: string
  /** 「大学院（博士）」「大学院（修士）」「大学」「高専」「専門学校」「短期大学」「高校」 */
  type: 'graduate_school_doctor' | 'graduate_school_master' | 'university' | 'technical_college' | 'vocational_school' | 'junior_college' | 'high_school'
}

export type Policy_v1 = {
  id?: string | undefined
  name: string
  category: 'unspecified' | 'account' | 'applicant' | 'recruitment' | 'payment'
}

export type Role_v1 = {
  id: string
  /** 役割「general」「admin」など */
  name: string
  type: 'default' | 'organizational'
  companyId?: string | undefined
  description?: string | undefined
  policies?: Policy_v1[] | undefined
}

export type Employment_v1 = {
  id: string
  account: Account_v1
  company: Company_v1
  email: string
  /** 所属部署 */
  department?: string | undefined
  /** 役職 */
  position?: string | undefined
  emailVerificationStatus: 'unspecified' | 'requested' | 'verified'
  emailVerificationToken?: string | undefined
  lastNotificationReadAt?: string | undefined
  /** 有効かどうか（招待しただけの状態はfalse） */
  isValid: boolean
  roles: Role_v1[]
}

export type Skill_v1 = {
  id?: string | undefined
  name: string
}

export type AccountIncomeHistory_v1 = {
  id: string
  name: string
  amount: number
  account: Account_v1
  createdAt: string
  /** StripeのTransferID */
  stripeTrId?: string | undefined
}

/** STIを使って実装する */
export type AccountWithdrawal_v1 = {
  id: string
  amount: number
  feeAmount?: number | undefined
  totalAmount?: number | undefined
  account: Account_v1
  createdAt: string
}

/** STIを使って実装する */
export type AccountBankAccount_v1 = {
  id: string
  bankName: string
  branchName: string
  accountNumber: string
  accountHolderName: string
  bankCode: string
  branchCode: string
  account: Account_v1
}

export type JobServiceItem = {
  id: string
  /** 項目名 */
  description: string
  /** 数量 */
  quantity: number
  /** 単位 */
  unitLabel: string
  /** 単価 */
  unitPrice: number
  /** 消費税 */
  taxRatio: string
  /** 合計金額 */
  amount: number
}

/** appliedの場合はcustomer_name以外必須 */
export type JobOrder = {
  id?: string | undefined
  company?: Company_v1 | undefined
  recruitment?: Recruitment_v1 | undefined
  account?: Account_v1 | undefined
  /** 「下書き」「先方確認中」「締結済み」「却下」 */
  status?: 'draft' | 'applied' | 'certificated' | 'rejected' | undefined
  /** 「稼働報酬制」「固定報酬制」 */
  feeType?: 'time_based' | 'fixed' | undefined
  /** 稼働報酬制の単位（「一月あたり」「一日あたり」「一時間あたり」） */
  feeCalculationSpan?: monthly | daily | hourly | undefined
  /** 稼働報酬制の税率 */
  taxRatio?: number | undefined
  /** 固定報酬制の各項目 */
  jobServiceItems?: JobServiceItem[] | undefined
  isSample?: boolean | undefined
  job?: Job_v1 | undefined
}

export type Job_v1 = {
  id?: string | undefined
  jobOrder?: JobOrder | undefined
  account?: Account_v1 | undefined
  company?: Company_v1 | undefined
  /** 「進行中」「完了」 */
  status?: 'in_progress' | 'completed' | undefined
  /** 公開するか */
  isPublic?: boolean | undefined
  isSample?: boolean | undefined
  invoices?: Invoice_v1[] | undefined
  jobReviews?: JobReview_v1[] | undefined
  /** 未払請求書があるか（Enterprise側のみ） */
  existsUnpaidInvoice?: boolean | undefined
}

export type Invoice_v1 = {
  id?: string | undefined
  /** 小計 */
  subTotal?: number | undefined
  /** 税額 */
  tax?: number | undefined
  /** 請求額（税込） */
  amount?: number | undefined
  /** 請求額に応じた手数料 */
  feeAmount?: number | undefined
  /** 小計・税・手数料を合わせた総額 */
  totalAmount?: number | undefined
  /** 請求日 */
  issuedAt?: string | undefined
  /** 「未払い」「支払済み」「決済失敗」「確認中」 */
  status?: 'unpaid' | 'paid' | 'failed' | 'pending' | undefined
  /** 請求書ファイル */
  files?: {
    id?: string | undefined
    name?: string | undefined
    url?: string | undefined
    contentType?: string | undefined
    createdAt?: string | undefined
  }[] | undefined
  title?: string | undefined
  /** 支払期日 */
  deadline?: string | undefined
  /** サンプルか */
  isSample?: boolean | undefined
  job?: Job_v1 | undefined
  /** 備考 */
  note?: string | undefined
}

export type JobReview_v1 = {
  id?: string | undefined
  starRating?: number | undefined
  skills?: Skill_v1 | undefined
  /** スキルの詳細 */
  skillDescription?: string | undefined
  /** もっとこうして欲しかった点 */
  improvementPoint?: string | undefined
  /** サンプルか */
  isSample?: boolean | undefined
  job?: Job_v1 | undefined
}

export type Support_v1 = {
  id?: string | undefined
  project: boolean
  career: boolean
  account: Account_v1
}

export type Achievement_v1 = {
  id?: string | undefined
  content: string
  createdDate: string
  description?: string | undefined
}

export type Hope_v1 = {
  id: string
  /** 転職希望時期(Nヶ月いない) */
  timeToChangeJobs?: number | undefined
  amount?: number | undefined
  /** 「時給」「日給」「月給」「年収」「1案件」 */
  billingMethod: 'hourly' | 'daily' | 'monthly' | 'yearly' | 'with_project'
  type: 'career' | 'project'
  workplacea?: State_v1[] | undefined
  occupations?: Occupation_v1[] | undefined
  industries?: Industry_v1[] | undefined
  /** 特筆事項 */
  specialNote?: string | undefined
  /** 案件開始時期（Nヶ月以内） */
  beginningPeriod?: number | undefined
  /** 「~20%(週に1回)」「40~60%(週に2.3回)」「80%~(週に4回)」 */
  ratioOfOperation?: 'once_a_week' | 'few_days_a_week' | 'four_days_a_week' | undefined
}

export type IndustryHistory_v1 = {
  id: string
  account: Account_v1
  industry: Industry_v1
  /** 年単位 */
  yearOfExperience: number
}

export type OccupationHistory_v1 = {
  id: string
  /** 年単位 */
  yearOfExperience: number
}

export type TermHistory_v1 = {
  id: string
  content: string
  version: string
  type: 'common' | 'plan'
}

export type PrivacyPolicyHistory_v1 = {
  id: string
  content: string
  version: string
}

export type ConsentMatter_v1 = {
  id: string
  content: string
  termHistory?: TermHistory_v1 | undefined
  privacyPolicyHistory?: PrivacyPolicyHistory_v1 | undefined
}

export type StateCategory = {
  id?: string | undefined
  name?: string | undefined
  states?: State_v1[] | undefined
}

export type Nda_v1 = {
  id: string
  content: string
  version: string
}

export type ConsentNda_v1 = {
  id: string
  name: string
  address: string
  account: Account_v1
  nda: Nda_v1
}
