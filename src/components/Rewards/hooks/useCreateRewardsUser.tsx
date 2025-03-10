import { useState, useRef, useCallback, useEffect } from "react";
import {
  useCreateRewardsUser as useCreateRewardsUserQuery,
  useGetUserRewardsDetails,
} from "../../../queries/hooks";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { walletToPCAIP10 } from "../../../helpers/web3helper";
import { UserRewardsDetailResponse } from "../../../queries";
import { useRewardsContext } from "../../../context/rewardsContext";

const useCreateRewardsUser = () => {
  const hasRun = useRef(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { universalAddress } = usePushWalletContext();
  const { setIsVerifyClicked } = useRewardsContext();

  const account = universalAddress?.address as string;
  const isWalletConnected = Boolean(universalAddress?.address);
  const caip10WalletAddress = walletToPCAIP10(account);

  const { status, refetch } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: createUser } = useCreateRewardsUserQuery();

  const handleCreateUser = async ({
    onSuccessCallback,
  }: {
    onSuccessCallback?: (user: UserRewardsDetailResponse) => void;
  }) => {
    if (hasRun.current) return;
    hasRun.current = true;

    console.log("Creating user...");

    createUser(
      {
        pgpPublicKey: "abcd",
        // userWallet: caip10WalletAddress,
        userWallet: "new new",
        verificationProof: "abcd",
        refPrimary: sessionStorage.getItem("ref"),
      },
      {
        onSuccess: (data) => {
          setErrorMessage(null);
          refetch();
          onSuccessCallback?.(data);
        },
        onError: (err) => {
          console.error("Error", err);
          setErrorMessage("Failed to create user");
        },
      },
    );
  };

  const autoCreateUser = () => {
    if (!isWalletConnected || status !== "error") return;

    handleCreateUser({});
  };

  /** Reset function when user logs out or switches accounts */
  const resetState = useCallback(() => {
    hasRun.current = false;
    setErrorMessage(null);
    setIsVerifyClicked(false);
    console.log("State reset after logout/account change");
  }, []);

  useEffect(() => {
    if (!isWalletConnected) resetState();
  }, [isWalletConnected]);

  return {
    handleCreateUser,
    errorMessage,
    shouldRun: !hasRun.current && isWalletConnected && status === "error",
    autoCreateUser,
  };
};

export { useCreateRewardsUser };
