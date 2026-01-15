import { css } from "styled-components"
import { PushUniversalAccountButton, usePushWalletContext } from "@pushchain/ui-kit"
import { Alert, Box, Button,  CrossFilled, GlowStreaks, SealCheckFilled, Skeleton, Text } from "../../blocks"
import { RewardsActivityIcon } from "../Rewards/RewardsActivity/RewardsActivityIcon"
import { UserRewardsDetailResponse, UserSeasonOneResponse } from "../../queries/types"
import { RewardsActivityTitle } from "../Rewards/RewardsActivity/RewardsActivityTitle"
import useMediaQuery from "../../hooks/useMediaQuery"
import { device } from "../../config/globals"

type PreLaunchHeaderProps = {
  userRewardsDetails?: UserRewardsDetailResponse;
  userSeasonOneRewardsDetails?: UserSeasonOneResponse;
  verifyingSeasonThree: boolean;
  handleSeasonThreeVerification: (userId: string) => void;
  verificationSuccess: boolean;
  isUserEligible?: boolean;
  errorMessage?: string;
  isLoading?: boolean;
}

export const PreLaunchHeader = ({
  userRewardsDetails,
  userSeasonOneRewardsDetails,
  verifyingSeasonThree,
  handleSeasonThreeVerification,
  verificationSuccess,
  isUserEligible,
  errorMessage,
  isLoading
}: PreLaunchHeaderProps) => {
  const isMobile = useMediaQuery(device.mobileL);
  const { universalAccount, connectionStatus } = usePushWalletContext();
  const isWalletConnected = connectionStatus === 'connected';


  // Use userId from userRewardsDetails, or fall back to userSeasonOneRewardsDetails
  const userId = userRewardsDetails?.userId || userSeasonOneRewardsDetails?.userId;

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
        ${!isLoading && `
              border: 1px solid rgba(171, 70, 248, 0.40);
              background: rgba(0, 0, 0, 0.10);
              background-blend-mode: plus-lighter;
              box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
              backdrop-filter: blur(10px);
            `}
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

          {errorMessage && (<Box
            css={css`
            margin-bottom: 24px;
            `}>
            <Alert variant="error" heading={errorMessage} />
          </Box>)}

          {!verificationSuccess &&
            (<Box
              display="flex"
              flexDirection={{initial: "row", tb: "column"}}
              width="100%"
              gap="spacing-md">
                <Box
                  display="flex"
                  flexDirection={{initial: "column", tb: "column"}}
                  alignItems="flex-start"
                  width="100%"
                  padding="spacing-sm spacing-md"
                  css={css`
                    border-radius: var(--radius-md, 24px);
                    border: ${isWalletConnected ? '1px solid #FFF' : '2px solid #D548EC;'};
                    background: rgba(255, 255, 255, 0.40);
                    box-sizing: border-box;
                  `}
                >

                  <Box
                    display="flex"
                    flexDirection={{initial: "row", tb: "column"}}
                    gap="spacing-xs"
                    alignItems="center"
                  >
                    <Box
                      display="flex"
                      flexDirection={{initial: "column", tb: "column"}}
                      alignItems="flex-start"
                    >
                      {!isWalletConnected && <Box>
                        <Text variant="bes-bold" color="#C742DD">STEP 1</Text>
                      </Box>}

                      <Text variant="h4-semibold" color="#17181B">
                        Connect with an account used during Season 1 or 2
                      </Text>
                    </Box>


              {universalAccount && connectionStatus == "connected" ? (
                <Skeleton
                  isLoading={isLoading}
                >
                  {isUserEligible ? (
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap="spacing-xxs"
                      padding="spacing-xs spacing-md"
                    >
                      <SealCheckFilled color="#00A47F" size={16} />
                      <Text
                        color="#00A47F"
                        css={css`
                          white-space: nowrap;
                          leading-trim: both;
                          font-size: 14px;
                          font-style: normal;
                          font-weight: 600;
                          line-height: 16px;
                        `}
                      >
                        Account Verified
                      </Text>
                    </Box>
                  ) : (
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      gap="spacing-xxs"
                      padding="spacing-xs spacing-md"
                    >
                      <CrossFilled color="#E53935" size={16} />
                      <Text
                        color="#E53935"
                        css={css`
                          white-space: nowrap;
                          leading-trim: both;
                          font-size: 14px;
                          font-style: normal;
                          font-weight: 600;
                          line-height: 16px;
                        `}
                      >
                        Not Eligible
                      </Text>
                    </Box>
                  )}
                </Skeleton>
              ) : (
                <Box>
                  <PushUniversalAccountButton />
                </Box>
              )}
              </Box>
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
                <Box
                  display="flex"
                  flexDirection={{initial: "column", tb: "column"}}
                  alignItems="flex-start"
                >
                  {!isWalletConnected && <Box>
                    <Text variant="bes-bold" color="#C742DD">STEP 2</Text>
                  </Box>}
                  <RewardsActivityTitle activityTitle="Join [Push Chain Discord](https://discord.com/invite/pushchain) to apply for eligibility" variant="h4-semibold" isLoading={false} color="#17181B"  />
                  </Box>
                <Skeleton isLoading={isLoading}>
                  <Button
                    variant="tertiary"
                    size="small"
                    onClick={() => {
                      if (userId && isUserEligible) {
                        handleSeasonThreeVerification(userId);
                      }
                    }}
                    disabled={verifyingSeasonThree || !isUserEligible}
                    css={css`
                      color: #fff !important;
                      `}
                  >
                    {verifyingSeasonThree ? "Verifying..." : "Verify Discord"}
                  </Button>
                </Skeleton>
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
