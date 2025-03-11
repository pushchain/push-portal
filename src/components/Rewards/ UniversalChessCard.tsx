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
  Text,
} from "../../../src/blocks";
import ChessImg from "../../../static/assets/website/rewards/chess-app.webp";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import {
  useGetRewardsActivities,
  useGetRewardsActivity,
  useGetUserRewardsDetails,
  useGetUserXP,
  UsersActivity,
} from "../../queries";
import { walletToPCAIP10 } from "../../helpers/web3helper";
import { ActivityButton } from "./ActivityButton";

export type UniversalChessCardProps = {
  errorMessage: string;
  setErrorMessage: (errorMessage: string) => void;
};
const UniversalChessCard: FC<UniversalChessCardProps> = ({
  setErrorMessage,
}) => {
  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address as string;
  // const [activeActivity, setActivity] = useState(null);

  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } =
    useGetRewardsActivities();

  // // Getting user Id by wallet address
  const caip10WalletAddress = walletToPCAIP10(account);
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });
  const { data: allXPData } = useGetUserXP({
    userId: userDetails?.userId as string,
  });

  const isLoading = isLoadingActivities;

  const activityList =
    rewardActivitiesResponse?.activities?.map((page) => page) || [];

  const emailActivities = isLoading
    ? Array(1).fill(0)
    : activityList.filter(
        (activity) =>
          activity.index.startsWith(`chess:xp`) &&
          activity?.status === "ENABLED",
      );

  const activityTypes = [...emailActivities]
    ?.map((activity) => activity?.activityType) // Extract `activityType`
    .filter(Boolean);

  const {
    data: allUsersActivity,
    // isLoading: isAllActivitiesLoading,
    refetch: refetchActivity,
  } = useGetRewardsActivity(
    { userId: userDetails?.userId as string, activityTypes: activityTypes },
    { enabled: !!userDetails?.userId && activityTypes.length > 0 },
  );

  const chessXPLevel = allXPData?.chess ?? 0;
  const levelToPick = emailActivities?.filter(
    (item) => item?.index == `chess:xp-level-${chessXPLevel + 1}`,
  )[0];

  const usersSingleActivity =
    (allUsersActivity?.[levelToPick?.activityType] as UsersActivity) ?? null;

  // console.log(allUsersActivity, levelToPick);
  //
  const updateActivities = () => {
    refetchActivity();
    // refetchRecentActivities();
  };

  return (
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
          {/* <Button variant="tertiary" size="small" disabled>
            Level Up to Claim
          </Button> */}

          <ActivityButton
            userId={userDetails?.userId}
            activityTypeId={levelToPick?.id}
            activityType={levelToPick?.activityType}
            refetchActivity={() => updateActivities()}
            setErrorMessage={setErrorMessage}
            usersSingleActivity={usersSingleActivity}
            isLoadingActivity={isLoading}
            label={"Level Up to Claim"}
          />
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
            progress={40}
            max={200}
            size="large"
            progressIcon={<RewardsStarGradient size={35} />}
            progressIconText="200XP"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UniversalChessCard;
