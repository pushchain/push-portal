import { useMutation } from "@tanstack/react-query";
import { claimDailyRewardsSeasonThree } from "../../services";
import { claimDailyRewardsNewSeasonThree } from "../../queryKeys";

export const useClaimDailyRewardsSeasonThree = () => {
  return useMutation({
    mutationKey: [claimDailyRewardsNewSeasonThree],
    mutationFn: claimDailyRewardsSeasonThree,
  });
};
