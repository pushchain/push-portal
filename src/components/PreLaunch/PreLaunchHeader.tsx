import { css } from "styled-components"
import { PushWalletButton } from "@pushprotocol/pushchain-ui-kit"
import { Box, Button, GlowStreaks, SealCheckFilled, Text } from "../../blocks"
import { RewardsActivityIcon } from "../Rewards/RewardsActivity/RewardsActivityIcon"
import { UserRewardsDetailResponse } from "../../queries/types"
import { RewardsActivityTitle } from "../Rewards/RewardsActivity/RewardsActivityTitle"
import useMediaQuery from "../../hooks/useMediaQuery"
import { device } from "../../config/globals"

type PreLaunchHeaderProps = {
  universalAddress: any;
  userRewardsDetails?: UserRewardsDetailResponse;
  verifyingSeasonThree: boolean;
  handleSeasonThreeVerification: (userId: string) => void;
  verificationSuccess: boolean;
}

export const PreLaunchHeader = ({
  universalAddress,
  userRewardsDetails,
  verifyingSeasonThree,
  handleSeasonThreeVerification,
  verificationSuccess,
}: PreLaunchHeaderProps) => {


  const isMobile = useMediaQuery(device.mobileL);

  return (
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
        padding="spacing-md"
        overflow="hidden"
        width="100%"
        css={css`
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
        />

        {!isMobile && (<>
        <Box css={css`position: absolute; bottom: -50px; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: -50px; left: 150px; width: 100%; height: 100%; pointer-events: none; z-index: 0;`}>
          <GlowStreaks />
        </Box>

        <Box css={css`position: absolute; bottom: -50px; left: 0px; width: 100%; height: 100%; pointer-events: none; z-index: 0;`}>
          <GlowStreaks />
        </Box>
        </>)}

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          css={css`
            position: relative;
            z-index: 1;
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            css={css`
              max-width: 900px;
              margin: 32px 0px;
            `}
          >
            <Text
              variant="h1-bold"
              css={css`
                background: linear-gradient(180deg, #000 43.49%, #7D238C 90.32%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;

                @media ${device.mobileL} {
                    font-size: 40px;
                    line-height: 45px;
                }
              `}
            >
              Apply for Season 3 {!isMobile && (<br />)}
              Pre-Launch Access
            </Text>

            {!verificationSuccess &&
              <Text variant="h5-regular" color="#000000">
              Current entries open to Season 1 or 2 participants only
            </Text>}
          </Box>

          {verificationSuccess &&
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              gap="spacing-xxs"
              css={css`
                margin-top: 32px;
                `}
            >
              <SealCheckFilled />
              <Text variant="h4-semibold" color="#000000">Entry verified. Limited seats available.</Text>
            </Box>}

          {!verificationSuccess &&
            (<Box
              display="flex"
              flexDirection={{initial: "row", tb: "column"}}
              width="100%"
              gap="spacing-md">
            <Box
              display="flex"
              flexDirection={{initial: "row", tb: "column"}}
              alignItems="center"
              width="100%"
              padding="spacing-sm spacing-md"
              gap="spacing-xs"
              css={css`
                border-radius: var(--radius-md, 24px);
                border: 1px solid #FFF;
                background: rgba(255, 255, 255, 0.40);
                box-sizing: border-box;
              `}
            >
              <Text variant="h4-semibold" color="#17181B">
                Connect with an account used during Season 1 or 2
              </Text>

              {universalAddress ? (
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap="spacing-xxs"
                  padding="spacing-xs spacing-md"
                >
                  <SealCheckFilled color='#00A47F'/>
                  <Text
                    color="#00A47F"
                    css={css`
                        white-space: nowrap;
                        leading-trim: both;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 16px;
                    `}>Account Verified</Text>
                </Box>
              ) : (
                <PushWalletButton
                universalAddress={universalAddress}
                title="Connect Account"
                styling={{
                  width: "fit-content",
                  fontFamily: "DM Sans !important",
                  borderRadius: "12px"
                }}
              />)}
            </Box>

            <Box
              display="flex"
              flexDirection={{initial: "row", tb: "column"}}
              alignItems="center"
              width="100%"
              padding="spacing-sm spacing-md"
              gap="spacing-xs"
              css={css`
                border-radius: var(--radius-md, 24px);
                border: 1px solid #FFF;
                background: rgba(255, 255, 255, 0.40);
                box-sizing: border-box;
              `}
            >
              <RewardsActivityIcon type="follow_push_on_discord" />
              <RewardsActivityTitle activityTitle="Join [Push Chain Discord](https://discord.com/invite/pushchain) to apply for eligibility" variant="h4-semibold" isLoading={false} color="#17181B"  />
              <Button
                variant="tertiary"
                size="small"
                onClick={() => {
                  if (userRewardsDetails?.userId) {
                    handleSeasonThreeVerification(userRewardsDetails.userId);
                  }
                }}
                disabled={verifyingSeasonThree}
                css={css`
                  color: #fff !important;
                  `}
              >
                {verifyingSeasonThree ? "Verifying..." : "Verify Discord"}
              </Button>
            </Box>
          </Box>)}
        </Box>
      </Box>

      {!verificationSuccess && (<Box
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
          Connect your account and Verify Discord to have a chance to participate
        </Text>
      </Box>)}
    </Box>
  )
}
