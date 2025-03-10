// react and other libraries
import { useEffect, useState } from "react";

// third party libraries
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

// helpers
import { generateVerificationProof } from "../utils/generateVerificationProof";
import {
  useClaimRewardsActivity,
  useGetUserRewardsDetails,
} from "../../../queries";
import { walletToPCAIP10 } from "../../../helpers/web3helper";
import { useAccountContext } from "../../../context/accountContext";

// types
// import { getActivityData } from '../utils/stakeRewardUtilities';

export type UseVerifyRewardsParams = {
  activityTypeId: string;
  setErrorMessage: (errorMessage: string) => void;
  refetchActivity: () => void;
  activityTypeIndex?: string;
};

const useVerifyRewards = ({
  activityTypeId,
  setErrorMessage,
  refetchActivity,
  activityTypeIndex,
}: UseVerifyRewardsParams) => {
  const [verifyingRewards, setVerifyingRewards] = useState(false);
  const [rewardsActivityStatus, setRewardsActivityStatus] = useState<
    "Claimed" | "Pending" | null
  >(null);
  const { userPushSDKInstance } = useAccountContext();

  const [updatedId, setUpdatedId] = useState<string | null>(null);

  const { universalAddress } = usePushWalletContext();

  const caip10WalletAddress = walletToPCAIP10(
    universalAddress?.address as string,
  );

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage]);

  const handleRewardsVerification = (userId: string) => {
    setUpdatedId(userId);
    setVerifyingRewards(true);
    handleVerify(userId);
  };

  const { refetch: refetchUserDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity({
    userId: updatedId as string,
    activityTypeId,
  });

  const handleVerify = async (userId: string | null) => {
    setErrorMessage("");

    const data = {};

    const verificationProof = await generateVerificationProof(
      data,
      userPushSDKInstance,
    );

    if (verificationProof == null || verificationProof == undefined) {
      if (userPushSDKInstance && userPushSDKInstance.readmode()) {
        setVerifyingRewards(false);
        setErrorMessage("Please Enable Push profile");
      }
      return;
    }

    claimRewardsActivity(
      {
        userId: updatedId || (userId as string),
        activityTypeId,
        pgpPublicKey: userPushSDKInstance.pgpPublicKey as string,
        data: data,
        verificationProof: verificationProof as string,
      },
      {
        onSuccess: (response) => {
          if (response.status === "COMPLETED") {
            setRewardsActivityStatus("Claimed");
            refetchActivity();
            refetchUserDetails();
            setVerifyingRewards(false);
          }
          if (response.status === "PENDING") {
            setRewardsActivityStatus("Pending");
            refetchActivity();
            setVerifyingRewards(false);
          }
        },
        onError: (error: any) => {
          console.log("Error in creating activity", error);
          setVerifyingRewards(false);
          if (error.name) {
            setErrorMessage(error.response.data.error);
          }
        },
      },
    );
  };

  return {
    verifyingRewards,
    rewardsActivityStatus,
    handleRewardsVerification,
  };
};

export { useVerifyRewards };
