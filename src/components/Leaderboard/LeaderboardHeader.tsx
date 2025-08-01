// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "styled-components";
import {
  PushWalletButton,
  usePushWalletContext,
} from "@pushprotocol/pushchain-ui-kit";

import { device } from "../../config/globals";
import useMediaQuery from "../../hooks/useMediaQuery";

import { Box, Button, Points, Text, CaretLeft } from "../../blocks";

const LeaderboardHeader: FC = () => {
  const isTablet = useMediaQuery(device.tablet);
  const { universalAddress } = usePushWalletContext();
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
      gap={{ initial: "spacing-sm", tb: "spacing-xs" }}
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
            Devnet Drop S2 has ended! Stay tuned for updates.
          </Text>
          <Text variant="bm-regular">
            Thanks for participating in devnet drop. S3 coming soon!
          </Text>
        </Box>

        <Box flexDirection="column" display={{ initial: "none", tb: "flex" }}>
          <Text variant="h3-semibold" textAlign="center">
            Devnet Drop S2 has ended! Stay tuned for updates.
          </Text>
          <Text variant="bm-regular" textAlign="center">
            Thanks for participating in devnet drop. S3 coming soon!
          </Text>
        </Box>
      </Box>

      <Box width={{ ml: "100%" }} display="flex" flexDirection="column">
        <Box
          css={css`
            button {
              flex: 1;
              width: 100% !important;
              margin: 0 0 16px 0;
            }
          `}
        >
          {isTablet && (
            <PushWalletButton
              universalAddress={universalAddress}
              title="Connect Push Wallet"
              styling={{
                fontFamily: "inherit",
              }}
            />
          )}

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
      </Box>
    </Box>
  );
};

export { LeaderboardHeader };
