import { useQuery } from "@tanstack/react-query";
import { spinStatus } from "../../queryKeys";
import { getSpinStatus } from "../../services";
import { AuthHeaders } from "../../types";

export const useGetSpinStatus = (authHeaders?: AuthHeaders) => {
  const isValid = authHeaders?.message && authHeaders?.signature && authHeaders?.walletAddress;

  return useQuery({
    queryKey: [spinStatus, authHeaders?.walletAddress],
    queryFn: () => getSpinStatus(authHeaders!),
    retry: false,
    enabled: !!isValid,
  });
};
