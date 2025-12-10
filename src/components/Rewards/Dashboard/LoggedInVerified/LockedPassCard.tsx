import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Lock, Text } from '../../../../blocks';
import { device } from '../../../../config/globals';

type LockedPassCardProps = {
  message: string;
};

export const LockedPassCard: FC<LockedPassCardProps> = ({ message }) => {
  return (
    <Box
      borderRadius="radius-xs"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="spacing-sm"
      css={css`
        flex: 1;
        width: 100%;
        height: 276px;
        background: url('/static/assets/website/pushpass/openpasslocked.webp') center center/cover no-repeat;
        background-position: center;
        background-size: 80%;
        box-sizing: border-box;

        @media ${device.tablet} {
            height: 350px;
        }
      `}
    >
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="spacing-xxs" height="100%" width="100%">
        <Box width="32px" height="32px">
          <Lock size={32} color="icon-primary" />
        </Box>
        <Text
          variant="bs-bold"
          color="text-primary"
          textAlign="center"
          css={css`
            text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
          `}
        >
          {message}
        </Text>
      </Box>
    </Box>
  );
};
