import { useQuery } from "@tanstack/react-query";
import { UserEligibilityForPreLaunchParams } from "../../types";
import { eligibleForPreLaunch } from "../../queryKeys";
import { getUserEligibilityForPreLaunch } from "../../services";

const GuestModeWalletAddress =
  "eip155:0x0000000000000000000000000000000000000001";

export const useGetUserEligibilityForPreLaunch = (options?: UserEligibilityForPreLaunchParams) => {
  const isInvalidAddress =
    !options?.address ||
    options.address === GuestModeWalletAddress ||
    options.address.includes("undefined");

  return useQuery({
    queryKey: isInvalidAddress
      ? undefined
      : [eligibleForPreLaunch, options.address],
    queryFn: () => getUserEligibilityForPreLaunch(options!),
    retry: false,
    enabled: !isInvalidAddress,
  });
};
