import { useState } from "react"
import { css } from "styled-components"
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit"

import { Box } from "../../blocks"
import { PreLaunchHeader } from "./PreLaunchHeader"
import { PreLaunchBenefits } from "./PreLaunchBenefits"
import { PreLaunchDivider } from "./PreLaunchDivider"
import { useVerifySeasonThree } from "../Rewards/hooks/useVerifySeasonThree"
import { useGetSeasonOneUserDetails, useGetUserRewardsDetails } from "../../queries"
import { walletToFullCAIP10, walletToPCAIP10 } from "../../helpers/web3helper"

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

  const { data: userSeasonOneRewardsDetails } = useGetSeasonOneUserDetails({
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

  const isUserVerified = verificationSuccess || userRewardsDetails?.discordReverified;
  const isUserEligible = !!userRewardsDetails || userRewardsDetails?.isSeasonOneUser || !!userSeasonOneRewardsDetails;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      css={css`
        z-index: 9;
      `}
    >
      <PreLaunchHeader
        universalAddress={universalAddress}
        userRewardsDetails={userRewardsDetails}
        userSeasonOneRewardsDetails={userSeasonOneRewardsDetails}
        verifyingSeasonThree={verifyingSeasonThree}
        handleSeasonThreeVerification={handleSeasonThreeVerification}
        verificationSuccess={isUserVerified}
        isUserEligible={isUserEligible}
        errorMessage={errorMessage}
        isLoading={isLoadingUserDetails}
      />
      <PreLaunchBenefits
        verificationSuccess={isUserVerified}
      />
      <PreLaunchDivider />
    </Box>
  )
}
