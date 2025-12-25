import { Box, Text } from '../../../blocks';

const DailyCheckInCard = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const checkedDays = [true, true, false, false, false, false, false];

  return (
    <Box
      background="linear-gradient(135deg, #1F2937 0%, #111827 100%)"
      borderRadius="16px"
      padding="spacing-lg"
      border="1px solid rgba(255, 255, 255, 0.1)"
    >
      <Box alignItems="center" justifyContent="space-between" marginBottom="spacing-md">
        <Box>
          <Text size="18px" fontWeight="600" color="white">
            Daily Check-In
          </Text>
          <Text size="12px" color="rgba(255, 255, 255, 0.6)">
            2 day streak 🔥
          </Text>
        </Box>
        <Box
          background="rgba(34, 197, 94, 0.2)"
          borderRadius="8px"
          padding="6px 12px"
        >
          <Text size="12px" fontWeight="600" color="#22C55E">
            +5 XP
          </Text>
        </Box>
      </Box>

      <Box gap="spacing-xs" justifyContent="space-between">
        {days.map((day, index) => (
          <Box key={day} textAlign="center">
            <Text
              size="11px"
              color="rgba(255, 255, 255, 0.5)"
              marginBottom="spacing-xxs"
            >
              {day}
            </Text>
            <Box
              width="40px"
              height="40px"
              borderRadius="8px"
              background={
                checkedDays[index]
                  ? 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)'
                  : 'rgba(255, 255, 255, 0.05)'
              }
              border={
                checkedDays[index]
                  ? 'none'
                  : '1px solid rgba(255, 255, 255, 0.1)'
              }
              display="Box"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              _hover={{
                background: checkedDays[index]
                  ? 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)'
                  : 'rgba(255, 255, 255, 0.08)',
              }}
            >
              {checkedDays[index] && (
                <Text size="18px">✓</Text>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        marginTop="spacing-md"
        padding="spacing-sm"
        background="rgba(34, 197, 94, 0.1)"
        borderRadius="8px"
        border="1px solid rgba(34, 197, 94, 0.2)"
      >
        <Text size="12px" color="#22C55E" textAlign="center">
          Check in tomorrow to keep your streak! 🎯
        </Text>
      </Box>
    </Box>
  );
};

export default DailyCheckInCard;
