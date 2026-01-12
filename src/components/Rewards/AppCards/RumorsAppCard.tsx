import React, { FC, useEffect, useMemo, useState } from "react";
import { css } from "styled-components";
import { usePushWalletContext } from "@pushchain/ui-kit";

import { useFilteredActivities } from "../hooks/useFilteredActivities";
import { useRewardsContext } from "../../context/rewardsContext";
import { useGetUserXP, UsersActivity } from "../../../queries";
import { useRefreshUserXP } from "../hooks/useRefreshUserXP";

import {
  Box,
  Button,
  Link,
  Multiplier,
  ProgressBar,
  RewardsBell,
  RewardsStar,
  RewardsStarGradient,
  Skeleton,
  Text,
} from "../../../blocks";

import RumorsImg from "../../../static/assets/website/rewards/rumors-app.webp";
import { RewardsActivityTitle } from "../RewardsActivity/RewardsActivityTitle";
import { ActivityButton } from "../RewardsActivity/ActivityButton";
import { device } from "../../config/globals";
import { useCountdown } from "../hooks/useCountdown";

const numberOfLevels = 50;

export type RumorsCardProps = {
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
};

const RumorsAppCard: FC<RumorsCardProps> = ({ setErrorMessage }) => {
  const { universalAccount } = usePushWalletContext();
  const account = universalAccount?.address as string;
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
    filteredActivities: rumorsActivities,
    refetchFilteredActivities,
    userDetails,
    isLoadingActivities,
    isUserActivityLoading,
    hasUserActivityLoading,
    userActivity,
    refetch,
  } = useFilteredActivities(account, ["rumors:xp"], "startsWith");

  const { data: allXPData, refetch: refetchXPData } = useGetUserXP({
    userId: userDetails?.userId as string,
  });

  // Get XP details
  const rumorsXP = allXPData?.xpData.rumors ?? 0;
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
      const key = `rumors:xp_level_${i}`;
      if (!userActivity[key] || userActivity[key].error == "Not Found") {
        return i;
      }
    }
    return 51; //if all 1 - 50 is claimed
  }, [userActivity, processingClaim, claimedLevelInfo, currentLevel]);

  const xpNeededForCurrentLevel = nextUnclaimedLevel
    ? xpLevels[nextUnclaimedLevel]
    : null;

  const levelToPick = rumorsActivities?.find(
    (item) => item?.index === `rumors:xp-level-${nextUnclaimedLevel}`,
  );

  const usersSingleActivity =
    (userActivity?.[levelToPick?.activityType] as UsersActivity) ?? null;

  const { isPending } = useRefreshUserXP();

  const isReadyToClaim = rumorsXP >= xpNeededForCurrentLevel;

  // current finish date
  const targetDate = "2025-07-31T23:59:59";
  const { isExpired } = useCountdown(targetDate);

  const isEnded = isExpired ? isExpired : nextUnclaimedLevel > numberOfLevels;
  const isLoading =
    isLoadingActivities || (isPending && Boolean(universalAccount));

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
              {/* <Link to="https://rumors.push.org" target="_blank"> */}
                <Text
                  variant="h4-semibold"
                  color="text-primary"
                  // css={css`
                  //   &:hover {
                  //     color: var(--text-brand-medium) !important;
                  //   }
                  // `}
                >
                  Rumors App
                </Text>
              {/* </Link> */}
              <RewardsActivityTitle
                activityTitle="Create or react to rumors to level up."
                isLoading={false}
                variant="bm-regular"
                color="text-tertiary"
              />

              <Skeleton isLoading={isLoading} width="fit-content">
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
            </Box>

            <Box
              width={{ initial: "fit-content", ml: "200px" }}
              display="flex"
              css={css`
                margin: var(--spacing-sm) var(--spacing-none)
                  var(--spacing-none) var(--spacing-none);
                @media ${device.mobileL} {
                  margin: var(--spacing-sm) auto;
                }
              `}
            >
              <img
                src={RumorsImg}
                style={{ width: "auto", height: "188px", objectFit: "contain" }}
              />
            </Box>
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
                {levelToPick?.multiplier > 1 && (
                  <>
                    <Multiplier width={23} height={25} />
                    <Text variant="bm-semibold" color="text-state-success-bold">
                      {levelToPick?.multiplier}x
                    </Text>
                  </>
                )}

                <br />

                <RewardsBell width={23} height={25} />
                <Text variant="bm-semibold">{levelToPick?.points ?? "0"}</Text>
              </Box>
            </Box>

            <ProgressBar
              progress={(rumorsXP as number) || null}
              max={xpNeededForCurrentLevel}
              size="large"
              progressIcon={<RewardsStarGradient size={35} />}
              progressIconText={`${rumorsXP}XP`}
            />
          </Box>
        </Box>
      </Box>
    </Skeleton>
  );
};

export default RumorsAppCard;
