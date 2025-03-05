// React and other libraries
import { useContext, useEffect, useState } from "react";
import { PushAPI } from "@pushprotocol/restapi";

// helpers
import { generateVerificationProof } from "../utils/generateVerificationProof";
import { useAccountContext } from "../../../context/accountContext";

// hooks
import {
  useCreateRewardsUser as useCreateRewardsUserQuery,
  useGetUserRewardsDetails,
} from "../../../queries/hooks";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { walletToPCAIP10 } from "../../../helpers/web3helper";

const useCreateRewardsUser = () => {
  const { userPushSDKInstance, isUserProfileUnlocked } = useAccountContext();
  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address as string;

  const caip10WalletAddress = walletToPCAIP10(account);
  const [isSuccess, setIsSuccess] = useState(false);

  const isActiveAccount = userPushSDKInstance?.account === account;

  const { status, refetch } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { mutate: createUser } = useCreateRewardsUserQuery();

  const handleCreateUser = async ({
    userPushSDKInstance,
  }: {
    userPushSDKInstance: PushAPI;
  }) => {
    // get ref, send with user wallet. if ref is null, send only user wallet
    const ref = sessionStorage.getItem("ref");
    const data = {
      ...(ref && { refPrimary: ref }),
      userWallet: caip10WalletAddress,
    };

    //generate verification proof again, after unlocking profile
    const verificationProof = await generateVerificationProof(
      data,
      userPushSDKInstance,
    );
    if (!verificationProof) return;

    createUser(
      {
        pgpPublicKey: userPushSDKInstance?.pgpPublicKey,
        userWallet: caip10WalletAddress,
        verificationProof: verificationProof as string,
        refPrimary: ref,
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
          refetch();
        },
        onError: (err) => {
          console.error("Error", err);
        },
      },
    );
  };

  useEffect(() => {
    if (isUserProfileUnlocked && isActiveAccount && status !== "success") {
      handleCreateUser({ userPushSDKInstance });
    }
  }, [isUserProfileUnlocked, userPushSDKInstance, account]);

  return { handleCreateUser, isSuccess, setIsSuccess, isUserProfileUnlocked };
};

export { useCreateRewardsUser };
