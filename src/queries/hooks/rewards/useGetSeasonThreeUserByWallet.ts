import { useQuery } from "@tanstack/react-query";
import { SeasonThreeUserByWalletParams } from "../../types";
import { seasonThreeUserByWallet } from "../../queryKeys";
import { getSeasonThreeUserByWallet } from "../../services";

export const useGetSeasonThreeUserByWallet = (options?: SeasonThreeUserByWalletParams) => {
  const isInvalidAddress =
    !options?.walletAddress ||
    options.walletAddress.includes("undefined");

  return useQuery({
    queryKey: isInvalidAddress
      ? undefined
      : [seasonThreeUserByWallet, options.walletAddress],
    queryFn: () => getSeasonThreeUserByWallet(options!),
    retry: false,
    enabled: !isInvalidAddress,
  });
};
