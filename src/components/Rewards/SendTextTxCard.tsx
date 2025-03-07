import React from "react";
import { css } from "styled-components";

import { Box, Button, RewardsBell, Text } from "../../../src/blocks";

import SimulateImg from "../../../static/assets/website/rewards/simulate-app.webp";

const SendTestTxCard = () => {
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
      <Box
        width="60%"
        display="flex"
        overflow="hidden"
        margin="spacing-sm spacing-none"
      >
        <img
          src={SimulateImg}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </Box>

      <Box>
        <Text variant="h4-semibold" color="text-primary">
          Send Test Tx on Push Chain
        </Text>
        <Text variant="bm-regular" color="text-tertiary">
          Visit simulate.push.org and send test transactions to level up.
        </Text>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          margin="spacing-md spacing-none"
        >
          <Button variant="tertiary" size="small">
            Claim
          </Button>
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
      </Box>
    </Box>
  );
};

export default SendTestTxCard;
