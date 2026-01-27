import { useQuery } from "@tanstack/react-query";
import { getAllInvites as getAllInvitesKey } from "../../queryKeys";
import { getAllInvites } from "../../services";

export const useGetAllInvites = () => {
  return useQuery({
    queryKey: [getAllInvitesKey],
    queryFn: () => getAllInvites(),
  });
};
