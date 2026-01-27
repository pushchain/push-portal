// React and other libraries
import React, { FC, useState } from "react";
import { css } from "styled-components";

// hooks
import { useRewardsContext } from "../../../context/rewardsContext";
import { useCountdown } from "../hooks/useCountdown";

// type
import { ActvityType, useClaimDailyRewardsSeasonThree, useGetDailyCheckInDetails } from "../../../queries";

// components
import { Alert, Box, Button, Text } from "../../../blocks";
import { DailyRewardsItem } from "./DailyRewardsItem";

import { ActivityVerificationButton } from "../RewardsActivity/ActivityVerificationButton";
import { useAuthHeaders } from "../hooks/useAuthHeaders";

export type DailyRewardsSectionProps = Record<string, never>;

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { authHeaders } = useAuthHeaders();

  const { isLocked } = useRewardsContext();

  // current finish date
  const targetDate = "2025-07-31T23:59:59";
  const { isExpired } = useCountdown(targetDate);


  const hasRewardsExpired = isExpired;

  const { data: getDailyCheckInDetails, refetch, isLoading: isLoadingRewards } = useGetDailyCheckInDetails(authHeaders);
  const { mutate: claimDailyRewards, isPending: isClaimingRewards } = useClaimDailyRewardsSeasonThree();
  console.log(getDailyCheckInDetails, 'daily')

  const canClaimRewards = getDailyCheckInDetails?.canCheckInToday;


  const handleClaimRewards = () => {
    claimDailyRewards(authHeaders, {
      onSuccess: (data) => {
        console.log(data);
        refetch();
      },
      onError: (error) => {
        console.error(error);
      }
    });
}

  const dailyRewardsActivities = [
    { id: 1, text: "Day 1" },
    { id: 2, text: "Day 2" },
    { id: 3, text: "Day 3" },
    { id: 4, text: "Day 4" },
    { id: 5, text: "Day 5" },
    { id: 6, text: "Day 6" },
    { id: 7, text: "Day 7" },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
      padding="spacing-md"
      borderRadius="radius-md"
      height="100%"
      css={css`
        border: 1px solid rgba(171, 70, 248, 0.40);
        background: rgba(0, 0, 0, 0.10);
        background-blend-mode: plus-lighter;
        box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
        backdrop-filter: blur(10px);
        box-sizing: border-box;
      `}
    >
      <Box
        display="flex"
        flexDirection="row"
        width="-webkit-fill-available"
        justifyContent="space-between"
      >
        <Box>
          <Text variant="h4-semibold" color="text-primary">
            Daily Check-In
          </Text>
          <Text variant="bm-regular" color="text-tertiary">
            Stack your streak bonus, check-in daily
          </Text>
        </Box>

        {/* daily checkIn button state */}
        {/*{!isLocked && (
          <Button variant="tertiary" size="small" disabled>
            Locked
          </Button>
        )}*/}

        {/*{hasRewardsExpired && (
          <Button variant="tertiary" size="small" disabled>
            Ended
          </Button>
        )}*/}

        {(
          <>
            {!canClaimRewards && (
              <Button variant="tertiary" size="small" disabled>
                Claimed
              </Button>
            )}

            {canClaimRewards && (
              <Button
                variant="tertiary"
                size="small"
                onClick={handleClaimRewards}
                disabled={isClaimingRewards}
              >
                Claim
              </Button>
              // <ActivityVerificationButton
              //   activityType={activeItem?.activityType as ActvityType}
              //   userId={userDetails?.userId as string}
              //   activityTypeId={activeItem?.id as string}
              //   refetchActivity={() => refetchSendActivities()}
              //   setErrorMessage={setErrorMessage}
              //   isLoadingActivity={false}
              //   label="Claim"
              // />
            )}
          </>
        )}
      </Box>

      {errorMessage && (
        <Box width="-webkit-fill-available">
          <Alert
            heading={errorMessage}
            variant="error"
            onClose={() => setErrorMessage("")}
          />
        </Box>
      )}

      <Box
        display="grid"
        gap={{ ml: "spacing-xs", initial: "spacing-xxs" }}
        css={css`
          grid-template-columns: repeat(7, minmax(0, 1fr));

          @media (max-width: 1200px) {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            .item:last-child {
              grid-column: span 2;
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));

              .day-text {
                margin: 0 0 auto 0;
              }

              .count-text {
                margin: auto 0 0 0;
              }
            }

            .item:last-child .inner-item {
              grid-row: span 2;

              span {
                width: 85%;
                height: 85%;
                svg {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }

          @media (max-width: 700px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));

            .item:last-child {
              grid-column: span 2;
            }
          }
        `}
      >
        {dailyRewardsActivities?.map((activity) => (
          <DailyRewardsItem
            dailyCheckInDetails={getDailyCheckInDetails}
            isLoading={isLoadingRewards}
            activity={activity}
          />
        ))}
      </Box>
    </Box>
  );
};

export { DailyRewardsSection };
