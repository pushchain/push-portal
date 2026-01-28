import { useQuery } from "@tanstack/react-query";
import { squadsList } from "../../queryKeys";
import { getSquadsList } from "../../services";

export const useGetSquadsList = () => {
  return useQuery({
    queryKey: [squadsList],
    queryFn: () => getSquadsList(),
    retry: false,
  });
};
