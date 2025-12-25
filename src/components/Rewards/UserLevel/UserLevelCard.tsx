import { Box, Text } from '../../../blocks';

const UserLevelCard = () => {
  return (
    <Box
      background="linear-gradient(135deg, #1F2937 0%, #111827 100%)"
      borderRadius="16px"
      padding="spacing-lg"
      border="1px solid rgba(255, 255, 255, 0.1)"
    >
      <Box alignItems="center" gap="spacing-md" marginBottom="spacing-md">
        <Box
          width="60px"
          height="60px"
          borderRadius="50%"
          background="linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)"
          display="Box"
          alignItems="center"
          justifyContent="center"
        >
          <Text size="24px">👤</Text>
        </Box>
        <Box>
          <Text size="24px" fontWeight="700" color="white">
            Lv. 0
          </Text>
          <Text size="14px" color="rgba(255, 255, 255, 0.6)">
            Novice Adventurer
          </Text>
        </Box>
      </Box>

      <Box
        background="rgba(255, 255, 255, 0.05)"
        borderRadius="12px"
        padding="spacing-sm"
        marginBottom="spacing-xs"
      >
        <Box justifyContent="space-between" marginBottom="spacing-xxs">
          <Text size="12px" color="rgba(255, 255, 255, 0.6)">
            XP Progress
          </Text>
          <Text size="12px" fontWeight="600" color="white">
            0 / 100 XP
          </Text>
        </Box>
        <Box
          height="8px"
          background="rgba(255, 255, 255, 0.1)"
          borderRadius="4px"
          overflow="hidden"
        >
          <Box
            height="100%"
            width="0%"
            background="linear-gradient(90deg, #A78BFA 0%, #7C3AED 100%)"
            transition="width 0.3s ease"
          />
        </Box>
      </Box>

      <Text size="11px" color="rgba(255, 255, 255, 0.5)">
        Complete quests to level up and unlock rewards
      </Text>
    </Box>
  );
};

export default UserLevelCard;
