import { css } from 'styled-components';
import { Box, RarePassIcon, Text } from '../../../blocks';

const MyCollectionContent = () => {
  return (
    <Box
      width="100%"
      gap="spacing-md"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
    >

      <Box
        gap="spacing-xs"
        alignItems={{initial: "center", tb: "flex-start"}}
        css={css`
          display: flex;
          position: relative;
        `}
      >
        <RarePassIcon />


        <Box
          gap="spacing-none"
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            flex: 1;
          `}
        >
          <Box
            gap="spacing-xxxs"
            css={css`
              display: flex;
              align-items: flex-start;
              position: relative;
            `}
          >
            <Text
              variant="h3-semibold"
              css={css`
                text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(201, 104, 231, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                white-space: nowrap;
              `}
            >
              My Collection
            </Text>
          </Box>

          <Text
            variant="bm-regular"
            color="text-secondary"
          >
            Collect and open as many passes as possible before the burn event. More Rare Pass = Higher Chance to score a Shiny
          </Text>
        </Box>
      </Box>

      <Box
        width="100%"
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 169px;
        `}
      >
        <Text variant='bm-semibold' textAlign='center'
          css={css`
            color: rgba(255, 255, 255, 0.25);
            `
          }>
          You don’t have any open passes in your collection. <br />
          Play Spins, Level up or complete quests for a chance to win Rare Pass.
        </Text>
      </Box>


    </Box>
  );
};

export default MyCollectionContent;
