import { css } from "styled-components"
import { Box, Text } from "../../blocks"
import StreakBg from "../../../static/assets/website/rewards/streak-bg.webp"

export const StreakDays = () => {
  return(
    <Box
      borderRadius="radius-md"
      padding="spacing-md"
      height={{ initial: '100%', tb: 'auto' }}
      minHeight={{ tb: '200px' }}
      position="relative"
      overflow="hidden"
      width={{ initial: '188px', tb: '100%' }}
      css={css`
            border: 1px solid rgba(171, 70, 248, 0.40);
            background: rgba(0, 0, 0, 0.10);
            background-blend-mode: plus-lighter;
            box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
            backdrop-filter: blur(10px);
            box-sizing: border-box;
        `}>
        <Box
          css={css`
            position: absolute;
            bottom: 0;
            right: 0;
            width: 65%;
            height: 65%;
            background: url(${StreakBg}) no-repeat bottom right;
            background-size: contain;
            pointer-events: none;
            z-index: 0;
          `}
        />

        <Box
          css={css`
            position: relative;
            z-index: 1;
          `}
        >
          <Text variant="h1-bold">
            0
          </Text>

          <Text css={css`
            color: rgba(255, 255, 255, 0.75);
            font-size: 14.198px;
            font-style: normal;
            font-weight: 700;
            line-height: 17.353px;
            letter-spacing: 0.394px;
            `}>
              Streak <br /> Days
          </Text>
        </Box>
    </Box>
  )
}
