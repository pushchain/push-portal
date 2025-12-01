import { Box, Text } from '../../blocks';

const BossQuestsSection = () => {
  const quests = [
    {
      title: 'Create contests and big victories right to a',
      reward: 'WINNER: #PRIZE $',
      xp: 'EXP +5K',
    },
    {
      title: 'Complete and Claim 10 App Quests',
      reward: 'WINNER: #PRIZE $',
      xp: 'EXP +5K',
    },
    {
      title: 'Obtain 3 Booster & Steal 3 NFTs Points',
      reward: 'WINNER: #PRIZE $',
      xp: 'EXP +5K',
    },
  ];

  return (
    <Box>
      <Box alignItems="center" gap="spacing-sm" marginBottom="spacing-lg">
        <Text size="24px">👑</Text>
        <Box>
          <Text size="22px" fontWeight="700" color="white">
            Boss Quests
          </Text>
          <Text size="14px" color="rgba(255, 255, 255, 0.6)">
            High-value quests reserved for the brave
          </Text>
        </Box>
      </Box>

      <Box gap="spacing-md" BoxWrap="wrap">
        {quests.map((quest, index) => (
          <Box
            key={index}
            Box="1"
            minWidth="280px"
            background="linear-gradient(135deg, #312E81 0%, #1E1B4B 100%)"
            borderRadius="16px"
            padding="spacing-lg"
            border="1px solid rgba(167, 139, 250, 0.2)"
            position="relative"
            overflow="hidden"
            _hover={{
              border: '1px solid rgba(167, 139, 250, 0.4)',
              transform: 'translateY(-2px)',
              transition: 'all 0.3s ease',
            }}
          >
            <Box
              position="absolute"
              top="-20px"
              right="-20px"
              width="100px"
              height="100px"
              background="radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)"
              borderRadius="50%"
            />

            <Text
              size="16px"
              fontWeight="600"
              color="white"
              marginBottom="spacing-md"
              lineHeight="1.4"
            >
              {quest.title}
            </Text>

            <Box
              justifyContent="space-between"
              alignItems="center"
              marginBottom="spacing-sm"
            >
              <Text size="14px" color="#A78BFA" fontWeight="600">
                {quest.reward}
              </Text>
              <Box
                background="rgba(167, 139, 250, 0.2)"
                borderRadius="6px"
                padding="4px 12px"
              >
                <Text size="12px" fontWeight="600" color="#A78BFA">
                  {quest.xp}
                </Text>
              </Box>
            </Box>

            <Box
              as="button"
              width="100%"
              background="linear-gradient(90deg, #A78BFA 0%, #7C3AED 100%)"
              borderRadius="8px"
              padding="12px"
              border="none"
              color="white"
              fontWeight="600"
              cursor="pointer"
              _hover={{
                background: 'linear-gradient(90deg, #9370DB 0%, #6D28D9 100%)',
              }}
            >
              Accept Quest
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BossQuestsSection;
