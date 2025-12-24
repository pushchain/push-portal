import { css } from "styled-components"
import { Box, Button, GlowStreaks, LockFilled, Text } from "../../blocks"
import { RewardsActivityIcon } from "../Rewards/RewardsActivity/RewardsActivityIcon"
import { device } from "../../config/globals"

export const PreLaunch = () => {
  return(
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      css={css`
        z-index: 9;
      `}
    >

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
        /*min-height: 333px;
        max-height: 333px;*/
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
                left: 0px;
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
          <Text variant="h1-bold" css={css`
                background: linear-gradient(180deg, #000 43.49%, #7D238C 90.32%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            `}>
            Apply for Season 3 <br />
            Pre-Launch Access
          </Text>
          <Text variant="h5-regular" color="#000000">
            Current entries open to Season 1 or 2 participants only
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection={{initial: "row", tb: 'column'}}
          width="100%"
          gap="spacing-md"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            padding="spacing-sm spacing-md"
              css={css`
                border-radius: var(--radius-md, 24px);
                border: 1px solid #FFF;
                background: rgba(255, 255, 255, 0.40);
                box-sizing: border-box;
            `}>
              <Text
                variant="h4-semibold"
                color="#17181B"
                css={css`
                  @media ${device.tablet} {
                      text-align: center;
                  }
                `}
              >Connect with an account used during Season 1 or 2</Text>
          </Box>

          <Box
            display="flex"
            flexDirection={{initial: "row", ml: 'column'}}
            alignItems="center"
            width="100%"
            padding="spacing-sm spacing-md"
            gap="spacing-xs"
              css={css`
                border-radius: var(--radius-md, 24px);
                border: 1px solid #FFF;
                background: rgba(255, 255, 255, 0.40);
                box-sizing: border-box;
            `}>
              <RewardsActivityIcon type="follow_push_on_discord" />
              <Text variant="h4-semibold" color="#17181B"
                css={css`
                    @media ${device.mobileL} {
                        text-align: center;
                    }
                  `}
              >Join <Text as="span" variant="h4-semibold" color="#C742DD">Push Chain Discord</Text> to apply for eligibility</Text>

              <Button variant="tertiary">Verify Discord</Button>
          </Box>
        </Box>

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
          <Text variant="h5-regular">Connect your account and Verify Discord to have a chance to participate</Text>
      </Box>
    </Box>


      <Box
        display="flex"
        flexDirection="column"
        padding="spacing-md"
        width="100%"
        css={css`
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.40);
          background: linear-gradient(242deg, #FDFDDA 5.27%, #FEDFAA 90.2%);
          box-sizing: border-box;
          margin-top: 40px;
      `}
      >
        <Text variant="h3-semibold"
          css={css`
            background: linear-gradient(180deg, #000 77.68%, #85532C 89.06%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            `}>
            Starting your Season 3 journey early matters!
        </Text>
        <Text variant="bm-regular" color="rgba(0, 0, 0, 0.75)">Season 3 begins invite-only. Earn points, multipliers, and perpetual rewards before everyone else.</Text>
      </Box>


      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="spacing-xs"
        width="100%"
        css={css`
          margin: 60px 0px;

          &:before,
          &:after {
            content: "";
            flex: 1 1;
            border-bottom: 1px solid #4F4072;
            margin: auto;
          }
          &:before {
            margin-right: var(--spacing-sm);
          }
          &:after {
            margin-left: var(--spacing-sm);
          }
        `}
      >
        <LockFilled size={28} color="icon-tertiary" />
        <Text variant="h4-semibold" color="#FFFFFF" css={css`
            white-space: nowrap;
        `}>
          Season 3 Launches Soon
        </Text>
      </Box>
    </Box>
  )
}
