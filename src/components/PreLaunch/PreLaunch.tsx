import { useState } from "react"
import { css } from "styled-components"
import { usePushWalletContext } from "@pushchain/ui-kit"

import { PreLaunchHeader } from "./PreLaunchHeader"
import { PreLaunchBenefits } from "./PreLaunchBenefits"
import { PreLaunchDivider } from "./PreLaunchDivider"
import { useVerifySeasonThree } from "../Rewards/hooks/useVerifySeasonThree"

import { useGetSeasonOneUserDetails, useGetUserEligibilityForPreLaunch, useGetUserRewardsDetails } from "../../queries"
import { walletToFullCAIP10, walletToPCAIP10 } from "../../helpers/web3helper"

import { Box, Skeleton } from "../../blocks"


export const PreLaunch = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { universalAccount } = usePushWalletContext();


  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );


  const p10WalletAddress = walletToPCAIP10(
    universalAccount?.address as string,
  );

  const { data: userRewardsDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { data: userSeasonOneRewardsDetails } = useGetSeasonOneUserDetails({
    caip10WalletAddress: p10WalletAddress,
  });


  const { data: userEligibilityData, isLoading: isLoadingUserEligibility} = useGetUserEligibilityForPreLaunch({
    address: universalAccount?.address
  });


  const {
    verifyingSeasonThree,
    handleSeasonThreeVerification,
    verificationSuccess,
  } = useVerifySeasonThree({
    activityTypeId: "season-3-prelaunch",
    setErrorMessage,
  });

  const isUserDataLoading =
    isLoadingUserEligibility;
  const isUserVerified = !isUserDataLoading && (
    verificationSuccess || userEligibilityData?.discordVerified || userEligibilityData?.discordVerified);
  const isUserEligible = !isUserDataLoading &&
    (userEligibilityData?.exists);

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
