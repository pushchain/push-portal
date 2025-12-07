import { css } from 'styled-components';
import { Box, Button, Text } from '../../../blocks';

const SpinToWinCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ initial: '280px', ml: '100%' }}
      height="374px"
      padding="spacing-md"
      borderRadius="radius-xl"
      border="border-xs solid stroke-tertiary"
      position="relative"
      overflow="hidden"
      css={css`
        background: linear-gradient(241deg, rgba(253, 253, 218, 1) 28%, rgba(212, 255, 193, 1) 100%);
      `}
    >
      <Box
        position="absolute"
        width="325px"
        height="325px"
        borderRadius="radius-round"
        css={css`
          background: #72e9a6;
          filter: blur(50px);
          top: 127px;
          left: -103px;
        `}
      />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-xs"
        position="relative"
        css={css`
          flex: 1;
          z-index: 1;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="spacing-xs"
          width="100%"
          css={css`
            flex: 1;
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="spacing-xxs"
            width="100%"
          >
            <Text
              variant="h3-semibold"
              css={css`
                background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(48, 119, 36, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                text-align: center;
              `}
            >
              Spin to Win
            </Text>

            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              padding="spacing-xxs spacing-xs"
              backgroundColor="surface-primary"
              borderRadius="radius-xl"
            >
              <Text variant="bs-bold" color="text-on-dark-bg">
                1 FREE Spin/Day
              </Text>
            </Box>
          </Box>
        </Box>

        <Button
          size="medium"
          variant="primary"
          css={css`
            width: 100%;
          `}
        >
          Spin Now
        </Button>
      </Box>
    </Box>
  );
};

export default SpinToWinCard;
