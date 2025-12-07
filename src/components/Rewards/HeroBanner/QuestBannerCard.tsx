import { css } from 'styled-components';
import { Box, Text } from '../../../blocks';

const QuestBannerCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minWidth={{ initial: '280px', ml: '100%' }}
      height="374px"
      padding="spacing-md"
      borderRadius="radius-xl"
      border="border-xs solid stroke-tertiary"
      position="relative"
      overflow="hidden"
      css={css`
        background: linear-gradient(241deg, rgba(221, 222, 255, 1) 0%, rgba(181, 184, 255, 1) 100%);
        flex: 1;
      `}
    >
      <Box
        position="absolute"
        width="344px"
        height="344px"
        borderRadius="radius-round"
        css={css`
          background: #8385e5;
          filter: blur(50px);
          top: 110px;
          left: -103px;
        `}
      />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        gap="spacing-xs"
        position="relative"
        css={css`
          flex: 1;
          z-index: 1;
        `}
      >
        <Box display="flex" flexDirection="column" gap="spacing-xs">
          <Box display="flex" flexDirection="column" gap="spacing-xxs" maxWidth="390px">
            <Text
              variant="h3-semibold"
              css={css`
                background: linear-gradient(180deg, rgba(0, 0, 0, 1) 59%, rgba(48, 50, 178, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              `}
            >
              Crush quests. Claim XP, Points &amp; hard to get Rare Passes.
            </Text>

            <Text
              variant="bm-regular"
              css={css`
                color: rgba(0, 0, 0, 0.75);
                max-width: 298px;
              `}
            >
              Play and test featured Push Chain apps to level up and earn rewards.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestBannerCard;
