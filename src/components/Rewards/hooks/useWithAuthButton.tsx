// React and other libraries
import React, { useEffect, useMemo, useState } from "react";

// third party libraries
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

//Hooks
import { useCreateRewardsUser } from "./useCreateRewardsUser";
import {
  useGetUserRewardsDetails,
  UserRewardsDetailResponse,
} from "../../../queries";

// components
import { Button } from "../../../blocks";
import { walletToPCAIP10 } from "../../../helpers/web3helper";
import { useRewardsContext } from "../../../context/rewardsContext";
// import { useRewardsAuth } from "./useRewardsAuth";

export const useAuthWithButton = ({
  onSuccess,
  isLoading,
  label = "verify",
}: {
  onSuccess: (userDetails: UserRewardsDetailResponse) => void;
  isLoading: boolean;
  label?: string;
}) => {
  const [
    isWalletConnectedAndProfileUnlocked,
    setIsWalletConnectedAndProfileUnlocked,
  ] = useState(false);
  const [step, setStep] = useState<"idle" | "connecting" | "creating" | "done">(
    "idle",
  );

  const { universalAddress, handleConnectToPushWallet, connectionStatus } =
    usePushWalletContext();
  const { setIsVerifyClicked } = useRewardsContext();
  const isWalletConnected = Boolean(universalAddress?.address);
  const caip10WalletAddress = walletToPCAIP10(universalAddress?.address);

  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { handleCreateUser } = useCreateRewardsUser();

  const handleVerifyAction = async () => {
    setIsVerifyClicked(true);

    if (!isWalletConnected) {
      setStep("connecting");
      handleConnectToPushWallet();
      return;
    }

    if (!userDetails) {
      setStep("creating");

      await handleCreateUser({
        onSuccessCallback: (updatedUserDetails: UserRewardsDetailResponse) => {
          if (updatedUserDetails) {
            console.log("handle here", updatedUserDetails);
            handleSuccess(updatedUserDetails);
          }
        },
      });
    }

    if (userDetails == undefined) return;

    handleSuccess(userDetails);
    console.log("handle here 2", userDetails);
  };

  useEffect(() => {
    if (
      step === "connecting" &&
      isWalletConnected &&
      connectionStatus &&
      "connected"
    ) {
      handleVerifyAction(); // Retry the process after wallet connects
    }
  }, [connectionStatus]);

  const handleSuccess = (userDetails: UserRewardsDetailResponse) => {
    setIsWalletConnectedAndProfileUnlocked(true);
    onSuccess(userDetails);
    setStep("done");
  };

  const authButton = useMemo(
    () => (
      <>
        <Button
          variant="tertiary"
          size="small"
          onClick={handleVerifyAction}
          disabled={isLoading}
        >
          {label}
        </Button>
      </>
    ),
    [isWalletConnected, isLoading, label],
  );

  return {
    authButton,
    isAuthenticated: isWalletConnectedAndProfileUnlocked,
  };
};
