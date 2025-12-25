// React and other libraries
import React, { FC } from "react";

//Queries
import { ActvityType, UsersActivity } from "../../../queries";
import { Button } from "../../../blocks";
import { ActivityVerificationButton } from "./ActivityVerificationButton";
import { useCountdown } from "./hooks/useCountdown";

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
}) => {
  // current finish date
  const targetDate = "2025-07-31T23:59:59";
  const { isExpired } = useCountdown(targetDate);

  const hasRewardsExpired = isExpired;

  if (hasRewardsExpired) {
    return (
      <Button variant="tertiary" size="small" disabled>
        Ended
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
