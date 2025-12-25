import { css } from 'styled-components';
import { Box, Text } from '../../../blocks';

const CollectRaresCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ initial: '280px', tb: '100%' }}
      height={{ initial: '374px', tb: 'auto' }}
      minHeight={{ tb: '300px' }}
      padding="spacing-md"
      borderRadius="radius-xl"
      border="border-xs solid stroke-tertiary"
      position="relative"
      overflow="hidden"
      css={css`
        background: linear-gradient(241deg, rgba(253, 253, 218, 1) 0%, rgba(254, 223, 170, 1) 100%);
        box-sizing: border-box;
      `}
    >
      <Box
        position="absolute"
        width="325px"
        height="325px"
        borderRadius="radius-round"
        css={css`
          background: #f0c968;
          filter: blur(50px);
          top: 127px;
          left: 103px;
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
        <Box display="flex" flexDirection="column" justifyContent="flex-end" gap="spacing-xs" flex="1">
          <Box display="flex" flexDirection="column" justifyContent="flex-end" gap="spacing-xxs">
            <Text
              variant="h3-semibold"
              css={css`
                background: linear-gradient(180deg, rgba(0, 0, 0, 1) 86%, rgba(133, 83, 44, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
              `}
            >
              Collect Rares, Burn &amp; Mint Legendary Shiny
            </Text>

            <Text
              variant="bm-regular"
              css={css`
                color: rgba(0, 0, 0, 0.75);
              `}
            >
              Collect rare passes by lvling, spins, and quests
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CollectRaresCard;
