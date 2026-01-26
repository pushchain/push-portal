import { useQuery } from "@tanstack/react-query";
import { spinStatus } from "../../queryKeys";
import { getSpinStatus } from "../../services";

export const useGetSpinStatus = () => {
  return useQuery({
    queryKey: [spinStatus],
    queryFn: () => getSpinStatus(),
    retry: false,
  });
};
