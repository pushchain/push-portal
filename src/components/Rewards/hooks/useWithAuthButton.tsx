// React and other libraries
import React, { useEffect, useMemo, useState } from "react";

// third party libraries
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

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

  const { universalAddress, handleConnectToPushWallet, connectionStatus } =
    usePushWalletContext();
  const { setIsVerifyClicked } = useRewardsContext();
  const isWalletConnected = Boolean(universalAddress?.address);

  const { handleCreateUser, userDetails } = useCreateRewardsUser();

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
    if (!userDetails) return;

    console.log("before auth");
    handleSuccess(userDetails);
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
