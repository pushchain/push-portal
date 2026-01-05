export type RewardsAcitivitesResponse = {
  activities: Activity[];
  total: number;
  page: number;
  size: number;
};

export type ActvityType =
  | "follow_push_on_discord"
  | "follow_push_on_twitter"
  | "tweet_about_push_chain"
  | "tweet_about_200k_points"
  | "test_transaction_on_push_chain"
  | "daily_check_in_7_days_day1"
  | "daily_check_in_7_days_day2"
  | "daily_check_in_7_days_day3"
  | "daily_check_in_7_days_day4"
  | "daily_check_in_7_days_day5"
  | "daily_check_in_7_days_day6"
  | "daily_check_in_7_days_day7"
  | "chess:xp_level_1"
  | "chess:xp_level_2"
  | "chess:xp_level_3"
  | "chess:xp_level_4"
  | "chess:xp_level_5"
  | "chess:xp_level_6"
  | "chess:xp_level_7"
  | "chess:xp_level_8"
  | "chess:xp_level_9"
  | "chess:xp_level_10"
  | "chess:xp_level_11"
  | "chess:xp_level_12"
  | "chess:xp_level_13"
  | "chess:xp_level_14"
  | "chess:xp_level_15"
  | "chess:xp_level_16"
  | "chess:xp_level_17"
  | "chess:xp_level_18"
  | "chess:xp_level_19"
  | "chess:xp_level_20"
  | "chess:xp_level_21"
  | "chess:xp_level_22"
  | "chess:xp_level_23"
  | "chess:xp_level_24"
  | "chess:xp_level_25"
  | "chess:xp_level_26"
  | "chess:xp_level_27"
  | "chess:xp_level_28"
  | "chess:xp_level_29"
  | "chess:xp_level_30"
  | "chess:xp_level_31"
  | "chess:xp_level_32"
  | "chess:xp_level_33"
  | "chess:xp_level_34"
  | "chess:xp_level_35"
  | "chess:xp_level_36"
  | "chess:xp_level_37"
  | "chess:xp_level_38"
  | "chess:xp_level_39"
  | "chess:xp_level_40"
  | "chess:xp_level_41"
  | "chess:xp_level_42"
  | "chess:xp_level_43"
  | "chess:xp_level_44"
  | "chess:xp_level_45"
  | "chess:xp_level_46"
  | "chess:xp_level_47"
  | "chess:xp_level_48"
  | "chess:xp_level_49"
  | "chess:xp_level_50"
  | "chess:xp_level_51"
  | "chess:xp_level_52"
  | "chess:xp_level_53"
  | "chess:xp_level_54"
  | "chess:xp_level_55"
  | "chess:xp_level_56"
  | "chess:xp_level_57"
  | "chess:xp_level_58"
  | "chess:xp_level_59"
  | "chess:xp_level_60"
  | "email:xp_level_1"
  | "email:xp_level_2"
  | "email:xp_level_3"
  | "email:xp_level_4"
  | "email:xp_level_5"
  | "email:xp_level_6"
  | "email:xp_level_7"
  | "email:xp_level_8"
  | "email:xp_level_9"
  | "email:xp_level_10"
  | "email:xp_level_11"
  | "email:xp_level_12"
  | "email:xp_level_13"
  | "email:xp_level_14"
  | "email:xp_level_15"
  | "email:xp_level_16"
  | "email:xp_level_17"
  | "email:xp_level_18"
  | "email:xp_level_19"
  | "email:xp_level_20"
  | "email:xp_level_21"
  | "email:xp_level_22"
  | "email:xp_level_23"
  | "email:xp_level_24"
  | "email:xp_level_25"
  | "email:xp_level_26"
  | "email:xp_level_27"
  | "email:xp_level_28"
  | "email:xp_level_29"
  | "email:xp_level_30"
  | "email:xp_level_31"
  | "email:xp_level_32"
  | "email:xp_level_33"
  | "email:xp_level_34"
  | "email:xp_level_35"
  | "email:xp_level_36"
  | "email:xp_level_37"
  | "email:xp_level_38"
  | "email:xp_level_39"
  | "email:xp_level_40"
  | "email:xp_level_41"
  | "email:xp_level_42"
  | "email:xp_level_43"
  | "email:xp_level_44"
  | "email:xp_level_45"
  | "email:xp_level_46"
  | "email:xp_level_47"
  | "email:xp_level_48"
  | "email:xp_level_49"
  | "email:xp_level_50"
  | "rumors:xp_level_1"
  | "rumors:xp_level_2"
  | "rumors:xp_level_3"
  | "rumors:xp_level_4"
  | "rumors:xp_level_5"
  | "rumors:xp_level_6"
  | "rumors:xp_level_7"
  | "rumors:xp_level_8"
  | "rumors:xp_level_9"
  | "rumors:xp_level_10"
  | "rumors:xp_level_11"
  | "rumors:xp_level_12"
  | "rumors:xp_level_13"
  | "rumors:xp_level_14"
  | "rumors:xp_level_15"
  | "rumors:xp_level_16"
  | "rumors:xp_level_17"
  | "rumors:xp_level_18"
  | "rumors:xp_level_19"
  | "rumors:xp_level_20"
  | "rumors:xp_level_21"
  | "rumors:xp_level_22"
  | "rumors:xp_level_23"
  | "rumors:xp_level_24"
  | "rumors:xp_level_25"
  | "rumors:xp_level_26"
  | "rumors:xp_level_27"
  | "rumors:xp_level_28"
  | "rumors:xp_level_29"
  | "rumors:xp_level_30"
  | "rumors:xp_level_31"
  | "rumors:xp_level_32"
  | "rumors:xp_level_33"
  | "rumors:xp_level_34"
  | "rumors:xp_level_35"
  | "rumors:xp_level_36"
  | "rumors:xp_level_37"
  | "rumors:xp_level_38"
  | "rumors:xp_level_39"
  | "rumors:xp_level_40"
  | "rumors:xp_level_41"
  | "rumors:xp_level_42"
  | "rumors:xp_level_43"
  | "rumors:xp_level_44"
  | "rumors:xp_level_45"
  | "rumors:xp_level_46"
  | "rumors:xp_level_47"
  | "rumors:xp_level_48"
  | "rumors:xp_level_49"
  | "rumors:xp_level_50";

