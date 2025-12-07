import HeroBannerCards from './HeroBannerCards';
import ActivityStatsCards from './ActivityStatsCards';
import BossQuestsSection from './BossQuestsSection';
import { Box } from '../../../src/blocks';
import { DailyRewardsSection } from './DailyRewardsSection';
import { StreakDays } from './StreakDays';
import { css } from 'styled-components';
import { LevelUp } from './LevelUp';

const RewardsActivities = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-xl">
      <HeroBannerCards />

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="spacing-md"
        css={css`
        height: 230px;
        box-sizing: border-box;
        `}>
        <LevelUp />
        <StreakDays />
        <DailyRewardsSection />
      </Box>

      <ActivityStatsCards />

      <BossQuestsSection />
    </Box>
  );
};

export default RewardsActivities;
