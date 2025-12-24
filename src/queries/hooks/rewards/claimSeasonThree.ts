import { useMutation } from "@tanstack/react-query";
import { seasonThree } from "../../queryKeys";
import { claimSeasonThree } from "../../services";

export const useClaimSeasonThree = () =>
  useMutation({
    mutationKey: [seasonThree],
    mutationFn: claimSeasonThree,
  });
