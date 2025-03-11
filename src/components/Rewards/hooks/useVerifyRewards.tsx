// react and other libraries
import { useEffect, useState } from "react";

// third party libraries
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

// helpers
import {
  useClaimRewardsActivity,
  useGetUserRewardsDetails,
} from "../../../queries";
import { walletToPCAIP10 } from "../../../helpers/web3helper";

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

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity();

  const handleVerify = async (userId: string | null) => {
    setErrorMessage("");
    const data = {};

    claimRewardsActivity(
      {
        userId: updatedId || (userId as string),
        activityTypeId,
        pgpPublicKey: "abcd",
        data: data,
        verificationProof: "abcd",
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
