import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text, ArrowRight } from '../../../../blocks';
import { LockedPassCard } from './LockedPassCard';

export const RarePassSection: FC = () => {
  return (
    <Box
      borderRadius="radius-md"
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-end"
      padding="spacing-md"
      height="-webkit-fill-available"
      css={css`
        flex: 1;
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);
      `}
    >
      <Box display="flex" flexDirection="column" alignItems="flex-start" gap="spacing-md" width="100%">
        <Box display="flex" alignItems="center" gap="spacing-md" width="100%" justifyContent="space-between" flexDirection='row'>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Text variant="h4-semibold" color="text-primary">
              Rare Pass
            </Text>
            <Text variant="bm-regular" color="text-tertiary">
              Claim and Burn for a chance to mint Legendary Shiny
            </Text>
          </Box>

          <Button
            variant="tertiary"
            size="small"
            trailingIcon={<ArrowRight size={20} />}
            css={css`
              background: none;
              padding: 0px;
              min-width: auto;
              color: #C742DD;
              `}
          >
            View All
          </Button>
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          gap="spacing-xxs"
          width="100%"
          flexDirection='row'
        >
          <LockedPassCard message="Unlocks at Lv. 15" />
          <LockedPassCard message="Spin to Unlock" />
        </Box>
      </Box>
    </Box>
  );
};
