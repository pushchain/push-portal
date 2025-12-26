import { useState } from "react"
import { css } from "styled-components"
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit"

import { Box } from "../../blocks"
import { PreLaunchHeader } from "./PreLaunchHeader"
import { PreLaunchBenefits } from "./PreLaunchBenefits"
import { PreLaunchDivider } from "./PreLaunchDivider"
import { useVerifySeasonThree } from "../Rewards/hooks/useVerifySeasonThree"
import { useGetUserRewardsDetails } from "../../queries"
import { walletToFullCAIP10 } from "../../helpers/web3helper"

export const PreLaunch = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { universalAddress } = usePushWalletContext();

  const caip10WalletAddress = walletToFullCAIP10(
    universalAddress?.address as string,
    universalAddress?.chainId,
    universalAddress?.chain,
  );

  const { data: userRewardsDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
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

  const isUserVerified  = verificationSuccess || userRewardsDetails?.discordReverified

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
        verifyingSeasonThree={verifyingSeasonThree}
        handleSeasonThreeVerification={handleSeasonThreeVerification}
        verificationSuccess={isUserVerified}
        errorMessage={errorMessage}
      />
      <PreLaunchBenefits
        verificationSuccess={isUserVerified}
      />
      <PreLaunchDivider />
    </Box>
  )
}
