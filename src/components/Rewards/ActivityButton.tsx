// React and other libraries
import React, { FC } from "react";

//Queries
import { ActvityType, UsersActivity } from "../../queries";
import { Button } from "../../blocks";
import { ActivityVerificationButton } from "./ActivityVerificationButton";
// import { useRewardsContext } from "../../context/rewardsContext";
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
  isStakeSection?: boolean;
  lifeTime?: boolean;
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
}) => {
  // const hasRewardsExpired = useDateExpiry('2025-02-28T23:59:59');
  const hasRewardsExpired = false;

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
    />
  );
};

export { ActivityButton };
