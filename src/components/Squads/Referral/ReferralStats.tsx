import { css } from "styled-components"
import { Box, Text } from "../../../blocks"

type StatCardProps = {
  value: string | number;
  label: string;
  variant: 'purple' | 'gold';
}

const StatCard = ({ value, label, variant }: StatCardProps) => {
  const gradientBg = variant === 'purple'
    ? 'radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 51.7%, #100D44 100%)'
    : 'radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 53.87%, #44350D 100%)';

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="spacing-sm"
      borderRadius="radius-md"
      position="relative"
      css={css`
        flex: 1;
        min-height: 120px;
        background: ${gradientBg};
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: rgba(255, 255, 255, 0.10);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        gap="spacing-xxxs"
        width="100%"
        height="100%"
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
            white-space: pre-line;
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
  pointsEarned: number | '-';
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
        label={"Total Active\nReferrals"}
        variant="purple"
      />
      <StatCard
        value={pointsEarned.toLocaleString()}
        label={"Points\nEarned"}
        variant="gold"
      />
    </Box>
  );
};
