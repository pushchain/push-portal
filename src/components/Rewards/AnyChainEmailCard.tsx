import React from "react";

import {
  Box,
  Button,
  ProgressBar,
  RewardsBell,
  RewardsStar,
  RewardsStarGradient,
  Text,
} from "../../../src/blocks";
import { css } from "styled-components";

import { RewardsActivityTitle } from "./RewardsActivityTitle";
import EmailImg from "../../../static/assets/website/rewards/email-app.webp";

const AnyChainEmailCard = () => {
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
              Any Chain Email
            </Text>
            <RewardsActivityTitle
              activityTitle="Visit [email.push.org](https://email.push.org) and send or receive emails to level up."
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
            src={EmailImg}
            style={{ width: "auto", height: "188px", objectFit: "contain" }}
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
              <RewardsBell width={23} height={25} />
              <Text variant="bm-semibold">10,000</Text>
            </Box>
          </Box>

          <ProgressBar
            progress={40}
            max={200}
            size="large"
            progressIcon={<RewardsStarGradient size={35} />}
            progressIconText="200%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AnyChainEmailCard;
