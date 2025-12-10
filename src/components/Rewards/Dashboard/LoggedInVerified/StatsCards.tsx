import { FC } from 'react';
import { Box } from '../../../../blocks';
import { LevelCard } from './LevelCard';
import { PointsCard } from './PointsCard';
import { MultiplierCard } from './MultiplierCard';

export const StatsCards: FC = () => {
  return (
    <Box
      display="flex"
      alignItems="flex-end"
      gap="spacing-md"
      width="100%"
      flexDirection='row'
    >
      <LevelCard />
      <PointsCard />
      <MultiplierCard />
    </Box>
  );
};
