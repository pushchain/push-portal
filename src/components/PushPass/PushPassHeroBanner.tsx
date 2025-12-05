import { css } from 'styled-components';
import { Box, Text } from '../../blocks';

const PushPassHeroBanner = () => {
  return (
    <Box
      width="100%"
      height="260px"
      gap="spacing-xs"
      padding="spacing-md"
      borderRadius="radius-md"
      border="border-xs solid stroke-tertiary"
      overflow="hidden"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
        background: linear-gradient(241deg, rgba(253, 253, 218, 1) 0%, rgba(254, 223, 170, 1) 100%);
        box-sizing: border-box;
      `}
    >
      <Box
        width="606px"
        height="606px"
        borderRadius="radius-round"
        css={css`
          position: absolute;
          top: 9px;
          left: -285px;
          background: #f0ca68;
          filter: blur(50px);
        `}
      />

      <Box
        gap="spacing-lg"
        css={css`
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        `}
      >
        <Box
          gap="spacing-xxs"
          css={css`
            display: inline-flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <Text
            variant="h1-bold"
            css={css`
              width: 756px;
              background: linear-gradient(180deg, rgba(0, 0, 0, 1) 30%, rgba(133, 83, 44, 1) 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              text-align: center;
              font-size: 40px;
              line-height: 48px;
            `}
          >
            Claim &amp; Burn Passes to score a Legendary Shiny
          </Text>

          <Text
            variant="bl-regular"
            css={css`
              width: 720px;
              color: #000000;
              text-align: center;
              font-size: 20px;
              line-height: 30px;
            `}
          >
            Be one of the lucky few to get Eternal Rewards* with a Legendary Shiny Pass
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PushPassHeroBanner;
