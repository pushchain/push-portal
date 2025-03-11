import { walletToPCAIP10 } from "../../../helpers/web3helper";
import {
  useGetRewardsActivities,
  useGetRewardsActivity,
  useGetUserRewardsDetails,
} from "../../../queries";

export const useFilteredActivities = (
  account: string,
  activityIndexes: string[],
  filterType: "includes" | "startsWith" = "includes", // Default is "includes"
) => {
  const caip10WalletAddress = walletToPCAIP10(account);

  const { data: allActivities, isLoading: isLoadingActivities } =
    useGetRewardsActivities();
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress,
  });

  const filteredActivities =
    allActivities?.activities?.filter((activity) => {
      if (filterType === "includes") {
        return (
          activityIndexes.includes(activity.index) &&
          activity?.status === "ENABLED"
        );
      } else if (filterType === "startsWith") {
        return (
          activityIndexes.some((index) => activity.index.startsWith(index)) &&
          activity?.status === "ENABLED"
        );
      }
      return false;
    }) || [];

  const activityTypes = filteredActivities.map(
    (activity) => activity.activityType,
  );
  const {
    data: userActivity,
    isLoading: isUserActivityLoading,
    refetch,
  } = useGetRewardsActivity(
    { userId: userDetails?.userId, activityTypes },
    { enabled: !!userDetails?.userId },
  );

  return {
    filteredActivities,
    userDetails,
    isLoadingActivities,
    isUserActivityLoading,
    userActivity,
    refetch,
  };
};
