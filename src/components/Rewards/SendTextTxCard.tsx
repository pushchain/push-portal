import React, { FC } from "react";
import { css } from "styled-components";

import { Box, Button, RewardsBell, Skeleton, Text } from "../../../src/blocks";

import SimulateImg from "../../../static/assets/website/rewards/simulate-app.webp";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { useRewardsContext } from "../../context/rewardsContext";
import { RewardsActivityTitle } from "./RewardsActivityTitle";
import { ActivityButton } from "./ActivityButton";
import { useFilteredActivities } from "./hooks/useFilteredActivities";
import { UsersActivity } from "../../queries";

export type SendTestTxCardProps = {
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
};

const SendTestTxCard: FC<SendTestTxCardProps> = ({ setErrorMessage }) => {
  const { universalAddress } = usePushWalletContext();
  const { isLocked } = useRewardsContext();

  const account = universalAddress?.address as string;

  const {
    filteredActivities,
    userDetails,
    isLoadingActivities,
    isUserActivityLoading,
    userActivity,
    refetch,
  } = useFilteredActivities(account, ["chain-activity-1"]);

  const finalActivity = filteredActivities[0];
  const updateActivities = () => {
    refetch();
  };

  const usersSingleActivity =
    (userActivity?.[finalActivity?.activityType] as UsersActivity) ?? null;

  // const isLoadingActivities = true;

  return (
    <Skeleton
      isLoading={isLoadingActivities}
      borderRadius="radius-md"
      width="100%"
      css={css`
        display: flex;
        flex: 1;
      `}
    >
      <Box
        backgroundColor="surface-primary"
        padding="spacing-sm spacing-md"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        css={css`
          flex: 1;
        `}
      >
        <Box
          width="60%"
          display="flex"
          overflow="hidden"
          margin="spacing-sm spacing-none"
        >
          <img
            src={SimulateImg}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </Box>

        <Box>
          <Text variant="h4-semibold" color="text-primary">
            Send Test Tx on Push Chain
          </Text>
          <RewardsActivityTitle
            activityTitle="Visit [simulate.push.org](https://simulate.push.org) and send test transactions to level up."
            isLoading={false}
            variant="bm-regular"
            color="text-tertiary"
          />

          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            margin="spacing-md spacing-none"
          >
            {isLocked && (
              <Button size="small" variant="tertiary" disabled>
                Locked
              </Button>
            )}

            {!isLocked && (
              <ActivityButton
                userId={userDetails?.userId}
                activityTypeId={finalActivity.id}
                activityType={finalActivity.activityType}
                refetchActivity={() => updateActivities()}
                setErrorMessage={setErrorMessage}
                usersSingleActivity={usersSingleActivity}
                isLoadingActivity={isUserActivityLoading}
                label={"Claim"}
              />
            )}
            <Box
              display="flex"
              flexDirection="row"
              gap="spacing-xxs"
              alignItems="center"
            >
              <RewardsBell width={23} height={25} />
              <Text variant="bm-semibold">{finalActivity?.points}</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Skeleton>
  );
};

export default SendTestTxCard;
