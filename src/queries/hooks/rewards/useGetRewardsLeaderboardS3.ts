import { useInfiniteQuery } from '@tanstack/react-query';

import { rewardsLeaderboardS3 } from '../../queryKeys';
import { getRewardsLeaderboardS3 } from '../../services';
import { LeaderboardModelledResponse, LeaderboardParams } from '../../types';

export const useGetRewardsLeaderboardS3 = ({
  order,
  pageSize,
}: LeaderboardParams) =>
  useInfiniteQuery<LeaderboardModelledResponse>({
    queryKey: [rewardsLeaderboardS3],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      getRewardsLeaderboardS3({
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
