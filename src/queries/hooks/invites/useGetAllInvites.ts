import { useQuery } from "@tanstack/react-query";
import { getAllInvites as getAllInvitesKey } from "../../queryKeys";
import { getAllInvites } from "../../services";
import { AuthHeaders } from "../../types";

export const useGetAllInvites = (authHeaders?: AuthHeaders) => {
  const isValid = authHeaders?.message && authHeaders?.signature && authHeaders?.walletAddress;

  return useQuery({
    queryKey: [getAllInvitesKey, authHeaders?.walletAddress],
    queryFn: () => getAllInvites(authHeaders!),
    enabled: !!isValid,
  });
};