export type Activity = {
  id: string;
  activityType: ActvityType;
  activityTitle: string;
  activityDesc: string;
  points: number;
  multiplier: number;
  expiryType: number;
  name?: string;
  JoinURL: string;
  index: string;
  status: "ENABLED" | "DISABLED";
  tags: [];
  isExpired?: boolean;
};

export type UsersAllActivitiesResponse = {
  activities: UsersActivity[];
  total: number;
  page: number;
  size: number;
};

export type UsersActivity = {
  activityId: string;
  userId: string;
  activityTypeId: string;
  data:
    | { twitter?: string; discord?: string }
    | {
        currentEpoch?: number;
        fromBlock?: number;
        toBlock?: number;
        fromTimestamp?: number;
        toTimestamp?: number;
      }
    | any;
  status: "COMPLETED" | "PENDING" | "REJECTED";
  points: number;
  multiplier: number;
  verificationProof: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
};

export type UsersActivityError = {
  error: string;
};

// The key can be any string, and the value can be either StakeActivitySuccess or StakeActivityError
export type StakeActivityResponse = {
  [key: string]: UsersActivity | UsersActivityError;
};

type Prop = {
  [key: string]: string;
};

export type ClaimRewardsActivityProps = {
  userId: string;
  activityTypeId: string;
  data: Prop | {};
  verificationProof: string;
};

export type RewardActivityStatusProps = {
  userId: string;
  activities: any;
};

export type PointsVaultUserLoginProps = {
  username: string;
  password: string;
};
export type PointsVaultUserLoginPayload = {
  token: string;
};

export type ClaimActivitesResponse = {
  status: "COMPLETED" | "PENDING";
};

export type DiscordDetails = {
  id: string;
  username: string;
  avatar: null | string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: null | string;
  accent_color: null | string;
  global_name: string;
  avatar_decoration_data: null | object;
  banner_color: null | string;
  clan: null | object;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
};

export type UserRewardsDetailParams = {
  caip10WalletAddress: string;
};

export type UserRewardsDetailResponse = {
  userId: string;
  userWallet: string;
  refPrimary: string | null;
  refSecondary: string | null;
  verificationProof: string;
  activityPoints: number;
  referralPoints: number;
  totalPoints: number;
  multiplier: number;
  previousMultiplier: number;
  rank: number;
  lastUpdated: string;
  createdAt: string;
  usersInvited: number;
  discordEmail: string;
  discordReverified: boolean;
  secondaryDiscordUserName: string;
  isSeasonOneUser: boolean;
  pgpPublicKey?: string;
};

export type createUserRewardsDetailsProps = {
  userWallet: string;
  pgpPublicKey: string;
  verificationProof: string;
  refPrimary?: string;
};

export type createUserRewardsDetailsResponse = {};

export type RewardsStakeParams = {
  currentEpoch: number;
  fromBlock: number;
  toBlock: number;
  fromTimestamp: number;
  toTimestamp: number;
};

export type ActivityData = {
  discord?: string;
  discord_token?: string;
  twitter?: string;
};

export type RewardActivityStatus = {
  activityId: string;
  activityTypeId: string;
  createdAt: string;
  data: ActivityData | {};
  multiplier: number;
  points: number;
  status: string;
  updatedAt: string;
  userId: string;
  verificationProof: string;
};

export type RewardActivityStatusResponse = {
  [key: string]: RewardActivityStatus | {};
};

type LeaderBoardUser = {
  userId: string;
  userWallet: string;
  refPrimary: string | null;
  refSecondary: string | null;
  verificationProof: string;
  activityPoints: number;
  referralPoints: number;
  totalPoints: number;
  multiplier: number;
  lastUpdated: string;
  pgpPublicKey: string;
  rank: number;
};

export type ModelledLeaderBoardUser = {
  userId: string;
  userWallet: string;
  totalPoints: number;
  rank: number;
};

export type LeaderboardResponse = {
  users: Array<LeaderBoardUser>;
  page: number;
  pageSize: number;
  total: number;
};

export type LeaderboardModelledResponse = {
  users: Array<ModelledLeaderBoardUser>;
  page: number;
  pageSize: number;
  total: number;
};

export type LeaderboardParams = {
  order?: string;
  pageSize?: number;
  pageNumber?: number;
};
