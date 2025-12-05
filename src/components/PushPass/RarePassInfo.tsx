import { css } from 'styled-components';
import { Box, Text } from '../../blocks';

const RarePassInfo = () => {
  return (
    <Box
      gap="spacing-xs"
      alignSelf="stretch"
      css={css`
        display: flex;
        align-items: center;
        position: relative;
      `}
    >
      <Box
        width="36px"
        height="47px"
        borderRadius="radius-sm"
        css={css`
          position: relative;
          background: linear-gradient(180deg, rgba(210, 103, 252, 1) 0%, rgba(137, 111, 255, 1) 48%, rgba(113, 240, 177, 1) 94%);
        `}
      >
        <Box
          width="30px"
          height="41px"
          borderRadius="radius-xs"
          backgroundColor="surface-primary"
          css={css`
            position: absolute;
            top: 3px;
            left: 3px;
          `}
        />

        <Box
          width="30px"
          height="39px"
          borderRadius="radius-xxs"
          css={css`
            position: absolute;
            top: 6px;
            left: 3px;
            background: linear-gradient(180deg, rgba(210, 103, 252, 1) 0%, rgba(137, 111, 255, 1) 48%, rgba(113, 240, 177, 1) 94%);
          `}
        />

        <Box
          width="19px"
          height="23px"
          css={css`
            position: absolute;
            top: 24px;
            left: 8px;
            background: linear-gradient(180deg, rgba(169, 255, 238, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
          `}
        />

        <Box
          css={css`
            position: absolute;
            width: 52.78%;
            height: 40.43%;
            top: 29.79%;
            left: 22.22%;
          `}
        >
          <img src="" alt="Pass Icon" style={{ width: '100%', height: '100%' }} />
        </Box>
      </Box>

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
          alignSelf="stretch"
          css={css`
            display: flex;
            align-items: center;
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
            Rare Pass
          </Text>
        </Box>

        <Text
          variant="bm-regular"
          color="text-secondary"
          css={css`
            align-self: stretch;
          `}
        >
          Collect and open as many passes as possible before the burn event. More Rare Pass = Higher Chance to score a Shiny
        </Text>
      </Box>
    </Box>
  );
};

export default RarePassInfo;
