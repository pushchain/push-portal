import { css } from "styled-components"
import { Box } from "../../../blocks"
import { SquadHeader } from "./SquadHeader"
import { SquadLevelCard } from "./SquadLevelCard"
import { SquadStatsRow } from "./SquadStatsRow"
import { SquadMembersTable } from "./SquadMembersTable"
import { device } from "../../../config/globals"

type SquadMember = {
  memberId: string;
  joinDate: string;
  xpCollected: number;
  isCurrentUser?: boolean;
}

type SquadData = {
  squadName: string;
  level: number;
  xpToLevelUp: number;
  currentXp: number;
  totalMembers: number;
  maxMembers: number;
  spinLuckBonus: number;
  xpCollected: number;
  members: SquadMember[];
}

type SquadSectionProps = {
  squadData: SquadData;
  onInviteMembers?: () => void;
  onCopyAddress?: (address: string) => void;
}

export const SquadSection = ({ squadData, onInviteMembers, onCopyAddress }: SquadSectionProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
      width="100%"
    >
      {/* Header - S3 Squad title and invite button */}
      <SquadHeader onInviteMembers={onInviteMembers} />

      {/* Stats Row - Level Card + Stats */}
      <Box
        display="flex"
        flexDirection={{ initial: "row", tb: "column" }}
        gap="spacing-md"
        width="100%"
      >
        {/* Level Card */}
        <Box
          css={css`
            flex-shrink: 0;
            
            @media ${device.tablet} {
              width: 100%;
              max-width: 100%;
            }
          `}
        >
          <SquadLevelCard
            squadName={squadData.squadName}
            level={squadData.level}
            xpToLevelUp={squadData.xpToLevelUp}
            currentXp={squadData.currentXp}
          />
        </Box>

        {/* Stats Cards */}
        <Box css={css`flex: 1; min-width: 0;`}>
          <SquadStatsRow
            totalMembers={squadData.totalMembers}
            maxMembers={squadData.maxMembers}
            spinLuckBonus={squadData.spinLuckBonus}
            xpCollected={squadData.xpCollected}
          />
        </Box>
      </Box>

      {/* Members Table */}
      <SquadMembersTable
        members={squadData.members}
        onCopyAddress={onCopyAddress}
      />
    </Box>
  );
};
