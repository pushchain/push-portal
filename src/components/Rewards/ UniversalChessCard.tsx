import React, { FC, useState } from "react";
import { css } from "styled-components";

import { RewardsActivityTitle } from "./RewardsActivityTitle";

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
import ChessImg from "../../../static/assets/website/rewards/chess-app.webp";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { useGetUserXP, UsersActivity } from "../../queries";
import { ActivityButton } from "./ActivityButton";
import { useFilteredActivities } from "./hooks/useFilteredActivities";
import { calculateLevelFromXP } from "./utils/calculateLevelfromXp";
import { useRewardsContext } from "../../context/rewardsContext";

const totalCount = 127000;

export type UniversalChessCardProps = {
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
};
const UniversalChessCard: FC<UniversalChessCardProps> = ({
  setErrorMessage,
}) => {
  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address as string;
  const { isLocked } = useRewardsContext();

  // Get user activities and XP data
  const {
    filteredActivities: chessActivities,
    userDetails,
    isLoadingActivities,
    isUserActivityLoading,
    userActivity,
    refetch,
  } = useFilteredActivities(account, ["chess:xp"], "startsWith");

  const { data: allXPData } = useGetUserXP({
    userId: userDetails?.userId as string,
  });

  // Get XP details
  const chessXP = allXPData?.xpData.chess ?? 0;
  const xpForNextLevel = allXPData?.xpForNextLevelMap || {};

  // Calculate level, next XP level, and progress
  const {
    currentLevel: chessXPLevel,
    currentLevelXP: chessCurrentLevelXPCumulative,
    nextLevelXP: chessNextXPCumulative,
    progressToMaxLevel: chessProgress,
  } = calculateLevelFromXP(chessXP, xpForNextLevel);

  // Find unclaimed levels from userActivity
  const unclaimedLevels = userActivity
    ? Object.keys(userActivity)
        .filter((key) => userActivity[key]?.error === "Not Found")
        .map((key) => Number(key.replace("chess:xp_level_", "")))
        .filter((level) => level <= chessXPLevel)
        .sort((a, b) => a - b)
    : [];

  // Determine the next claimable level
  const nextClaimableLevel = unclaimedLevels[0] ?? null;

  // Get the corresponding activity for this level
  const levelToPick = chessActivities?.find(
    (item) => item?.index === `chess:xp-level-${nextClaimableLevel}`,
  );

  const usersSingleActivity =
    (userActivity?.[levelToPick?.activityType] as UsersActivity) ?? null;

  const isReadyToClaim = chessXP > chessCurrentLevelXPCumulative;
  const isEnded = chessXP > totalCount;

  // console.log(
  //   chessXP,
  //   chessCurrentLevelXPCumulative,
  //   chessNextXPCumulative,
  //   chessXPLevel,
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
        flex: 2;
      `}
    >
      <Box
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        display="flex"
        flexDirection="column"
        width="100%"
        css={css`
          flex: 2;
        `}
      >
        <Box
          width="100%"
          display="flex"
          overflow="hidden"
          borderRadius="radius-md radius-md radius-none radius-none"
        >
          <img
            src={ChessImg}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </Box>

        <Box padding="spacing-sm spacing-md">
          <Text variant="h3-semibold" color="text-primary">
            Universal Chess
          </Text>
          <RewardsActivityTitle
            activityTitle="Visit [chess.push.org](https://chess.push.org) and play games of chess with other degens or bots on any chain and level up to claim points."
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

          <Box display="flex" flexDirection="column" gap="spacing-xs">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              margin="spacing-md spacing-none spacing-xs spacing-none"
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
              progress={chessProgress}
              max={100}
              size="large"
              progressIcon={<RewardsStarGradient size={35} />}
              progressIconText={`${chessXP}XP`}
            />
          </Box>
        </Box>
      </Box>
    </Skeleton>
  );
};

export default UniversalChessCard;
