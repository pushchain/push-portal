import { useQuery } from "@tanstack/react-query";
import { tweetPointsStatus } from "../../queryKeys";
import { getTweetPointsStatus } from "../../services";

export const useGetTweetPointsStatus = (
  { userId }: { userId: string },
  options: { enabled?: boolean },
) => {
  return useQuery({
    queryKey: [tweetPointsStatus, userId],
    queryFn: () => getTweetPointsStatus(userId),
    ...options,
  });
};
