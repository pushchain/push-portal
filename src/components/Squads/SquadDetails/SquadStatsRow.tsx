import { css } from "styled-components"
import { Box, Text } from "../../../blocks"
import { device } from "../../../config/globals"

type StatCardProps = {
  value: string | number;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
      padding="spacing-md spacing-sm"
      borderRadius="radius-md"
      position="relative"
      css={css`
        flex: 1;
        min-height: 120px;
        /*border: 1px solid rgba(255, 255, 255, 0.10);*/
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);
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

type SquadStatsRowProps = {
  totalMembers: number;
  maxMembers: number;
  spinLuckBonus: number;
  xpCollected: number;
}

export const SquadStatsRow = ({
  totalMembers,
  maxMembers,
  spinLuckBonus,
  xpCollected
}: SquadStatsRowProps) => {
  return (
    <Box
      display="flex"
      flexDirection={{ initial: "row", ml: "column" }}
      gap="spacing-md"
      width="100%"
    >
      <StatCard
        value={`${totalMembers}/${maxMembers}`}
        label="Total Members"
      />
      <StatCard
        value={`${spinLuckBonus}x`}
        label="Spin Luck Bonus"
      />
      <StatCard
        value={xpCollected.toLocaleString()}
        label="XP Collected"
      />
    </Box>
  );
};
