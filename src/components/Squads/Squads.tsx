import { css } from "styled-components"
import { Box } from "../../blocks"
import { ReferralStats, ReferralProgram, InviteCodes } from "./Referral"
import { SquadSection } from "./SquadDetails"
import { device } from "../../config/globals"

export const Squads = () => {
  // Mock data - replace with actual data from API
  const statsData = {
    totalActiveReferrals: 2,
    pointsEarned: 10000
  };

  const inviteCodes = [
    { code: 'PC-X152CT', status: 'available' as const },
    { code: 'PC-TY7UJK', status: 'available' as const },
    { code: 'PC-AB3DEF', status: 'available' as const },
    { code: 'PC-GH4IJK', status: 'claimed' as const },
    { code: 'PC-LM5NOP', status: 'claimed' as const },
  ];

  const squadData = {
    squadName: 'HellFire',
    level: 1,
    xpToLevelUp: 15000,
    currentXp: 0,
    totalMembers: 1,
    maxMembers: 10,
    spinLuckBonus: 0.5,
    xpCollected: 15000,
    members: [
      {
        memberId: '0x7A0bAeB5a6180F89Bae36998e3B5e29ae63b4669',
        joinDate: '16 Jan, 2026',
        xpCollected: 5000,
        isCurrentUser: true
      },
      {
        memberId: '0x48fD2Ab413884849e582465cB6a658dD8B2FF5D6',
        joinDate: '16 Jan, 2026',
        xpCollected: 4500,
        isCurrentUser: false
      },
      {
        memberId: '0x94F5e4897a6FCed670F745B3d1339801efE7dFA8',
        joinDate: '16 Jan, 2026',
        xpCollected: 2000,
        isCurrentUser: false
      },
      {
        memberId: '0xA5D897E2ddBD508d252B208a8813b269f9a45710',
        joinDate: '16 Jan, 2026',
        xpCollected: 3500,
        isCurrentUser: false
      }
    ]
  };

  const handleCopyCode = (code: string) => {
    console.log(`Copied code: ${code}`);
    // You can add toast notification here
  };

  const handleCopyAddress = (address: string) => {
    console.log(`Copied address: ${address}`);
    // You can add toast notification here
  };

  const handleInviteMembers = () => {
    console.log('Invite members clicked');
    // You can open a modal or navigate to invite page
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
      width="100%"
    >
      {/* Referral Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
        padding="spacing-md"
        borderRadius="radius-lg"
        width="100%"
        css={css`
          border: 1px solid rgba(171, 70, 248, 0.4);
          background: rgba(0, 0, 0, 0.1);
          background-blend-mode: plus-lighter;
          box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset,
                      1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
          backdrop-filter: blur(10px);
          box-sizing: border-box;
        `}
      >
        <Box
          display="flex"
          flexDirection={{ initial: "row", tb: "column" }}
          gap="spacing-md"
          width="100%"
        >
          {/* Left Column - Stats and Referral Program */}
          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-md"
            css={css`
              flex: 1;
              min-width: 0;

              @media ${device.tablet} {
                width: 100%;
              }
            `}
          >
            <ReferralStats 
              totalActiveReferrals={statsData.totalActiveReferrals}
              pointsEarned={statsData.pointsEarned}
            />
            <ReferralProgram />
          </Box>

          {/* Right Column - Invite Codes */}
          <Box
            css={css`
              flex: 1;
              min-width: 0;

              @media ${device.tablet} {
                width: 100%;
              }
            `}
          >
            <InviteCodes 
              inviteCodes={inviteCodes}
              onCopyCode={handleCopyCode}
            />
          </Box>
        </Box>
      </Box>

      {/* Squad Section */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
        padding="spacing-md"
        borderRadius="radius-lg"
        width="100%"
        css={css`
          border: 1px solid rgba(171, 70, 248, 0.4);
          background: rgba(0, 0, 0, 0.1);
          background-blend-mode: plus-lighter;
          box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset,
                      1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
          backdrop-filter: blur(10px);
          box-sizing: border-box;
        `}
      >
        <SquadSection 
          squadData={squadData}
          onInviteMembers={handleInviteMembers}
          onCopyAddress={handleCopyAddress}
        />
      </Box>
    </Box>
  );
};
