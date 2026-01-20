// React and other libraries
import React, { useCallback, useEffect, useMemo, useState } from "react";

// third party libraries
import { usePushWalletContext } from "@pushchain/ui-kit";

//Hooks
import { useCreateRewardsUser } from "./useCreateRewardsUser";
import { UserRewardsDetailResponse } from "../../../queries";

// components
import { Button } from "../../../blocks";
import { useRewardsContext } from "../../../context/rewardsContext";

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

  const { universalAccount, handleConnectToPushWallet, connectionStatus } =
    usePushWalletContext();
  const { setIsVerifyClicked } = useRewardsContext();
  const isWalletConnected = Boolean(universalAccount?.address);

  const { handleCreateUser, userDetails } = useCreateRewardsUser();

  const handleVerifyAction = useCallback(async () => {
    setIsVerifyClicked(true);

    if (!isWalletConnected) {
      setStep("connecting");
      handleConnectToPushWallet();
      return;
    }

    if (!userDetails?.userId) {
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

    if (!userDetails?.userId) return;

    console.log("before auth");
    handleSuccess(userDetails);
  }, [userDetails?.userId, isWalletConnected]);

  useEffect(() => {
    if (
      step === "connecting" &&
      isWalletConnected &&
      connectionStatus == "connected"
    ) {
      console.log("go again");
      handleVerifyAction(); // Retry the process after wallet connects
    }
  }, [connectionStatus]);

  const handleSuccess = (userDetails: UserRewardsDetailResponse) => {
    setIsWalletConnectedAndProfileUnlocked(true);
    onSuccess(userDetails);
    setStep("done");
    setIsVerifyClicked(false);
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
