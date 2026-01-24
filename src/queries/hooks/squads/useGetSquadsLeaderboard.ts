import { useInfiniteQuery } from "@tanstack/react-query";
import { squadsLeaderboard } from "../../queryKeys";
import { getSquadsLeaderboard } from "../../services";
import { SquadsLeaderboardParams, SquadsLeaderboardResponse } from "../../types";

export const useGetSquadsLeaderboard = ({
  order,
  pageSize,
}: SquadsLeaderboardParams) =>
  useInfiniteQuery<SquadsLeaderboardResponse>({
    queryKey: [squadsLeaderboard],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getSquadsLeaderboard({
        order,
        pageSize,
        pageNumber: pageParam as number,
      }),
    getNextPageParam: ({ page, total, pageSize }) => {
      if (pageSize * page >= total) {
        return null;
      }
      return page + 1;
    },
  });
