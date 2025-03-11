// React and other libraries
import React, { useMemo } from "react";

// hooks
import { useAuthWithButton } from "./hooks/useWithAuthButton";
import { useVerifyTwitter } from "./hooks/useVerifyTwitter";
import { useVerifyDiscord } from "./hooks/useVerifyDiscord";
import { useVerifyRewards } from "./hooks/useVerifyRewards";

// helpers
import {
  bonusRewardActivities,
  channelSubscriptionActivities,
  chessRewardsActivities,
  dailyRewardActivities,
  otherRewardActivities,
  simulateRewardsActivities,
} from "./utils/activityTypeArray";

// types
import { ActvityType } from "../../queries/types";

// components
import { Button } from "../../blocks";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

type ActivityVerificationButtonProps = {
  userId: string;
  activityTypeId: string;
  activityTypeIndex?: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
  isLoadingActivity: boolean;
  label?: string;
};

export const ActivityVerificationButton = ({
  activityType,
  activityTypeId,
  activityTypeIndex,
  refetchActivity,
  setErrorMessage,
  userId,
  isLoadingActivity,
  label,
}: ActivityVerificationButtonProps) => {
  const { universalAddress, connectionStatus } = usePushWalletContext();
  const isWalletConnected = Boolean(universalAddress?.address);

  const { handleTwitterVerification, verifyingTwitter, twitterActivityStatus } =
    useVerifyTwitter({
      activityTypeId,
      refetchActivity,
      setErrorMessage,
    });

  const { handleDiscordVerification, verifyingDiscord, discordActivityStatus } =
    useVerifyDiscord({
      activityTypeId,
      refetchActivity,
      setErrorMessage,
    });

  const { handleRewardsVerification, verifyingRewards, rewardsActivityStatus } =
    useVerifyRewards({
      activityTypeId,
      refetchActivity,
      setErrorMessage,
      activityTypeIndex,
    });

  const activityData = useMemo(() => {
    if (activityType === "follow_push_on_discord") {
      return {
        isLoading: verifyingDiscord,
        label: "Verify",
        action: handleDiscordVerification,
        isVerificationComplete: discordActivityStatus == "Claimed",
      };
    }

    if (activityType === "follow_push_on_twitter") {
      return {
        isLoading: verifyingTwitter,
        label: "Verify",
        action: handleTwitterVerification,
        isVerificationComplete:
          twitterActivityStatus == "Claimed" ||
          twitterActivityStatus == "Pending",
      };
    }

    if (
      otherRewardActivities.includes(activityType) ||
      bonusRewardActivities.includes(activityType) ||
      chessRewardsActivities.includes(activityType) ||
      simulateRewardsActivities.includes(activityType)
    ) {
      return {
        isLoading: verifyingRewards,
        label: "Claim",
        action: handleRewardsVerification,
        isVerificationComplete:
          rewardsActivityStatus == "Claimed" ||
          rewardsActivityStatus == "Pending",
      };
    }

    if (dailyRewardActivities.includes(activityType)) {
      return {
        isLoading: verifyingRewards,
        label: "Check In",
        action: handleRewardsVerification,
        isVerificationComplete:
          rewardsActivityStatus == "Claimed" ||
          rewardsActivityStatus == "Pending",
      };
    }
  }, [
    activityType,
    twitterActivityStatus,
    discordActivityStatus,
    verifyingRewards,
    verifyingTwitter,
    verifyingDiscord,
  ]);

  const { isAuthenticated, authButton } = useAuthWithButton({
    isLoading:
      isLoadingActivity ||
      connectionStatus === "connecting" ||
      connectionStatus === "authenticating",
    onSuccess: (userDetails) => activityData?.action(userDetails?.userId),
    label: label,
  });

  if (isAuthenticated && isWalletConnected) {
    return (
      <Button
        variant="tertiary"
        size="small"
        loading={
          activityData?.isLoading || activityData?.isVerificationComplete
        }
        onClick={() => {
          console.log("after auth");
          activityData?.action(userId);
        }}
        disabled={isLoadingActivity}
      >
        {activityData?.isVerificationComplete
          ? "Verifying..."
          : activityData?.label
            ? activityData?.label
            : "Verify"}
      </Button>
    );
  }

  return authButton;
};
