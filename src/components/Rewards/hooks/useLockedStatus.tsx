// React and other libraries
import { useEffect } from "react";
import { usePushWalletContext } from "@pushchain/ui-kit";

// hooks
import {
  RewardActivityStatus,
  RewardActivityStatusResponse,
  useGetRewardActivityStatus,
  useGetUserRewardsDetails,
} from "../../../queries";

// helpers
import { walletToFullCAIP10 } from "../../../helpers/web3helper";
import { isUserNotFound } from "../utils/resolveError";

// types
import { useRewardsContext } from "../../../context/rewardsContext";

const useLockedStatus = () => {
  const { universalAccount } = usePushWalletContext();
  const account = universalAccount?.address as string;
  const isWalletConnected = Boolean(universalAccount?.address);
  const { setIsLocked } = useRewardsContext();

  const caip10WalletAddress = walletToFullCAIP10(
    account,
    universalAccount?.chain,
  );
  const {
    data: userDetails,
    status,
    error,
  } = useGetUserRewardsDetails({ caip10WalletAddress });

  const {
    data: sendRecentActivities,
    refetch: refetchRecentActivities,
    status: statusRecentActivities,
  } = useGetRewardActivityStatus(
    {
      userId: userDetails?.userId as string,
      activities: ["follow_push_on_discord", "follow_push_on_twitter"],
    },
    !!userDetails?.userId,
  );

  const getLockStatus = () => {
    if (!sendRecentActivities || Object.keys(sendRecentActivities).length === 0)
      return;

    const activities =
      sendRecentActivities?.activities as RewardActivityStatusResponse;
    const discordStatus =
      activities?.follow_push_on_discord as RewardActivityStatus;
    const twitterStatus =
      activities?.follow_push_on_twitter as RewardActivityStatus;

    if (
      discordStatus?.status === "COMPLETED" &&
      (twitterStatus?.status === "COMPLETED" ||
        twitterStatus?.status === "PENDING")
    ) {
      setIsLocked(false);
    } else {
      setIsLocked(true);
    }
  };

  useEffect(() => {
    if (isWalletConnected && userDetails?.userId) {
      getLockStatus();
    }
    if (status === "error" && isWalletConnected) {
      if (isUserNotFound(error)) {
        setIsLocked(true);
      }
    }
  }, [userDetails?.userId, isWalletConnected, account, status]);

  return { getLockStatus, refetchRecentActivities, statusRecentActivities };
};

export default useLockedStatus;
