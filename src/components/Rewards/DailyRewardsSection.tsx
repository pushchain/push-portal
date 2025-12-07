// React and other libraries
import React, { FC, useMemo, useState } from "react";
import { css } from "styled-components";

// hooks
import { useDailyRewards } from "./hooks/useDailyRewards";
import { useRewardsContext } from "../../context/rewardsContext";
// import { useDateExpiry } from '../hooks/useDateExpiry';

// type
import { ActvityType } from "../../queries";

// components
import { Alert, Box, Button, Text } from "../../blocks";
import { DailyRewardsItem } from "./DailyRewardsItem";
import { ActivityVerificationButton } from "./ActivityVerificationButton";
import { useCountdown } from "./hooks/useCountdown";

export type DailyRewardsSectionProps = Record<string, never>;

const DailyRewardsSection: FC<DailyRewardsSectionProps> = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const {
    activeItem,
    activeDay,
    isActivityDisabled,
    isLoading,
    userDetails,
    dailyRewardsActivities,
    refetchSendActivities,
  } = useDailyRewards();

  const { isLocked } = useRewardsContext();

  // current finish date
  const targetDate = "2025-07-31T23:59:59";
  const { isExpired } = useCountdown(targetDate);


  const hasRewardsExpired = isExpired;

  const isDailyRewardClaimed =
    isActivityDisabled && activeDay > 1 && userDetails;

  const displayDailyRewards = useMemo(() => {
    return !isActivityDisabled && activeDay > 0 && activeItem && userDetails;
  }, [isActivityDisabled, activeDay, userDetails, activeItem]);

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
        {!hasRewardsExpired && isLocked && (
          <Button variant="tertiary" size="small" disabled>
            Locked
          </Button>
        )}
        {hasRewardsExpired && (
          <Button variant="tertiary" size="small" disabled>
            Ended
          </Button>
        )}
        {!hasRewardsExpired && !isLocked && (
          <>
            {isDailyRewardClaimed && (
              <Button variant="tertiary" size="small" disabled>
                Claimed
              </Button>
            )}

            {displayDailyRewards && (
              <ActivityVerificationButton
                activityType={activeItem?.activityType as ActvityType}
                userId={userDetails?.userId as string}
                activityTypeId={activeItem?.id as string}
                refetchActivity={() => refetchSendActivities()}
                setErrorMessage={setErrorMessage}
                isLoadingActivity={false}
                label="Check In"
              />
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
              grid-row: span 2; /* Adjust to span 2 rows on small screens */

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
            key={activity.activityType}
            activity={activity}
            activeDay={activeDay}
            isLoading={isLoading}
            isActivityDisabled={isActivityDisabled}
          />
        ))}
      </Box>
    </Box>
  );
};

export { DailyRewardsSection };
