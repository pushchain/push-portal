import React from "react";
import { css } from "styled-components";

import {
  Box,
  Button,
  Multiplier,
  ProgressBar,
  RewardsBell,
  RewardsStar,
  RewardsStarGradient,
  Text,
} from "../../../src/blocks";

import RumorsImg from "../../../static/assets/website/rewards/rumors-app.webp";
import { RewardsActivityTitle } from "./RewardsActivityTitle";

const RumorsAppCard = () => {
  return (
    <Box
      backgroundColor="surface-primary"
      padding="spacing-sm spacing-md"
      borderRadius="radius-md"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      css={css`
        flex: 1;
      `}
    >
      <Box>
        <Box
          display="flex"
          flexDirection={{ initial: "row", ml: "column-reverse" }}
          alignItems={{ initial: "center", ml: "flex-start" }}
          gap="spacing-md"
          justifyContent="space-between"
          width="100%"
        >
          <Box>
            <Text variant="h4-semibold" color="text-primary">
              Rumors App
            </Text>
            <RewardsActivityTitle
              activityTitle="Visit [rumors.push.org](https://rumors.push.org) and create or react to rumors to level up."
              isLoading={false}
              variant="bm-regular"
              color="text-tertiary"
            />

            <Button
              variant="tertiary"
              size="small"
              css={css`
                margin: var(--spacing-md) 0 0 0;
              `}
              disabled
            >
              Level Up to Claim
            </Button>
          </Box>

          <img
            src={RumorsImg}
            style={{ width: "auto", height: "180px", objectFit: "contain" }}
          />
        </Box>

        <Box display="flex" flexDirection="column" gap="spacing-xs">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            margin="spacing-md spacing-none spacing-none spacing-none"
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
              <Multiplier width={23} height={25} />
              <Text variant="bm-semibold" color="text-state-success-bold">
                1.5x
              </Text>

              <br />

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

export default RumorsAppCard;
