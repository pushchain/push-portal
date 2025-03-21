// React and other libraries
import React, { FC, useEffect, useState } from "react";

//Queries
import { ActvityType, UsersActivity } from "../../queries";
import { Button } from "../../blocks";
import { ActivityVerificationButton } from "./ActivityVerificationButton";
import { useTweetVerification } from "./hooks/useTweetVerification";
// import { useDateExpiry } from '../hooks/useDateExpiry';

type ActivityButtonProps = {
  userId: string;
  activityTypeId: string;
  activityTypeIndex?: string;
  activityType: ActvityType;
  refetchActivity: () => void;
  setErrorMessage: (errorMessage: string) => void;
  usersSingleActivity?: UsersActivity;
  isLoadingActivity: boolean;
  label?: string;
  currentLevel?: string;
  setCurrentLevel?: (currentLevel: string) => void;
  onStartClaim?: () => void;
  hasTweeted?: boolean;
  refetchTweetStatus?: () => void;
};

const ActivityButton: FC<ActivityButtonProps> = ({
  userId,
  activityTypeId,
  activityTypeIndex,
  refetchActivity,
  activityType,
  setErrorMessage,
  usersSingleActivity,
  isLoadingActivity,
  label,
  currentLevel,
  setCurrentLevel,
  onStartClaim,
  hasTweeted,
  refetchTweetStatus,
}) => {
  const hasRewardsExpired = false;
  const { isTweeting, tweetConfirmed, handleTweetAboutPush } =
    useTweetVerification({
      userId,
      hasTweeted,
      refetchTweetStatus,
    });

  if (hasRewardsExpired) {
    return (
      <Button variant="tertiary" size="small" disabled>
        Ended
      </Button>
    );
  }

  if (
    label == "Tweet" &&
    activityType == "tweet_about_push_chain" &&
    !hasTweeted
  ) {
    return (
      <Button
        variant="tertiary"
        size="small"
        onClick={handleTweetAboutPush}
        disabled={isTweeting || tweetConfirmed}
      >
        {isTweeting ? "Verifying Tweet..." : "Tweet"}
      </Button>
    );
  }

  if (usersSingleActivity?.status === "COMPLETED") {
    return (
      <Button variant="tertiary" size="small" disabled>
        Claimed
      </Button>
    );
  }

  if (usersSingleActivity?.status === "PENDING") {
    return (
      <Button variant="tertiary" size="small" disabled>
        Pending
      </Button>
    );
  }

  return (
    // default verify button
    <ActivityVerificationButton
      activityType={activityType}
      userId={userId}
      activityTypeId={activityTypeId}
      activityTypeIndex={activityTypeIndex}
      refetchActivity={refetchActivity}
      setErrorMessage={setErrorMessage}
      isLoadingActivity={isLoadingActivity}
      label={label}
      currentLevel={currentLevel}
      setCurrentLevel={setCurrentLevel}
      onStartClaim={onStartClaim}
    />
  );
};

export { ActivityButton };
