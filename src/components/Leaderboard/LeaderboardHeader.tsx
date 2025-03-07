// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "styled-components";

import { Box, Button, Points, Text, CaretLeft } from "../../blocks";
import { device } from "../../config/globals";

const LeaderboardHeader: FC = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/rewards");
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      flexDirection={{ initial: "row", tb: "column" }}
      gap="spacing-sm"
    >
      <Box
        display="flex"
        gap="spacing-sm"
        flexDirection={{ initial: "row", tb: "column", ml: "column" }}
        alignItems={{ ml: "center" }}
      >
        <Box
          css={css`
            @media ${device.tablet} {
              margin: 0 auto;
            }
          `}
        >
          <Points />
        </Box>

        <Box flexDirection="column" display={{ initial: "flex", tb: "none" }}>
          <Text variant="h3-semibold">
            Welcome to Push Chain Devnet Drop S2!
          </Text>
          <Text variant="bm-regular">
            Explore Push Chain Devnet, complete quests, bang out multipliers,
            and earn airdrops.
          </Text>
        </Box>

        <Box flexDirection="column" display={{ initial: "none", tb: "flex" }}>
          <Text variant="h3-semibold" textAlign="center">
            Welcome to Push Chain Devnet Drop S2!
          </Text>
          <Text variant="bm-regular" textAlign="center">
            Explore Push Chain Devnet, complete quests, bang out multipliers,
            and earn airdrops.
          </Text>
        </Box>
      </Box>

      <Box display={{ initial: "flex", tb: "none" }}>
        <Button
          variant="outline"
          leadingIcon={<CaretLeft />}
          onClick={handleGoBack}
        >
          Back to Home
        </Button>
      </Box>

      <Box display={{ initial: "none", tb: "flex" }} width="100%">
        <Button
          variant="outline"
          leadingIcon={<CaretLeft />}
          block={true}
          onClick={handleGoBack}
        >
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export { LeaderboardHeader };
