/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from "react";

import { css } from "styled-components";

import { Box, Lock, Text } from "../../blocks";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { StakeActivityResponse } from "../../queries";
import { useRewardsContext } from "../../context/rewardsContext";

import { RewardsActivitiesListItem } from "./RewardsActivitiesListItem";
import { useFilteredActivities } from "./hooks/useFilteredActivities";

export type RewardActivitiesProps = Record<string, never>;

const RewardsActivitiesSection: FC<RewardActivitiesProps> = () => {
  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address as string;

  const { isLocked } = useRewardsContext();

  const {
    filteredActivities: topLevelActivities,
    userDetails,
    isLoadingActivities,
    isUserActivityLoading,
    userActivity,
    refetch,
  } = useFilteredActivities(account, [
    "social-activity-1",
    "social-activity-2",
  ]);

  // const {
  //   filteredActivities: otherLevelActivities,
  //   isUserActivityLoading: isOtherUserActivityLoading,
  //   userActivity: otherUserActivity,
  //   refetch: othersRefetch,
  // } = useFilteredActivities(account, ["social-activity-3"]);

  return (
    <Box display="flex" flexDirection="column" gap="spacing-md">
      <Box gap="spacing-md" display="flex" flexDirection="column">
        {/* These are the social activites Twitter and discord */}
        {topLevelActivities?.map((activity: any) => (
          <RewardsActivitiesListItem
            key={activity.activityType}
            userId={userDetails?.userId || ""}
            activity={activity}
            isLoadingItem={isLoadingActivities}
            isLocked={isLocked}
            allUsersActivity={userActivity as StakeActivityResponse}
            isAllActivitiesLoading={isUserActivityLoading}
            refetchActivity={refetch}
          />
        ))}

        {/* TODO: This activity is to implemented after 1st launch */}
        {isLocked && (
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            margin="spacing-xxs spacing-none"
            gap="spacing-xxs"
            css={css`
              &:before,
              &:after {
                content: "";
                flex: 1 1;
                border-bottom: 1px solid var(--stroke-secondary);
                margin: auto;
              }
              &:before {
                margin-right: var(--s3);
              }
              &:after {
                margin-left: var(--s3);
              }
            `}
          >
            <Lock size={28} color="icon-tertiary" />
            <Text variant="bs-semibold" color="text-tertiary">
              Verify X and Discord to unlock more activities
            </Text>
          </Box>
        )}

        {/* {otherLevelActivities?.map((activity: any) => (
          <RewardsActivitiesListItem
            key={activity.activityType}
            userId={userDetails?.userId || ""}
            activity={activity}
            isLoadingItem={isLoadingActivities}
            isLocked={isLocked}
            allUsersActivity={otherUserActivity as StakeActivityResponse}
            isAllActivitiesLoading={isOtherUserActivityLoading}
            refetchActivity={othersRefetch}
          />
        ))} */}
      </Box>
    </Box>
  );
};

export default RewardsActivitiesSection;
