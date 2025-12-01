import { css } from 'styled-components';
import { Box, Text } from '../../blocks';

const ActivityStatsCards = () => {
  const activities = [
    {
      title: 'Power Donut 🍩',
      description: 'Complete daily tasks to earn bonus points',
      gradient: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)',
      stats: [
        { label: 'Day 1 progress', value: 'EXP +5K' },
        { label: 'Day 2 progress', value: 'EXP +5K' },
        { label: 'Day 3 Completed', value: 'EXP +5K' },
        { label: 'Check out every 24 hrs', value: 'EXP +5K' },
        { label: 'Create your 1st profile quest', value: 'EXP +5K' },
      ],
    },
    {
      title: 'XP Mastery 🏆',
      description: 'Master challenges and boost your experience',
      gradient: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
      stats: [
        { label: 'Day 1 momentum run', value: 'EXP +5K' },
        { label: 'Day 2 momentum run', value: 'EXP +5K' },
        { label: 'Level up once boost', value: 'EXP +5K' },
        { label: 'Have a transaction', value: 'EXP +5K' },
        { label: 'Set up 1st direct account', value: 'EXP +5K' },
      ],
    },
  ];

  return (
    <Box gap="spacing-md">
      {activities.map((activity, index) => (
        <Box
          key={index}
          minWidth="320px"
          borderRadius='radius-md'
          overflow="hidden"
        >
          <Box padding="spacing-lg"
            css={css`
                background: {activity.background};
              `}>
            <Text variant='h5-regular' color="white">
              {activity.title}
            </Text>
            <Text variant='h5-regular' color="rgba(255, 255, 255, 0.9)">
              {activity.description}
            </Text>
          </Box>

          <Box
            padding="spacing-md"
            css={css`
              border: 1px solid rgba(255, 255, 255, 0.1);
              background: linear-gradient(135deg, #1F2937 0%, #111827 100%)
              border-top: none
              `
            }
          >
            {activity.stats.map((stat, statIndex) => (
              <Box
                key={statIndex}
                justifyContent="space-between"
                alignItems="center"
                padding="spacing-sm"
                borderBottom={
                  statIndex < activity.stats.length - 1
                    ? '1px solid rgba(255, 255, 255, 0.05)'
                    : 'none'
                }
              >
                <Text variant='h5-regular' color="rgba(255, 255, 255, 0.8)">
                  {stat.label}
                </Text>
                <Text variant='h5-regular' color="white">
                  {stat.value}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ActivityStatsCards;
