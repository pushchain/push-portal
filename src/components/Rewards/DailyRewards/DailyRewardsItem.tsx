/* eslint-disable @typescript-eslint/no-explicit-any */
// React and other libraries
import React, { FC, useMemo } from 'react';

// types
import { Activity } from '../../../queries';

// components
import {
  Box,
  CheckCircle,
  Skeleton,
  Text,
  RewardsCoin,
  TripleRewardsCoin,
  MultipleRewardsCoin,
} from '../../../blocks';
import { css } from 'styled-components';

export type DailyRewardsItemProps = {
  activity: Activity;
  activeDay: number;
  isLoading: boolean;
  isActivityDisabled: boolean;
};

const DailyRewardsItem: FC<DailyRewardsItemProps> = ({
  activity,
  activeDay,
  isLoading,
  isActivityDisabled,
}) => {
  const day = parseInt(activity?.activityTitle?.split('- Day')[1]);
  const isActive = day === activeDay && !isActivityDisabled;
  const isCompleted = activeDay <= day;

  // style variables
  const borderColor = useMemo(() => {
    return isActive
      ? '1px solid #D548EC' : 'none';
  }, [isActive]);

  const textColor = useMemo(() => {
    return isActive
      ? '#FFFFFF'
      : activeDay > day
        ? 'rgba(255, 255, 255, 0.5)'
        : day === 7 && isCompleted
          ? 'rgba(255, 255, 255, 0.75)'
          : 'rgba(255, 255, 255, 0.75)';
  }, [isActive, activeDay, day, isCompleted]);

  const getIconComponent = (day: number) => {
    if (day < 3) return <RewardsCoin />;
    if (day >= 3 && day < 6) return <TripleRewardsCoin />;
    return <MultipleRewardsCoin />;
  };

  return (
    <Skeleton isLoading={isLoading} borderRadius='radius-md'>
      <Box
        padding='spacing-sm spacing-md'
        borderRadius='radius-sm'
        display='flex'
        flexDirection='column'
        alignItems='center'
        className='item'
        css={css`
          gap: 11px;
          border: ${borderColor}
        `}
      >
        <Text
          variant='bm-regular'
          className='day-text'
          css={css`
              white-space: nowrap;
              color: ${textColor}
            `} >
          {activity?.activityTitle?.split('-')[1]}
        </Text>

        {isCompleted ? (
          <Box className='inner-item'>{getIconComponent(day)}</Box>
        ) : (
          <CheckCircle />
        )}
      </Box>
    </Skeleton>
  );
};

export { DailyRewardsItem };
