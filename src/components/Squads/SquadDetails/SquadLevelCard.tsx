import { css } from "styled-components"
import { Box, ProgressBar, RewardsStarGradient, Text } from "../../../blocks"

type SquadLevelCardProps = {
  squadName: string;
  level: number;
  xpToLevelUp: number;
  currentXp?: number;
}

export const SquadLevelCard = ({ squadName, level, xpToLevelUp, currentXp = 0 }: SquadLevelCardProps) => {
  const progressPercent = xpToLevelUp > 0 ? Math.min((currentXp / xpToLevelUp) * 100, 100) : 0;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="spacing-xxs"
      padding="spacing-md"
      borderRadius="radius-md"
      css={css`
        width: 100%;
        max-width: 313px;
        min-height: 140px;
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(171, 70, 248, 0.4);
        box-shadow: inset 1.86px 1.73px 6px rgba(255, 255, 255, 0.15),
                    inset 2.79px -8px 12px rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        overflow: hidden;
        box-sizing: border-box;
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-xs"
        width="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="spacing-xxs"
        >
          <Text
            variant="h4-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            {squadName}
          </Text>
          <Text variant="h3-semibold" color="text-primary">
            Lv. {level}
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="spacing-xs"
          width="100%"
        >
          <Text
            variant="bs-semibold"
            css={css`
              color: rgba(255, 255, 255, 0.75);
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            `}
          >
            Earn {xpToLevelUp.toLocaleString()} XP to level up
          </Text>

          <Box width="100%" height="8px" margin="spacing-sm spacing-none">
            <ProgressBar
              progress={(20) || null}
              max={100}
              size="large"
              progressIcon={<RewardsStarGradient size={35} />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
