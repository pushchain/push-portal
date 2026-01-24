export type SquadMember = {
  memberId: string;
  joinDate: string;
  xpCollected: number;
  isCurrentUser?: boolean;
};

export type SquadsListResponse = {
  squadName: string;
  level: number;
  xpToLevelUp: number;
  currentXp: number;
  totalMembers: number;
  maxMembers: number;
  spinLuckBonus: number;
  xpCollected: number;
  members: SquadMember[];
};

// Create Squad
export type CreateSquadParams = {
  squadName: string;
};

export type CreateSquadResponse = {
  squadId: string;
  squadName: string;
};

// Send Squad Invite
export type SendSquadInviteParams = {
  squadId: string;
};

export type SendSquadInviteResponse = {
  inviteId: string;
  squadId: string;
};

// Accept Squad Invite
export type AcceptSquadInviteParams = {
  inviteId: string;
};

export type AcceptSquadInviteResponse = {
  success: boolean;
};

// Reject Squad Invite
export type RejectSquadInviteParams = {
  inviteId: string;
};

export type RejectSquadInviteResponse = {
  success: boolean;
};

// Squads Leaderboard
export type SquadsLeaderboardParams = {
  order?: string;
  pageSize?: number;
  pageNumber?: number;
};

export type SquadLeaderboardEntry = {
  squadId: string;
  squadName: string;
  level: number;
  totalXp: number;
  totalMembers: number;
  rank: number;
};

export type SquadsLeaderboardResponse = {
  squads: SquadLeaderboardEntry[];
  page: number;
  pageSize: number;
  total: number;
};
