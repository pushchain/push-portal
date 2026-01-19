import { useState } from "react"
import { css } from "styled-components"
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit"

import { PreLaunchHeader } from "./PreLaunchHeader"
import { PreLaunchBenefits } from "./PreLaunchBenefits"
import { PreLaunchDivider } from "./PreLaunchDivider"
import { useVerifySeasonThree } from "../Rewards/hooks/useVerifySeasonThree"

import { useGetSeasonOneUserDetails, useGetUserRewardsDetails } from "../../queries"
import { walletToFullCAIP10, walletToPCAIP10 } from "../../helpers/web3helper"

import { Box, Skeleton } from "../../blocks"


export const PreLaunch = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { universalAddress } = usePushWalletContext();


  const caip10WalletAddress = walletToFullCAIP10(
    universalAddress?.address as string,
    universalAddress?.chainId,
    universalAddress?.chain,
  );


  const p10WalletAddress = walletToPCAIP10(
    universalAddress?.address as string,
  );

  const { data: userRewardsDetails, isLoading: isLoadingUserDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { data: userSeasonOneRewardsDetails, isLoading: isLoadingUserSeasonOneDetails } = useGetSeasonOneUserDetails({
    caip10WalletAddress: p10WalletAddress,
  });


  const {
    verifyingSeasonThree,
    handleSeasonThreeVerification,
    verificationSuccess,
  } = useVerifySeasonThree({
    activityTypeId: "season-3-prelaunch",
    refetchActivity: () => {},
    setErrorMessage,
  });

  const isUserDataLoading =
    isLoadingUserDetails || isLoadingUserSeasonOneDetails;
  const isUserVerified = !isUserDataLoading && (
    verificationSuccess || userRewardsDetails?.discordReverified || userSeasonOneRewardsDetails?.discordReverified);
  const isUserEligible = !isUserDataLoading &&
    (!!userRewardsDetails || !!userSeasonOneRewardsDetails);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      css={css`
        z-index: 9;
      `}
    >
      <Skeleton isLoading={isUserDataLoading}
        css={css`
          width: 100%;
          height: 300px;
          border-radius: 24px;
        `}
      >
        <PreLaunchHeader
          userRewardsDetails={userRewardsDetails}
          userSeasonOneRewardsDetails={userSeasonOneRewardsDetails}
          verifyingSeasonThree={verifyingSeasonThree}
          handleSeasonThreeVerification={handleSeasonThreeVerification}
          verificationSuccess={isUserVerified}
          isUserEligible={isUserEligible}
          errorMessage={errorMessage}
          isLoading={isUserDataLoading}
        />
      </Skeleton>

      <Skeleton isLoading={isUserDataLoading}
        css={css`
          width: 100%;
          height: 108px;
          margin-top: 40px;
          border-radius: 24px;
        `}
      >
        <PreLaunchBenefits
          verificationSuccess={isUserVerified}
          isLoading={isUserDataLoading}
        />
      </Skeleton>

     {!isUserDataLoading &&  <PreLaunchDivider />}
    </Box>
  )
}
