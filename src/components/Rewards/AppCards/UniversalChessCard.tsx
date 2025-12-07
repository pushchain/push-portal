import React, { FC, useEffect, useMemo, useState } from "react";
import { css } from "styled-components";

import { RewardsActivityTitle } from "../RewardsActivity/RewardsActivityTitle";

import {
  Box,
  Button,
  Link,
  ProgressBar,
  RewardsBell,
  RewardsStar,
  RewardsStarGradient,
  Skeleton,
  Text,
} from "../../../blocks";
import ChessImg from "../../../static/assets/website/rewards/chess-app.webp";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { useGetUserXP, UsersActivity } from "../../../queries";
import { ActivityButton } from "../RewardsActivity/ActivityButton";
import { useFilteredActivities } from "../hooks/useFilteredActivities";
import { useRewardsContext } from "../../context/rewardsContext";
import { useCountdown } from "../hooks/useCountdown";
import { useRefreshUserXP } from "../hooks/useRefreshUserXP";

const numberOfLevels = 50;

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
  const [currentLevel, setCurrentLevel] = useState(null);
  const [processingClaim, setProcessingClaim] = useState(false);
  const [claimedLevelInfo, setClaimedLevelInfo] = useState({
    level: null,
    activityType: null,
    isProcessing: false,
  });

  // Get user activities and XP data
  const {
    filteredActivities: chessActivities,
    refetchFilteredActivities,
    userDetails,
    isLoadingActivities,
    isUserActivityLoading,
    hasUserActivityLoading,
    userActivity,
    refetch,
  } = useFilteredActivities(account, ["chess:xp"], "startsWith");

  const { data: allXPData, refetch: refetchXPData } = useGetUserXP({
    userId: userDetails?.userId as string,
  });

  // Get XP details
  const chessXP = allXPData?.xpData.chess ?? 0;
  const xpLevels = allXPData?.xpForNextLevelMap || {};

  const nextUnclaimedLevel = useMemo(() => {
    if (!userActivity || hasUserActivityLoading !== "success") {
      return null;
    }

    // If we're processing a claim, return the level we're currently claiming
    if (processingClaim && claimedLevelInfo) {
      return claimedLevelInfo.level;
    }

    for (let i = 1; i <= 50; i++) {
      const key = `chess:xp_level_${i}`;
      if (!userActivity[key] || userActivity[key].error === "Not Found") {
        return i;
      }
    }
    return 51; //if all 1 - 50 is claimed
  }, [userActivity, processingClaim, claimedLevelInfo, currentLevel]);

  const xpNeededForCurrentLevel = nextUnclaimedLevel
    ? xpLevels[nextUnclaimedLevel]
    : null;

  const levelToPick = chessActivities?.find(
    (item) => item?.index === `chess:xp-level-${nextUnclaimedLevel}`,
  );

  const usersSingleActivity =
    (userActivity?.[levelToPick?.activityType] as UsersActivity) ?? null;

  const { isPending } = useRefreshUserXP();

  const isReadyToClaim = chessXP >= xpNeededForCurrentLevel;

  // current finish date
  const targetDate = "2025-07-31T23:59:59";
  const { isExpired } = useCountdown(targetDate);

  const isEnded = isExpired ? isExpired : nextUnclaimedLevel > numberOfLevels;
  const isLoading =
    isLoadingActivities || (isPending && Boolean(universalAddress));

  const startClaimProcess = (level, activityType) => {
    setClaimedLevelInfo((prevInfo) => ({
      ...prevInfo,
      level,
      activityType,
      isProcessing: true,
    }));
    setProcessingClaim(true);
  };

  useEffect(() => {
    if (processingClaim && claimedLevelInfo && currentLevel) {
      handleVerification();
    }
  }, [claimedLevelInfo, currentLevel]);

  const resetAndRefetch = async () => {
    // Reset all state
    setProcessingClaim(false);
    setCurrentLevel(null);
    setClaimedLevelInfo({
      level: null,
      activityType: null,
      isProcessing: false,
    });

    // Trigger all refetches in parallel
    await Promise.all([
      refetch(),
      refetchXPData(),
      refetchFilteredActivities(),
    ]);

    console.log("Reset and refresh completed");
  };

  const handleVerification = async () => {
    if (!claimedLevelInfo || !claimedLevelInfo.activityType) {
      setProcessingClaim(false);
      return;
    }

    try {
      const activityKey = claimedLevelInfo.activityType;

      console.log("Verification status:", {
        activityKey,
        claimedInfo: claimedLevelInfo,
      });

      setTimeout(async () => {
        await resetAndRefetch();
      }, 2000);
    } catch (error) {
      console.error("Verification error:", error);
      setProcessingClaim(false);
      setClaimedLevelInfo({
        level: null,
        activityType: null,
        isProcessing: false,
      });
    }
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
          position: relative;
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
          {/* <Link to="https://chess.push.org" target="_blank"> */}
            <Text
              variant="h3-semibold"
              color="text-primary"
              // css={css`
              //   &:hover {
              //     color: var(--text-brand-medium) !important;
              //   }
              // `}
            >
              Universal Chess
            </Text>
          {/* </Link> */}
          <RewardsActivityTitle
            activityTitle="Play games of chess with other degens or bots on any chain and level up to claim points."
            isLoading={false}
            variant="bm-regular"
            color="text-tertiary"
          />

          <Skeleton isLoading={isLoading} width="fit-content">
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
                  refetchActivity={refetch}
                  setErrorMessage={setErrorMessage}
                  usersSingleActivity={usersSingleActivity}
                  isLoadingActivity={isUserActivityLoading}
                  currentLevel={currentLevel}
                  setCurrentLevel={setCurrentLevel}
                  label={"Claim"}
                  onStartClaim={() => {
                    const level = nextUnclaimedLevel;
                    const activityType = levelToPick?.activityType;
                    if (level && activityType) {
                      startClaimProcess(level, activityType);
                    }
                  }}
                />
              )}
            </Box>
          </Skeleton>

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
                  {isEnded
                    ? "Max Level Reached"
                    : (levelToPick?.activityTitle ?? "No activity available")}
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
              progress={(chessXP as number) || null}
              max={xpNeededForCurrentLevel}
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
