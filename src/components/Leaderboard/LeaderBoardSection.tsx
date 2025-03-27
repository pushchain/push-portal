// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LeaderboardListS1 } from "./LeaderboardListS1";
import { LeaderboardListS2 } from "./LeaderboardListS2";
import { Box, Text } from "../../blocks";
import { useQueryClient } from "@tanstack/react-query";
import {
  getRewardsLeaderboardS1,
  getRewardsLeaderboardS2,
  rewardsLeaderboardS1,
  rewardsLeaderboardS2,
} from "../../queries";

export type LeaderBoardSectionProps = Record<string, never>;

const LeaderBoardSection: FC<LeaderBoardSectionProps> = () => {
  const location = useLocation();
  const queryClient = useQueryClient();

  const [season, setSeason] = useState(() =>
    location.pathname.includes("s1") ? "S1" : "S2",
  );

  useEffect(() => {
    const newSeason = location.pathname.includes("s1") ? "S1" : "S2";
    setSeason(newSeason);

    if (newSeason === "S1") {
      queryClient.removeQueries({ queryKey: [rewardsLeaderboardS2] }); // Clear S2 cache
      queryClient.prefetchInfiniteQuery({
        queryKey: [rewardsLeaderboardS1],
        queryFn: getRewardsLeaderboardS1,
      });
    } else {
      queryClient.removeQueries({ queryKey: [rewardsLeaderboardS1] }); // Clear S1 cache
      queryClient.prefetchInfiniteQuery({
        queryKey: [rewardsLeaderboardS2],
        queryFn: getRewardsLeaderboardS2,
      });
    }
  }, [location.pathname, queryClient]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-sm"
      backgroundColor="surface-primary"
    >
      <Text
        variant="h4-bold"
        display={{ ml: "none", initial: "block" }}
        color="text-primary"
      >
        Leaderboard {season}
      </Text>
      <Text
        variant="h5-bold"
        display={{ ml: "block", initial: "none" }}
        color="text-primary"
      >
        Leaderboard {season}
      </Text>

      {season == "S1" ? <LeaderboardListS1 /> : <LeaderboardListS2 />}
    </Box>
  );
};

export { LeaderBoardSection };
