export type Lang = "uk" | "en";

export type Dict = {
  // common
  appName: string;
  bankBadge: string;
  company: string;
  login: string;
  logout: string;
  cancel: string;
  save: string;
  edit: string;
  open: string;
  back: string;
  search: string;
  all: string;
  create: string;
  send: string;

  // landing
  landingTitle1: string;
  landingTitle2: string;
  landingDesc: string;
  landingLogin: string;
  landingRegister: string;
  feat1Title: string;
  feat1Desc: string;
  feat2Title: string;
  feat2Desc: string;
  feat3Title: string;
  feat3Desc: string;

  // apply
  applyTitle: string;
  applySub: string;
  fBankName: string;
  fBankNamePh: string;
  fEdrpou: string;
  fEdrpouPh: string;
  fContact: string;
  fContactPh: string;
  fPosition: string;
  fPositionPh: string;
  fEmail: string;
  fEmailPh: string;
  fPhone: string;
  fPhonePh: string;
  fComment: string;
  fCommentPh: string;
  sendApplication: string;
  haveAccount: string;
  applySent: string;
  applySentText: string;
  applySentSupport: string;
  toMain: string;

  // nav
  navDashboard: string;
  navTenders: string;
  navEsg: string;
  navAccount: string;
  navStaff: string;
  navProfile: string;
  navNotif: string;

  userName: string;
  userRole: string;

  // titles
  titleDashboard: string;
  titleTenders: string;
  titleTenderCreate: string;
  titleTenderCard: string;
  titleTenderWinner: string;
  titleEsg: string;
  titleContractor: string;
  titleStaff: string;
  titleProfile: string;
  titleNotif: string;

  // dashboard metrics
  mActiveTenders: string;
  mActiveTendersSub: string;
  mContractors: string;
  mContractorsSub: string;
  mAvgEsg: string;
  mAvgEsgSub: string;
  mCompleted: string;
  mCompletedSub: string;

  activeTenders: string;
  activeTendersSub: string;
  newTender: string;
  topContractors: string;
  allLink: string;
  recentEvents: string;

  // tender statuses
  statusCollecting: string;
  statusClosedIntake: string;
  statusWinnerSelected: string;
  statusInProgress: string;
  statusDraft: string;
  statusWinner: string;
  statusApplied: string;
  statusNotWon: string;
  statusActiveProj: string;
  statusCompletedProj: string;

  bidsCount: string;
  deadline: string;
  winner: string;
  esgExecution: string;
  notSelected: string;
  dash: string;

  // tenders list
  searchTendersPh: string;
  filterAllStatuses: string;
  colTender: string;
  colCity: string;
  colStatus: string;
  colBids: string;
  colDeadline: string;
  colWinner: string;

  // create tender
  breadTenders: string;
  newTenderTitle: string;
  fObjectName: string;
  fObjectNamePh: string;
  fCity: string;
  fCityPh: string;
  fDistrict: string;
  fDistrictPh: string;
  fIntakeStart: string;
  fIntakeEnd: string;
  fBuildType: string;
  fDescription: string;
  fDescriptionPh: string;
  buildResidential: string;
  buildBusiness: string;
  buildLogistic: string;
  buildMixed: string;
  buildInfra: string;
  publishTender: string;
  saveDraft: string;
  createNote: string;

  // tender card
  created: string;
  deadlineLbl: string;
  mBidsSubmitted: string;
  mBidsSubmittedSub: string;
  mAvgEsgParticipants: string;
  mAvgEsgParticipantsSub: string;
  mDaysLeft: string;
  mDaysLeftSub: string;
  participants: string;
  participantsSub: string;
  colContractor: string;
  colEsg: string;
  colProjectsDone: string;
  colAvgExec: string;
  colDeclaredVolume: string;
  colSubmitted: string;
  experienceYears: (n: number) => string;
  esgLink: string;
  tenderNoteWinner: string;

  // tender winner
  tenderClosedOn: string;
  winnerBadge: string;
  declaredPkg: string;
  mDeclaredVolume: string;
  mDeclaredVolumeSub: string;
  mScanned: string;
  mScannedSub: string;
  mEsgExec: string;
  mLastScan: string;
  mLastScanSub: string;
  scanDynamics: string;
  lastWeeks: string;
  thisWeek: string;
  thisMonth: string;
  totalLbl: string;
  recentScans: string;
  colDate: string;
  colType: string;
  colVolume: string;
  typePlastic: string;
  typeCardboard: string;
  typeFilm: string;
  typeMetal: string;
  typeOther: string;
  winnerProfile: string;
  projectsCount: string;
  avgEsg: string;
  tendersCount: string;
  fullEsgProfile: string;

  // ESG list
  filterAllCities: string;
  filterAllRatings: string;
  ratingHigh: string;
  ratingMid: string;
  ratingLow: string;
  yearsOnMarket: (n: number) => string;
  colRating: string;
  colProjects: string;
  colTenders: string;
  colLastProject: string;
  profileLink: string;

  // contractor card
  breadEsg: string;
  ratingTopNote: string;
  contractorType: string;
  mEsgRating: string;
  mEsgRatingSub: string;
  mProjectsDone: string;
  mProjectsDoneSub: string;
  mTendersWon: string;
  mTendersWonSub: string;
  mTotalScanned: string;
  mTotalScannedSub: string;

  tabProjects: string;
  tabDynamics: string;
  tabTenders: string;
  tabInfo: string;

  colWorkType: string;
  workBuildMount: string;
  workBuild: string;
  workRecon: string;

  balanceTitle: string;
  balanceSub: string;
  scanOnTime: string;
  scanDelayed: string;
  notScanned: string;
  execByYears: string;
  pkgTypesTitle: string;
  pkgTypesSub: string;

  colYear: string;
  colParticipationStatus: string;
  tenderOpen: string;

  infoGeneral: string;
  infoSummary: string;
  iName: string;
  iCity: string;
  iType: string;
  iScope: string;
  iRegions: string;
  iEdrpou: string;
  iInSince: string;
  iCurrentRating: string;
  iTotalProjects: string;
  iTotalScanned: string;
  iBestProject: string;
  iActive: string;
  iWinRate: string;

  // staff
  searchStaffPh: string;
  addEmployee: string;
  colEmployee: string;
  colRole: string;
  colStatusS: string;
  colInvited: string;
  colLastLogin: string;
  roleAdmin: string;
  roleAnalyst: string;
  statusActiveS: string;
  statusInvited: string;

  // profile
  bankProfile: string;
  iBankName: string;
  iBankEdrpou: string;
  iBankMfo: string;
  iLegalAddress: string;
  iContactPerson: string;
  iWebsite: string;
  summaryStats: string;
  sActiveTenders: string;
  sCompletedTenders: string;
  sTrackedContractors: string;
  sAccountOpened: string;

  // modal
  addEmpTitle: string;
  addEmpSub: string;
  fFirst: string;
  fFirstPh: string;
  fLast: string;
  fLastPh: string;
  fEmailEmpPh: string;
  sendInvite: string;

  // notifs
  n1Title: string;
  n1Sub: string;
  n1Time: string;
  n2Title: string;
  n2Sub: string;
  n2Time: string;
  n3Title: string;
  n3Sub: string;
  n3Time: string;
  n4Title: string;
  n4Sub: string;
  n4Time: string;
  n5Title: string;
  n5Sub: string;
  n5Time: string;

  // activity
  actNewBid: string;
  actWinnerAssigned: string;
  actEsgUpdate: string;
  actTenderCreated: string;
  timeToday: string;
  timeYesterday: string;

  // names/places that stay dynamic
  p_podolski: string;
  p_arsenal: string;
  p_brovary: string;
  p_ozerny: string;
  p_goldgate: string;
  p_panorama: string;
  p_podolSity: string;
  p_holosiiv: string;

  c_kyivBud: string;
  c_galychyna: string;
  c_budHarkiv: string;
  c_odesaStroy: string;
  c_dniproBud: string;
  c_zahidBud: string;
  c_harkivProm: string;

  city_kyiv: string;
  city_kyivObl: string;
  city_lviv: string;
  city_harkiv: string;
  city_odesa: string;
  city_dnipro: string;
  city_uzhhorod: string;
  city_brovary: string;

  district_podilsky: string;
  district_pechersky: string;
  district_obolonsky: string;
  district_shevchenkivsky: string;
  district_brovary: string;

  generalContractor: string;
  scopeHousingComm: string;
  regionsKyiv: string;
  sinceFeb2024: string;
  inAllProjects: string;
  fromScansInSystem: string;
  fromIntakeNote: string;
  topRatingInSystem: string;
  activeLbl: string;
  completedLbl: string;
  draftLbl: string;
  doneIntakeLbl: string;
  winnerSelLbl: string;
};
