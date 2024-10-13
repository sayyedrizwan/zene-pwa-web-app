export interface NightCafeAiResponse {
  status?: string;
  results?: Result[];
  lastVisibleId?: string;
  count?: number;
  query?: string;
}

interface Result {
  userInfo?: UserInfo;
  dateMeta?: DateMeta;
  seed?: number;
  isNewbieJob?: boolean;
  collectionsMeta?: CollectionsMeta;
  numImages?: number;
  aspectRatio?: string;
  preset?: string;
  injectNSFWNegatives?: boolean;
  title?: string;
  promptMagic?: boolean;
  resolution?: string;
  isPROFreeGen?: boolean;
  path?: string;
  archived?: boolean;
  promptWeights?: number[];
  context?: Context;
  id?: string;
  jobType?: string;
  prompts?: string[];
  algorithm?: string;
  formId?: string;
  runtime?: string;
  promptWeight?: number;
  fluxModel?: string;
  modStatus?: string;
  chatAutoShare?: boolean;
  progress?: number;
  userAccountCreated?: number;
  presetType?: string;
  user?: string;
  created?: number;
  provider?: string;
  paymentStatus?: string;
  output?: string;
  outputWidth?: number;
  outputHeight?: number;
  status?: string;
  showStartImage?: boolean;
  displayAs?: string;
  showPrompts?: boolean;
  preventCopies?: boolean;
  isPublic?: boolean;
  showGallery?: boolean;
  postedDate?: number;
  numLikesAtTimeOfPublish?: number;
  userFollowersAtTimeOfPublish?: number;
  numCommentsAtTimeOfPublish?: number;
  commentSnippets?: CommentSnippet[];
  viewsMeta?: ViewsMeta;
  hotnessDaily?: number;
  hotnessLastUpdatedAt?: HotnessLastUpdatedAt;
  hotness?: number;
  hotnessWeekly?: number;
  commentsMeta?: CommentsMeta;
  likesMeta?: LikesMeta;
  evolvedFrom?: string;
  refinerWeight?: number;
  startImage?: StartImage;
  sdEngine?: string;
  noiseInfluence?: number;
  sampler?: string;
  creditCost?: number;
  newbiePublished?: boolean;
  tags?: string[];
  preUpscaleOutputHeight?: number;
  preUpscaleOutput?: string;
  preUpscaleOutputWidth?: number;
  upscaleRuns?: UpscaleRun[];
  upscaleStatus?: string;
  progressImages?: ProgressImage[];
  upscaleProgressImageStatus?: UpscaleProgressImageStatus;
  hiddenOutputs?: HiddenOutputs;
  dailyChallengeMeta?: DailyChallengeMeta;
  sharedToRooms?: string[];
  tipMeta?: TipMeta;
  minimizeDalle3PromptRevision?: boolean;
  dalle3Style?: string;
  generationRequestId?: string;
  revisedPrompt?: string;
  addonModels?: AddonModel[];
  addonModelIds?: string[];
  videoRuns?: VideoRun[];
  videoStatus?: string;
  videoMeta?: VideoMeta;
  description?: string;
  usesAddons?: boolean;
  imagenModel?: string;
}

interface UserInfo {
  displayName?: string;
  profilePic?: ProfilePic;
  id?: string;
  username?: string;
  subscription?: Subscription;
}

interface ProfilePic {
  src?: string;
}

interface Subscription {
  levelId?: number;
  class?: string;
}

interface DateMeta {
  isWithinHour?: boolean;
  isWithinYear?: boolean;
  isWithinDay?: boolean;
  isWithinWeek?: boolean;
  isWithinMonth?: boolean;
}

interface CollectionsMeta {
  numCollections?: number;
  isCollectedByCreator?: boolean;
}

interface Context {
  type?: string;
}

interface CommentSnippet {
  created?: number;
  id?: string;
  author?: Author;
  content?: string;
  contentVersion?: string;
}

interface Author {
  displayName?: string;
  id?: string;
  profilePic?: ProfilePic2;
  username?: string;
  subscription?: Subscription2;
}

interface ProfilePic2 {
  src?: string;
}

interface Subscription2 {
  class?: string;
  levelId?: number;
}

interface ViewsMeta {
  numViews?: number;
}

interface HotnessLastUpdatedAt {
  _seconds?: number;
  _nanoseconds?: number;
}

interface CommentsMeta {
  commentsAllowed?: boolean;
  numComments?: number;
  numCommentsNotByOP?: number;
  lastCommentReceivedOn?: number;
}

