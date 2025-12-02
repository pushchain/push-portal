import HeroBannerCards from './HeroBannerCards';
import UserLevelCard from './UserLevelCard';
import DailyCheckInCard from './DailyCheckInCard';
import ActivityStatsCards from './ActivityStatsCards';
import BossQuestsSection from './BossQuestsSection';
import { Box } from '../../../src/blocks';

const RewardsActivities = () => {
  return (
    <Box display="flex" flexDirection="column" gap="spacing-xl">
      <HeroBannerCards />

      {/*<Box gap="spacing-md" flexWrap="wrap">
        <Box flex="1" minWidth="280px">
          <UserLevelCard />
        </Box>
        <Box flex="1" minWidth="320px">
          <DailyCheckInCard />
        </Box>
      </Box>

       />*/}

      <ActivityStatsCards />

      <BossQuestsSection />
    </Box>
  );
};

export default RewardsActivities;
