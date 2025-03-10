import React from "react";
import { css } from "styled-components";

import { RewardsActivityTitle } from "./RewardsActivityTitle";

import {
  Box,
  Button,
  ProgressBar,
  RewardsBell,
  RewardsStar,
  RewardsStarGradient,
  Text,
} from "../../../src/blocks";
import ChessImg from "../../../static/assets/website/rewards/chess-app.webp";

const UniversalChessCard = () => {
  return (
    <Box
      backgroundColor="surface-primary"
      borderRadius="radius-md"
      display="flex"
      flexDirection="column"
      width="100%"
      css={css`
        flex: 2;
      `}
    >
      <Box
        width="100%"
        display="flex"
        overflow="hidden"
        borderRadius="radius-md radius-md radius-none radius-none"
      >
        <img
          src={ChessImg}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </Box>

      <Box padding="spacing-sm spacing-md">
        <Text variant="h3-semibold" color="text-primary">
          Universal Chess
        </Text>
        <RewardsActivityTitle
          activityTitle="Visit [chess.push.org](https://chess.push.org) and play games of chess with other degens or bots on any chain and level up to claim points."
          isLoading={false}
          variant="bm-regular"
          color="text-tertiary"
        />

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          margin="spacing-md spacing-none"
        >
          <Button variant="tertiary" size="small" disabled>
            Level Up to Claim
          </Button>
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-xs">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            margin="spacing-md spacing-none spacing-xs spacing-none"
          >
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-xxs"
              backgroundColor="surface-secondary"
              alignItems="center"
              borderRadius="radius-xxs"
              padding="spacing-xxxs"
            >
              <Text>Lvl. 1</Text>
              <RewardsStar color="icon-brand-medium" />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-xxs"
              alignItems="center"
            >
              <RewardsBell width={23} height={25} />
              <Text variant="bm-semibold">10,000</Text>
            </Box>
          </Box>

          <ProgressBar
            progress={40}
            max={200}
            size="large"
            progressIcon={<RewardsStarGradient size={35} />}
            progressIconText="200XP"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UniversalChessCard;