interface LikesMeta {
  lastLikeReceivedOn?: number;
  numLikes?: number;
}

interface StartImage {
  id?: string;
  path?: string;
  title?: string;
  type?: string;
}

interface UpscaleRun {
  outScale?: number;
  id?: string;
  type?: string;
  status?: string;
}

interface ProgressImage {
  output?: string;
  width?: number;
  progress?: number;
  height?: number;
  iteration?: string;
  upscaleCreativity?: number;
  upscaleOriginal?: UpscaleOriginal;
  upscalePrompt?: string;
  outScale?: number;
  upscaledBy?: number;
  videoModel?: string;
  videoPrompt?: string;
  keyframe?: string;
  loop?: boolean;
  camera?: string;
  isVideo?: boolean;
  inputProgressImage?: InputProgressImage;
  thumbnailImage?: string;
  seed?: number;
  blurred?: boolean;
  octoSafetyScore?: number;
  isGrid?: boolean;
  upscaleModel?: string;
  falHasNSFWConcepts?: boolean;
  revisedPrompt?: string;
}

interface UpscaleOriginal {
  output?: string;
  width?: number;
  height?: number;
  iteration?: string;
  progress?: number;
}

interface InputProgressImage {
  output?: string;
  width?: number;
  height?: number;
  iteration?: string;
  progress?: number;
  upscaleOriginal?: UpscaleOriginal2;
}

interface UpscaleOriginal2 {
  output?: string;
  width?: number;
  height?: number;
}

interface UpscaleProgressImageStatus {
  jobsJIZfrOZzogXLfXb9HE43JIZfrOZzogXLfXb9HE431ghdx0jpg?: string;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uB1a3xlnjpg?: string;
  jobsG1mDVaTE9GHaM7xY0ne8G1mDVaTE9GHaM7xY0ne81r7qw0jpg?: string;
}

interface HiddenOutputs {
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uB1a3xlnjpg?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uB1a3xln_15xcltyupscalek7py7jpg?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAue54ymp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAssgwhmp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAa80h9mp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMA6pzcsmp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAg1h64mp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAzgk1pmp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMA5nnnzmp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAo0wmzmp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAcl77cmp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAw8ofxmp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAg9s90mp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMA36as1mp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBeusBadjustedjpg?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMAzy356mp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMA9g4ehmp4?: boolean;
  jobsDwUZIlaXQYWWVH9Gn9uBDwUZIlaXQYWWVH9Gn9uBLUMA3c48smp4?: boolean;
  jobsG1mDVaTE9GHaM7xY0ne8G1mDVaTE9GHaM7xY0ne81r7qw0jpg?: boolean;
  jobsG1mDVaTE9GHaM7xY0ne8G1mDVaTE9GHaM7xY0ne822hdi1jpg?: boolean;
  jobsG1mDVaTE9GHaM7xY0ne8G1mDVaTE9GHaM7xY0ne830zvtmjpg?: boolean;
  jobsG1mDVaTE9GHaM7xY0ne8G1mDVaTE9GHaM7xY0ne84ejrybjpg?: boolean;
  jobsG1mDVaTE9GHaM7xY0ne8G1mDVaTE9GHaM7xY0ne8gridjpg?: boolean;
}

interface DailyChallengeMeta {
  entry?: Entry;
  challenge?: Challenge;
}

interface Entry {
  gameId?: string;
  result?: string;
  image?: Image;
  created?: number;
  caption?: string;
  id?: string;
  voteMeta?: VoteMeta;
}

interface Image {
  path?: string;
  width?: number;
  height?: number;
}

interface VoteMeta {
  averageRating?: number;
}

interface Challenge {
  created?: number;
  id?: string;
  challengeCriteria?: string;
  title?: string;
  dailyChallengeNumber?: number;
}

interface TipMeta {
  lastTipped?: number;
  tips?: Tip[];
}

interface Tip {
  id?: string;
  tipperId?: string;
  amount?: number;
}

interface AddonModel {
  thumbnail?: string;
  name?: string;
  ownerInfo?: any;
  isPublic?: boolean;
  id?: string;
  type?: string;
}

interface VideoRun {
  id?: string;
  type?: string;
  status?: string;
}

interface VideoMeta {
  hasVideo?: boolean;
  hasFinishedVideo?: boolean;
  type?: string;
  isOutputVideo?: boolean;
}
