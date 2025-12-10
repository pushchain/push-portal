import { FC } from 'react';
import { css } from 'styled-components';
import { Box } from '../../../blocks';
import { StatsCards } from './LoggedInVerified/StatsCards';
import { ReferralCard } from './LoggedInVerified/ReferralCard';
import { RarePassSection } from './LoggedInVerified/RarePassSection';
import { DashboardHeader } from './LoggedInVerified/DashboardHeader';
import { DashboardFooter } from './LoggedInVerified/DashboardFooter';
import { device } from '../../../config/globals';

export const RenderLoggedInVerifiedState: FC = () => {
  return (
    <Box
      width="100%"
      borderRadius="radius-lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="spacing-md"
      gap="spacing-md"
      position="relative"
      css={css`
        background: rgba(0, 0, 0, 0.1);
        box-shadow:
          2.8px -8px 12px 0 rgba(255, 255, 255, 0.15) inset,
          1.9px 1.7px 6px 0 rgba(255, 255, 255, 0.15) inset;
        backdrop-filter: blur(6px);
        isolation: isolate;
        border: 1px solid rgba(171, 70, 248, 0.40);
        box-sizing: border-box;
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-lg"
        width="100%"
        css={css`
          z-index: 1;
        `}
      >
        <DashboardHeader />

        <Box
          display="flex"
          alignItems="flex-start"
          gap="spacing-md"
          width="100%"
          flexDirection={{ initial: 'row', tb: 'column' }}
          css={css`
            min-height: 420px;
            max-height: 420px;
            flex: 1;

            @media ${device.tablet} {
              height: auto;
              min-height: initial;
              max-height: initial;
            }
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="spacing-md"
            position="relative"
            height="-webkit-fill-available"
            width="100%"
            css={css`
              flex: 1;
            `}
          >
            <StatsCards />
            <ReferralCard />
          </Box>

          <Box
            height="-webkit-fill-available"
            css={css`
              width: 416px;

              @media ${device.tablet} {
                  width: 100%;
              }
            `}
          >
            <RarePassSection />
          </Box>
        </Box>
      </Box>

      <DashboardFooter />
    </Box>
  );
};
