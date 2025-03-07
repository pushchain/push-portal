// React and other libraries
import React, { FC } from "react";

// third party libraries
import { css } from "styled-components";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

//hooks
import { useGetUserRewardsDetails } from "../../queries";
// import { useRewardsAuth } from "./hooks/useRewardsAuth";

//helpers
import { getPreviewBasePath } from "../../../basePath";
import { walletToPCAIP10 } from "../../helpers/web3helper";
import { useCopy } from "../../hooks/useCopy";

// components
import { Box, Button, Copy, Text, Referral } from "../../blocks";

export type ReferralSectionProps = Record<string, never>;

const ReferralSection: FC<ReferralSectionProps> = () => {
  const previewBasePath = getPreviewBasePath() || "";
  const baseUrl = window.location.origin + previewBasePath;

  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address;
  const isWalletConnected = Boolean(universalAddress?.address);
  const caip10WalletAddress = walletToPCAIP10(account);

  const { data: userDetails, isLoading } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  // const { status } = useRewardsAuth();

  const { textRef, isCopied, copyToClipboard } = useCopy();

  // const handleConnectWallet = () => {
  //   connect();
  // };
  //

  return (
    <Box
      display="flex"
      flexDirection={{ tb: "column-reverse", initial: "row" }}
      padding={{ tb: "spacing-sm", initial: "spacing-xxl" }}
      borderRadius="radius-md"
      alignItems={{ tb: "flex-start", initial: "center" }}
      justifyContent="space-between"
      gap={{ tb: "spacing-lg" }}
      css={css`
        /* background: linear-gradient(
          90deg,
          var(--surface-primary, #fff) 41%,
          #d5b0fc 100%
        ); */
        background: linear-gradient(90deg, #cdcbff 41%, #ce9fff 100%);
      `}
    >
      <Box display="flex" flexDirection="column" gap="spacing-lg">
        <Box display="flex" flexDirection="column" gap="spacing-xxs">
          <Text variant="h3-bold" color="text-on-light-bg">
            Onboard Users on Push Chain Devnet.
            <br /> Earn Points.
          </Text>
          <Box>
            <Text variant="bm-regular" color="text-on-light-bg">
              Earn +12% of any Points your invites earn, and +2% of any Points
              your invite’s invites earn.
            </Text>
          </Box>
        </Box>

        {isWalletConnected && userDetails && (
          <Box
            display="flex"
            gap="spacing-xxs"
            width="100%"
            flexDirection={{ tb: "column", initial: "row" }}
          >
            <Box
              minWidth={{ tb: "auto", initial: "344px" }}
              display="flex"
              alignItems="center"
              padding="spacing-xs"
              borderRadius="radius-xs"
              border="border-xmd solid stroke-secondary"
              css={css`
                background: var(--components-inputs-background-default);
              `}
            >
              <Text
                variant="bs-regular"
                ref={textRef}
                css={css`
                  color: var(--components-inputs-text-default);
                `}
              >
                {baseUrl}/rewards?ref={userDetails?.userId}
              </Text>
            </Box>
            <Button leadingIcon={<Copy />} onClick={copyToClipboard}>
              {isCopied ? "Copied" : "Copy Link"}
            </Button>
          </Box>
        )}

        {/* {isWalletConnected && status == 'error' && !isLoading && (
          <Box>
            <Button size='small' onClick={handleUnlockProfile}>
              Unlock Profile
            </Button>
          </Box>
        )}

        {!isWalletConnected && (
          <Box>
            <Button size='small' onClick={handleConnectWallet}>
              Connect Wallet
            </Button>
          </Box>
        )}
      */}
      </Box>

      <Box height="auto">
        <Referral />
      </Box>
    </Box>
  );
};

export default ReferralSection;
