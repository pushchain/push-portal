import { useQuery } from "@tanstack/react-query";
import { UserRewardsDetailParams } from "../../types";
import { seasonOneUserDetails } from "../../queryKeys";
import { getSeasonOneUserDetails } from "../../services";

const GuestModeWalletAddress =
  "eip155:0x0000000000000000000000000000000000000001";

export const useGetSeasonOneUserDetails = (options?: UserRewardsDetailParams) => {
  const isInvalidAddress =
    !options?.caip10WalletAddress ||
    options.caip10WalletAddress === GuestModeWalletAddress ||
    options.caip10WalletAddress.includes("undefined");

  return useQuery({
    queryKey: isInvalidAddress
      ? undefined
      : [seasonOneUserDetails, options.caip10WalletAddress],
    queryFn: () => getSeasonOneUserDetails(options!),
    retry: false,
    enabled: !isInvalidAddress,
  });
};
