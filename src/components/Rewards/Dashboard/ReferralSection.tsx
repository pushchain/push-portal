// React and other libraries
import React, { FC } from "react";

// third party libraries
import { css } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";

//hooks
import { useGetUserRewardsDetails } from "../../../queries";

//helpers
import { getPreviewBasePath } from "../../../basePath";
import { walletToFullCAIP10 } from "../../helpers/web3helper";
import { useCopy } from "../../hooks/useCopy";

// components
import { Box, Button, Copy, Text, Referral } from "../../../blocks";
import { device } from "../../config/globals";

export type ReferralSectionProps = Record<string, never>;

const ReferralSection: FC<ReferralSectionProps> = () => {
  const previewBasePath = getPreviewBasePath() || "";
  const baseUrl = window.location.origin + previewBasePath;

  const { universalAccount } = usePushWalletContext();
  const account = universalAccount?.address;
  const isWalletConnected = Boolean(universalAccount?.address);
  const caip10WalletAddress = walletToFullCAIP10(
    account,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { textRef, isCopied, copyToClipboard } = useCopy();

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
        background: linear-gradient(90deg, #cdcbff 41%, #ce9fff 100%);
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={{ initial: "spacing-lg", ml: "spacing-xs" }}
      >
        <Box
          display={{ initial: "flex", ml: "none" }}
          flexDirection="column"
          gap="spacing-xxs"
        >
          <Text variant="h3-bold" color="text-on-light-bg">
            Onboard Users on Push Chain Devnet.
            <br /> Earn Points.
          </Text>
          <Box>
            <Text variant="bm-regular" color="text-on-light-bg">
              Earn +20% of any Points your invites earn, and +5% of any Points
              your invite’s invites earn.
            </Text>
          </Box>
        </Box>

        <Box
          display={{ initial: "none", ml: "flex" }}
          flexDirection="column"
          gap="spacing-xxs"
        >
          <Text variant="h4-bold" color="text-on-light-bg">
            Onboard Users on Push Chain Devnet. Earn Points.
          </Text>
          <Box>
            <Text variant="bs-regular" color="text-on-light-bg">
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
            <Button
              leadingIcon={<Copy />}
              onClick={copyToClipboard}
              css={css`
                width: fit-content;
              `}
            >
              {isCopied ? "Copied" : "Copy Link"}
            </Button>
          </Box>
        )}
      </Box>

      <Box
        height="auto"
        width={{ initial: "fit-content", ml: "200px" }}
        display="flex"
        css={css`
          margin: var(--spacing-none);
          @media ${device.tablet} {
            margin: var(--spacing-none) auto;`}
      >
        <Referral />
      </Box>
    </Box>
  );
};

export default ReferralSection;
