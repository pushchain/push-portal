import { useQuery } from "@tanstack/react-query";
import { getDailyCheckInDetails as getDailyCheckInDetailsKey } from "../../queryKeys";
import { getDailyCheckInDetails } from "../../services";
import { AuthHeaders } from "../../types";

export const useGetDailyCheckInDetails = (authHeaders?: AuthHeaders) => {
  const isValid = authHeaders?.message && authHeaders?.signature && authHeaders?.walletAddress;

  return useQuery({
    queryKey: [getDailyCheckInDetailsKey, authHeaders?.walletAddress],
    queryFn: () => getDailyCheckInDetails(authHeaders!),
    enabled: !!isValid,
  });
};
