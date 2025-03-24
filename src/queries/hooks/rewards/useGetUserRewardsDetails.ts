import { useQuery } from "@tanstack/react-query";
// import { GuestModeWalletAddress } from 'common';
import { UserRewardsDetailParams } from "../../types";
import { userRewardsDetails } from "../../queryKeys";
import { getUserRewardsDetail } from "../../services";

const GuestModeWalletAddress =
  "eip155:0x0000000000000000000000000000000000000001";

export const useGetUserRewardsDetails = (options?: UserRewardsDetailParams) => {
  const isInvalidAddress =
    !options?.caip10WalletAddress ||
    options.caip10WalletAddress === GuestModeWalletAddress ||
    options.caip10WalletAddress.includes("undefined");

  return useQuery({
    queryKey: isInvalidAddress
      ? undefined // Prevents query execution
      : [userRewardsDetails, options.caip10WalletAddress],
    queryFn: () => getUserRewardsDetail(options!),
    retry: false,
    enabled: !isInvalidAddress,
  });
};
