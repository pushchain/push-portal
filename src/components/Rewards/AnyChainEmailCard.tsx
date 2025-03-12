import React, { FC } from "react";

import {
  Box,
  Button,
  ProgressBar,
  RewardsBell,
  RewardsStar,
  RewardsStarGradient,
  Skeleton,
  Text,
} from "../../../src/blocks";
import { css } from "styled-components";

import { RewardsActivityTitle } from "./RewardsActivityTitle";
import EmailImg from "../../../static/assets/website/rewards/email-app.webp";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { useRewardsContext } from "../../context/rewardsContext";
import { useFilteredActivities } from "./hooks/useFilteredActivities";
import { useGetUserXP, UsersActivity } from "../../queries";
import { calculateLevelFromXP } from "./utils/calculateLevelfromXp";
import { ActivityButton } from "./ActivityButton";

const totalCount = 127000;

export type AnyChainEmailCardProps = {
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
};

const AnyChainEmailCard: FC<AnyChainEmailCardProps> = ({ setErrorMessage }) => {
  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address as string;
  const { isLocked } = useRewardsContext();

  // Get user activities and XP data
  const {
    filteredActivities: emailActivities,
    userDetails,
    isLoadingActivities,
    isUserActivityLoading,
    userActivity,
    refetch,
  } = useFilteredActivities(account, ["email:xp"], "startsWith");

  const { data: allXPData } = useGetUserXP({
    userId: userDetails?.userId as string,
  });

  // Get XP details
  const emailXP = allXPData?.xpData.email ?? 0;
  const xpForNextLevel = allXPData?.xpForNextLevelMap || {};

  // Calculate level, next XP level, and progress
  const {
    currentLevel: emailXPLevel,
    currentLevelXP: emailCurrentLevelXPCumulative,
    nextLevelXP: emailNextXPCumulative,
    progressToMaxLevel: emailProgress,
  } = calculateLevelFromXP(emailXP, xpForNextLevel);

  // Find unclaimed levels from userActivity
  const unclaimedLevels = userActivity
    ? Object.keys(userActivity)
        .filter((key) => userActivity[key]?.error === "Not Found")
        .map((key) => Number(key.replace("email:xp_level_", "")))
        .filter((level) => level <= emailXPLevel)
        .sort((a, b) => a - b)
    : [];

  // Determine the next claimable level
  const nextClaimableLevel = unclaimedLevels[0] ?? null;

  // Get the corresponding activity for this level
  const levelToPick = emailActivities?.find(
    (item) => item?.index === `email:xp-level-${nextClaimableLevel}`,
  );

  const usersSingleActivity =
    (userActivity?.[levelToPick?.activityType] as UsersActivity) ?? null;

  const isReadyToClaim = emailXP > emailCurrentLevelXPCumulative;
  const isEnded = emailXP > totalCount;

  // console.log(
  //   emailXP,
  //   emailCurrentLevelXPCumulative,
  //   emailNextXPCumulative,
  //   emailXPLevel,
  // );

  const updateActivities = () => {
    refetch();
  };

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
        <Box>
          <Box
            display="flex"
            flexDirection={{ initial: "row", ml: "column-reverse" }}
            alignItems={{ initial: "center", ml: "flex-start" }}
            gap="spacing-md"
            justifyContent="space-between"
            width="100%"
          >
            <Box>
              <Text variant="h4-semibold" color="text-primary">
                Any Chain Email
              </Text>
              <RewardsActivityTitle
                activityTitle="Visit [email.push.org](https://email.push.org) and send or receive emails to level up."
                isLoading={false}
                variant="bm-regular"
                color="text-tertiary"
              />

              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                margin="spacing-md spacing-none spacing-none spacing-none"
              >
                {isLocked && (
                  <Button size="small" variant="tertiary" disabled>
                    Locked
                  </Button>
                )}

                {!isLocked && isEnded && (
                  <Button variant="tertiary" size="small" disabled>
                    Ended
                  </Button>
                )}

                {!isLocked && !isReadyToClaim && !isEnded && (
                  <Button variant="tertiary" size="small" disabled>
                    Level Up to Claim
                  </Button>
                )}

                {!isLocked && isReadyToClaim && !isEnded && (
                  <ActivityButton
                    userId={userDetails?.userId}
                    activityTypeId={levelToPick?.id}
                    activityType={levelToPick?.activityType}
                    refetchActivity={updateActivities}
                    setErrorMessage={setErrorMessage}
                    usersSingleActivity={usersSingleActivity}
                    isLoadingActivity={isUserActivityLoading}
                    label={"Claim"}
                  />
                )}
              </Box>
            </Box>

            <img
              src={EmailImg}
              style={{ width: "auto", height: "188px", objectFit: "contain" }}
            />
          </Box>

          <Box display="flex" flexDirection="column" gap="spacing-xs">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              margin="spacing-md spacing-none spacing-none spacing-none"
            >
              <Box
                display="flex"
                flexDirection="row"
                gap="spacing-xxs"
                backgroundColor="surface-secondary"
                alignItems="center"
                borderRadius="radius-xxs"
                padding="spacing-xxxs"
              >
                <Text>
                  {levelToPick?.activityTitle ?? "No activity available"}
                </Text>
                <RewardsStar color="icon-brand-medium" />
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                gap="spacing-xxs"
                alignItems="center"
              >
                <RewardsBell width={23} height={25} />
                <Text variant="bm-semibold">{levelToPick?.points ?? "0"}</Text>
              </Box>
            </Box>

            <ProgressBar
              progress={emailProgress}
              max={200}
              size="large"
              progressIcon={<RewardsStarGradient size={35} />}
              progressIconText={`${emailXP}XP`}
            />
          </Box>
        </Box>
      </Box>
    </Skeleton>
  );
};

export default AnyChainEmailCard;
