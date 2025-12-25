import { css } from "styled-components"
import { Box, Button, LevelUpIcon, Lock, ProgressBar, RewardsStarGradient, Text } from "../../blocks"

export const LevelUp = () => {
  return(
    <Box
      borderRadius="radius-md"
      padding="spacing-md"
      height={{ initial: '100%', tb: 'auto' }}
      minHeight={{ tb: '200px' }}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      width={{ initial: 'auto', tb: '100%' }}
      css={css`
            border: 1px solid rgba(171, 70, 248, 0.40);
            background: rgba(0, 0, 0, 0.10);
            background-blend-mode: plus-lighter;
            box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
            backdrop-filter: blur(10px);
            min-width: 296px;
            max-width: 296px;
            box-sizing: border-box;

            @media (max-width: 768px) {
              min-width: 100%;
              max-width: 100%;
            }
        `}>

          <Box display="flex" flexDirection="row" justifyContent="center" gap="spacing-xs" alignItems="center">
            <LevelUpIcon />
            <Text variant="h2-semibold">Lv. 0</Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap="spacing-xs"
            width="100%"
            css={css`
              box-sizing: border-box;
            `}
          >
            <Text variant="bs-semibold" textAlign="center" css={css`
              color: rgba(255, 255, 255, 0.75);
              `}>
              Earn 140 XP to level up
            </Text>

            <ProgressBar
              progress={(30) || null}
              max={100}
              size="large"
              progressIcon={<RewardsStarGradient size={35} />}
            />
          </Box>


          <Button
            size="small"
            variant="tertiary"
            css={css`
              width: 100%;
              border: 1px solid var(--stroke-tertiary);
              background: none;
            `}
          >
            <Box display="inline-flex" alignItems="center" justifyContent="center" gap="spacing-xxxs">
              <Lock size={24} color="icon-tertiary" />
            <Text color="text-tertiary"
                css={css`
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 16px;
                    white-space: nowrap;
                `}>
                Locked
              </Text>
            </Box>
          </Button>


    </Box>
  )
}
