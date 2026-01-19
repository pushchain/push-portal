import { css } from "styled-components"
import { Box, Text, Copy } from "../../../blocks"
import { device } from "../../../config/globals"

type SquadMember = {
  memberId: string;
  joinDate: string;
  xpCollected: number;
  isCurrentUser?: boolean;
}

type MemberRowProps = {
  member: SquadMember;
  onCopyAddress?: (address: string) => void;
}

const MemberRow = ({ member, onCopyAddress }: MemberRowProps) => {
  const truncateAddress = (address: string) => {
    if (address.length <= 20) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap="spacing-xs"
      width="100%"
      padding="spacing-xs spacing-none"
    >
      {/* Member ID */}
      <Box
        display="flex"
        alignItems="center"
        gap="spacing-xs"
        css={css`
          flex: 2;
          min-width: 0;
        `}
      >
        <Box
          display="flex"
          alignItems="center"
          gap="spacing-xs"
          padding="spacing-xs spacing-sm"
          borderRadius="radius-xs"
          css={css`
            flex: 1;
            min-width: 0;
          `}
        >
          <Text 
            variant="bs-semibold"
            css={css`
              color: ${member.isCurrentUser ? 'var(--text-brand-medium)' : '#fff'};
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

              @media ${device.mobileL} {
                font-size: 12px;
              }
            `}
          >
            <span className="full-address" style={{ display: 'none' }}>{member.memberId}</span>
            <span className="truncated-address">{truncateAddress(member.memberId)}</span>
          </Text>
          
          {member.isCurrentUser && (
            <Box
              display="flex"
              alignItems="center"
              cursor="pointer"
              onClick={() => onCopyAddress?.(member.memberId)}
            >
              <Copy size={16} color="icon-brand-medium" />
            </Box>
          )}
        </Box>
      </Box>

      {/* Join Date */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        css={css`
          flex: 1;
          
          @media ${device.mobileL} {
            display: none;
          }
        `}
      >
        <Text 
          variant="bs-semibold" 
          color="text-primary"
          css={css`text-align: center;`}
        >
          {member.joinDate}
        </Text>
      </Box>

      {/* XP Collected */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        css={css`
          flex: 1;
          min-width: 100px;
        `}
      >
        <Text 
          variant="bs-semibold" 
          color="text-primary"
          css={css`text-align: right;`}
        >
          {member.xpCollected.toLocaleString()} XP
        </Text>
      </Box>
    </Box>
  );
};

type SquadMembersTableProps = {
  members: SquadMember[];
  onCopyAddress?: (address: string) => void;
}

export const SquadMembersTable = ({ members, onCopyAddress }: SquadMembersTableProps) => {
  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    onCopyAddress?.(address);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
    >
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        gap="spacing-xs"
        width="100%"
        padding="spacing-none spacing-none spacing-sm spacing-none"
        css={css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
        `}
      >
        <Box css={css`flex: 2;`}>
          <Text 
            variant="h5-semibold"
            css={css`
              color: rgba(255, 255, 255, 0.75);
              padding-left: var(--spacing-sm);
            `}
          >
            Member ID
          </Text>
        </Box>
        <Box 
          css={css`
            flex: 1; 
            text-align: center;
            
            @media ${device.mobileL} {
              display: none;
            }
          `}
        >
          <Text 
            variant="h5-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            Join Date
          </Text>
        </Box>
        <Box css={css`flex: 1; text-align: right;`}>
          <Text 
            variant="h5-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            XP Collected
          </Text>
        </Box>
      </Box>

      {/* Member Rows */}
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xxxs"
        css={css`padding-top: var(--spacing-xs);`}
      >
        {members.map((member, index) => (
          <MemberRow
            key={index}
            member={member}
            onCopyAddress={handleCopy}
          />
        ))}
      </Box>
    </Box>
  );
};
