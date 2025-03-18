import { useMutation } from "@tanstack/react-query";
import { claimRewards } from "../../../queries/queryKeys";
import { claimRewardsActivity } from "../../../queries/services";

export const useClaimRewardsActivity = () =>
  useMutation({
    mutationKey: [claimRewards],
    mutationFn: claimRewardsActivity,
  });
