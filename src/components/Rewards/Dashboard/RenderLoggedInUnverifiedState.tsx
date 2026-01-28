import { css } from "styled-components"
import { ArrowDown, Box, Button, CrossFilled, GlowStreaks, SealCheckFilled, Text } from "../../../blocks"
import { RewardsActivityIcon } from "../RewardsActivity/RewardsActivityIcon"
import { RewardsActivityTitle } from "../RewardsActivity/RewardsActivityTitle"
import { useAdvancedSybilCheck } from "../../../queries"
import { usePushWalletContext } from "@pushchain/ui-kit"
import { parseCAIP } from "../../../helpers/web3helper"
import { useState } from "react"

export const RenderLoggedInUnverifiedState = () => {

  const { universalAccount } = usePushWalletContext();
  const { chainId } = parseCAIP(universalAccount?.chain);
  const [isUserEligible, setIsUserEligible] = useState(null);

  const activityList = [
    {
      icon: "follow_push_on_twitter",
      activityTitle: "Follow [@PushChain](https://x.com/PushChain) on X",
      activityType: 'follow_push_on_twitter',
    },
    {
      icon: "follow_push_on_discord",
      activityTitle: "Join [Push Chain Discord](https://discord.com/invite/pushchain)",
      activityType: 'follow_push_on_discord',
    },
    {
      icon: "link_an_active_wallet",
      activityTitle: "Link an active wallet ($15+ balance & history) to verify",
      activityType: 'follow_push_on_discord',
    },
  ]

  const { mutate: advancedSybilCheck, isPending: isVerifying } = useAdvancedSybilCheck();

  const handleVerifyAccount = () => {

    advancedSybilCheck(
      {
        address: universalAccount?.address,
        chainId: parseInt(chainId)
      },
      {
        onSuccess: (response) => {
          console.log(response)
          setIsUserEligible(response?.eligible)
        },
        onError: (error: any) => {
          console.log("Error", error);
        },
      },
    );
  }


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
    height="auto"
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
      >
      </Box>

    <Box
        css={css`
          position: absolute;
          bottom: -50px;
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
            bottom: -50px;
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
              bottom: -50px;
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
    </Box>


    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      margin="spacing-lg spacing-none spacing-none spacing-none"
      gap="spacing-sm"
      css={css`
        z-index: 99999;
      `}
    >
      <Box
        display="flex"
        flexDirection={{ initial: "row", tb: "column" }}
        gap="spacing-sm"
        width="100%"
      >
        {activityList.slice(0, 2).map((item, index) => (
          <Box
            key={index}
            display="flex"
            flexDirection={{ initial: "row", tb: "column" }}
            alignItems="center"
            padding="spacing-sm spacing-md"
            gap="spacing-xs"
            css={css`
              flex: 1;
              border-radius: var(--radius-md, 24px);
              border: 1px solid #FFF;
              background: rgba(255, 255, 255, 0.40);
              box-sizing: border-box;
            `}
          >
            <RewardsActivityIcon type={item?.icon} />
            <RewardsActivityTitle
              activityTitle={item.activityTitle}
              variant="h4-semibold"
              isLoading={false}
              color="#17181B"
            />

            {/*<Skeleton isLoading={isLoading}>*/}
              <Button
                variant="tertiary"
                size="small"
                css={css`
                  color: #fff !important;
                  margin-left: auto
                  `}
              >
                Verify
              </Button>
            {/*</Skeleton>*/}
          </Box>


        ))}
      </Box>

      {activityList[2] && (
        <Box
          display="flex"
          flexDirection={{ initial: "row", tb: "column" }}
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
          <RewardsActivityIcon type={activityList[2]?.icon} />
          <Box
            margin="spacing-none spacing-none spacing-none spacing-xs">
            <RewardsActivityTitle
              activityTitle={activityList[2].activityTitle}
              variant="h4-semibold"
              isLoading={false}
              color="#17181B"
            />
            <Text variant="bm-regular" color="#313338">Linked wallet will be bound to Push account for Season 3</Text>
          </Box>

          {isUserEligible === null && (
            <Button
              variant="tertiary"
              size="small"
              disabled={isVerifying}
              css={css`
                color: #fff !important;
                margin-left: auto
                `}
              onClick={handleVerifyAccount}
            >
              {isVerifying ? 'Verifying...' : 'Link Account to Verify'}
            </Button>
          )}

          {isUserEligible === true && (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="spacing-xxs"
              padding="spacing-xs spacing-md"
              css={css`
                margin-left: auto;
              `}
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
          )}

          {isUserEligible === false && (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="spacing-xxs"
              padding="spacing-xs spacing-md"
              css={css`
                margin-left: auto;
              `}
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

        </Box>
      )}
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
        Complete verifications to unlock Season 3
      </Text>
      <ArrowDown size={20} color="white" />
      </Box>
  </Box>)
}
