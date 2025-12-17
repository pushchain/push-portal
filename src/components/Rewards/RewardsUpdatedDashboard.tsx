import { css } from "styled-components";

import {
  PushWalletButton,
  usePushWalletContext,
} from "@pushprotocol/pushchain-ui-kit";

import { Box, Text, ArrowDown, GlowStreaks } from "../../blocks";
import { RenderLoggedInVerifiedState } from "./Dashboard/RenderLoggedInVerifiedState";

export const RewardsUpdatedDashboard = () => {
  const { universalAddress } = usePushWalletContext();
  const isWalletConnected = Boolean(universalAddress?.address);

  const renderLoggedOutState = () => (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      borderRadius="radius-md"
      css={css`
        flex: 1;
        border: 1px solid rgba(171, 70, 248, 0.40);
        background: rgba(0, 0, 0, 0.10);
        background-blend-mode: plus-lighter;
        box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
        backdrop-filter: blur(10px);
      `}
      >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      borderRadius="radius-md"
      padding="spacing-xxxl spacing-md"
      overflow="hidden"
      width="100%"
      css={css`
        min-height: 333px;
        max-height: 333px;
        background: #F1D5FF;
        box-sizing: border-box;
      `}
    >

      <Box
          css={css`
            position: absolute;
            bottom: -50px;
            left: -50px;
            width: 230px;
            height: 230px;
            pointer-events: none;
            z-index: 0;

            background: #E58CF6;
            filter: blur(50px);
          `}
        >
        </Box>

      <Box
          css={css`
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
          `}
        >
          <GlowStreaks />
        </Box>

        <Box
            css={css`
              position: absolute;
              top: 0px;
              left: 150px;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 0;
            `}
          >
            <GlowStreaks />
          </Box>

          <Box
              css={css`
                position: absolute;
                top: 0px;
                left: 300px;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 0;
              `}
            >
              <GlowStreaks />
         </Box>


        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-lg"
        css={css`
          position: relative;
          z-index: 1;
          max-width: 900px;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Text variant="h1-bold" color="#000000">
            Build, Test, & Earn Rare Rewards
          </Text>
          <Text variant="h5-regular" color="#000000">
            Explore Universal Apps. Gain XP. Unlock Spins & Earn Rewards!
          </Text>
        </Box>

        <PushWalletButton
          universalAddress={universalAddress}
          title="Connect Account"
          styling={{
            width: "fit-content",
            fontFamily: "inherit",
            margin: "0 auto",
            borderRadius: "12px"
          }}
        />
      </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="spacing-xxxs"
        css={css`
          padding: var(--spacing-xs) var(--spacing-md);
          cursor: pointer;
        `}
      >
        <Text variant="h5-regular">
          Explore Season 3
        </Text>
        <ArrowDown size={20} color="white" />
        </Box>
    </Box>
  );

  // const renderLoggedInUnverifiedState = () => (
  //   <Box>
  //     <Text>Logged In Unverified State - Coming Soon</Text>
  //   </Box>
  // );

  const renderLoggedInVerifiedState = () => (
    <RenderLoggedInVerifiedState />
  );

  return isWalletConnected ? renderLoggedInVerifiedState() : renderLoggedOutState();
};
