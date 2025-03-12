export const calculateLevelFromXP = (
  xp: number,
  xpForNextLevel: Record<number, number>,
) => {
  let cumulativeXP = 0;
  let currentLevel = 1;
  let currentLevelXP = 100; // Cumulative XP required to reach the current level
  let nextLevelXP = 0; // Cumulative XP required to reach the next level

  // Total XP needed for Level 50
  const totalXPForMaxLevel = Object.values(xpForNextLevel).reduce(
    (a, b) => a + b,
    0,
  );

  for (const level of Object.keys(xpForNextLevel)
    .map(Number)
    .sort((a, b) => a - b)) {
    cumulativeXP += xpForNextLevel[level];

    if (xp < cumulativeXP) {
      nextLevelXP = cumulativeXP;
      break;
    }

    currentLevel = level;
    currentLevelXP = cumulativeXP; // Store cumulative XP for the current level
  }

  // ✅ Total progress toward Level 50
  const progressToMaxLevel = parseFloat(
    ((xp / totalXPForMaxLevel) * 100).toFixed(1),
  );

  return {
    currentLevel,
    currentLevelXP, // Cumulative XP needed to reach the current level
    nextLevelXP, // Cumulative XP needed for the next level
    progressToMaxLevel,
  };
};
