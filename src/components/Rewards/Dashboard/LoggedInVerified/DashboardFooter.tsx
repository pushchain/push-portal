import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Text, ArrowDown } from '../../../../blocks';

export const DashboardFooter: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="spacing-xxxs"
      css={css`
        z-index: 0;
      `}
    >
      <Text variant="bs-regular" color="text-primary">
        Explore Season 3
      </Text>
      <ArrowDown size={20} color="white" />
    </Box>
  );
};
