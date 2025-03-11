import { walletToPCAIP10 } from "../../../helpers/web3helper";
import {
  useGetRewardsActivities,
  useGetRewardsActivity,
  useGetUserRewardsDetails,
} from "../../../queries";

export const useFilteredActivities = (
  account: string,
  activityIndexes: string[],
) => {
  const caip10WalletAddress = walletToPCAIP10(account);

  // Fetch all available activities
  const { data: allActivities, isLoading: isLoadingActivities } =
    useGetRewardsActivities();

  // Fetch user details
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress,
  });

  // Filter activities based on given indexes
  const filteredActivities =
    allActivities?.activities?.filter(
      (activity) =>
        activityIndexes.includes(activity.index) &&
        activity?.status === "ENABLED",
    ) || [];

  // Fetch user-specific activities
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
