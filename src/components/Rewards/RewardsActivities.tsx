import HeroBannerCards from './HeroBanner/HeroBannerCards';
import ActivityStatsCards from './ActivityStats/ActivityStatsCards';
import BossQuestsSection from './BossQuests/BossQuestsSection';
import { Box } from '../../blocks';
import { DailyRewardsSection } from './DailyRewards/DailyRewardsSection';
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
