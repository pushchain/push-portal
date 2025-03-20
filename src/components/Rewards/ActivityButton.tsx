// React and other libraries
import React, { FC } from "react";

//Queries
import { ActvityType, UsersActivity } from "../../queries";
import { Button } from "../../blocks";
import { ActivityVerificationButton } from "./ActivityVerificationButton";
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
}) => {
  // const hasRewardsExpired = useDateExpiry('2025-02-28T23:59:59');
  const hasRewardsExpired = false;
  const handleTweetAboutPush = () => {
    const tweetText = encodeURIComponent(
      "🚀 Just jumped into Push Chain Devnet Drop S2 and it’s massive! Stack airdrops by exploring universal apps from any chain and level up by banging out multipliers. Join here: https://portal.push.org/rewards",
    );
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, "_blank");
  };

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
      <Button variant="tertiary" size="small" onClick={handleTweetAboutPush}>
        Tweet
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
