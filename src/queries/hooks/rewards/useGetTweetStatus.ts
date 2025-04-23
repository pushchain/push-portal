import { useQuery } from "@tanstack/react-query";
import { tweetStatus } from "../../queryKeys";
import { getTweetStatus } from "../../services";

export const useGetTweetStatus = (
  { userId }: { userId: string },
  options: { enabled?: boolean },
) => {
  return useQuery({
    queryKey: [tweetStatus, userId],
    queryFn: () => getTweetStatus(userId),
    enabled: !!userId,
    ...options,
  });
};
