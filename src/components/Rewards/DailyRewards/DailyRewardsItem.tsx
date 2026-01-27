import React, { FC, useMemo } from 'react';
import { css } from 'styled-components';
import {
  Box,
  CheckCircle,
  Skeleton,
  Text,
  RewardsCoin,
  TripleRewardsCoin,
  MultipleRewardsCoin,
} from '../../../blocks';
import { DailyCheckInDetailsResponse } from '../../../queries';

export type DailyRewardsItemProps = {
  dailyCheckInDetails?: DailyCheckInDetailsResponse;
  isLoading?: boolean;
  activity: { id: number; text: string };
};

const DailyRewardsItem: FC<DailyRewardsItemProps> = ({
  dailyCheckInDetails,
  isLoading,
  activity,
}) => {
  const currentStreak = dailyCheckInDetails?.streak || 0;
  const canCheckIn = dailyCheckInDetails?.canCheckInToday || false;
  const dayNumber = activity.id;

  const status = useMemo(() => {
    if (dayNumber <= currentStreak) return 'completed';
    if (dayNumber === currentStreak + 1 && canCheckIn) return 'active';
    return 'locked';
  }, [dayNumber, currentStreak, canCheckIn]);

  const borderColor = status === 'active' ? '1px solid #D548EC' : 'none';

  const textColor = useMemo(() => {
    switch (status) {
      case 'completed':
        return 'rgba(255, 255, 255, 0.50)';
      case 'active':
        return '#FFFFFF';
      case 'locked':
      default:
        return 'rgba(255, 255, 255, 0.75)';
    }
  }, [status]);

  const getIconComponent = (day: number) => {
    if (day < 3) return <RewardsCoin />;
    if (day < 6) return <TripleRewardsCoin />;
    return <MultipleRewardsCoin />;
  };

  return (
    <Skeleton isLoading={isLoading} borderRadius="radius-md">
      <Box
        padding="spacing-sm spacing-md"
        borderRadius="radius-sm"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        className="item"
        css={css`
          gap: 11px;
          border: ${borderColor};
        `}
      >
        <Text
          variant="bm-regular"
          className="day-text"
          css={css`
            white-space: nowrap;
            color: ${textColor};
          `}
        >
          {activity.text}
        </Text>

        {status === 'completed' ? (
          <CheckCircle color="#C742DD" />
        ) : (
          <Box className="inner-item">{getIconComponent(dayNumber)}</Box>
        )}
      </Box>
    </Skeleton>
  );
};

export { DailyRewardsItem };
