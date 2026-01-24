import { css } from "styled-components"
import { Box, Text } from "../../../blocks"

type StatCardProps = {
  value: string | number;
  label: string;
  variant: 'purple' | 'gold';
}

const StatCard = ({ value, label, variant }: StatCardProps) => {
  const gradientBg = variant === 'purple'
    ? 'radial-gradient(50% 50% at 73% 50%, rgba(19, 18, 32, 1) 52%, rgba(16, 13, 68, 1) 100%)'
    : 'radial-gradient(50% 50% at 73% 50%, rgba(19, 18, 32, 1) 54%, rgba(68, 53, 13, 1) 100%)';

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="spacing-sm"
      borderRadius="radius-md"
      css={css`
        flex: 1;
        min-height: 120px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: ${gradientBg};
        overflow: hidden;
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-xxxs"
      >
        <Text
          variant="h1-bold"
          color="text-primary"
        >
          {value}
        </Text>
        <Text
          variant="h5-semibold"
          css={css`
            color: rgba(255, 255, 255, 0.75);
            text-align: center;
          `}
        >
          {label}
        </Text>
      </Box>
    </Box>
  );
};

type ReferralStatsProps = {
  totalActiveReferrals: number;
  pointsEarned: number;
}

export const ReferralStats = ({ totalActiveReferrals, pointsEarned }: ReferralStatsProps) => {
  return (
    <Box
      display="flex"
      flexDirection={{ initial: "row", ml: "column" }}
      gap="spacing-md"
      width="100%"
    >
      <StatCard
        value={totalActiveReferrals}
        label="Total Active Referrals"
        variant="purple"
      />
      <StatCard
        value={pointsEarned.toLocaleString()}
        label="Points Earned"
        variant="gold"
      />
    </Box>
  );
};
