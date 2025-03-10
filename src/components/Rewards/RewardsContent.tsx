import React from "react";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

import {
  useGetRewardsActivities,
  useGetUserRewardsDetails,
  useGetUserXP,
} from "../../queries";
import { walletToPCAIP10 } from "../../helpers/web3helper";
import { useRewardsContext } from "../../context/rewardsContext";

import { Box } from "../../../src/blocks";

import SendTestTxCard from "./SendTextTxCard";
import UniversalChessCard from "./ UniversalChessCard";
import AnyChainEmailCard from "./AnyChainEmailCard";
import RumorsAppCard from "./RumorsAppCard";

const RewardsContent = () => {
  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address as string;

  const { data: rewardActivitiesResponse, isLoading: isLoadingActivities } =
    useGetRewardsActivities();

  // // Getting user Id by wallet address
  const caip10WalletAddress = walletToPCAIP10(account);
  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { data: userXPData } = useGetUserXP({
    userId: userDetails?.userId as string,
  });

  const isLoading = isLoadingActivities;

  // If there are activities then render them else render 2 skeletons
  const activityList =
    rewardActivitiesResponse?.activities?.map((page) => page) || [];

  const chessActivities = isLoading
    ? Array(2).fill(0)
    : activityList.filter(
        (activity) =>
          activity.index.startsWith(`chess:xp`) &&
          activity?.status === "ENABLED",
      );

  const { isLocked } = useRewardsContext();

  // console.log(isLocked, chessActivities, "clear", userXPData);

  return (
    <Box display="flex" flexDirection="column" gap="spacing-md">
      <Box
        display="flex"
        flexDirection={{ initial: "row", tb: "column" }}
        gap="spacing-md"
      >
        <SendTestTxCard />
        <UniversalChessCard />
      </Box>

      <Box
        display="flex"
        flexDirection={{ initial: "row", tb: "column" }}
        gap="spacing-md"
      >
        <AnyChainEmailCard />
        <RumorsAppCard />
      </Box>
    </Box>
  );
};

export default RewardsContent;
