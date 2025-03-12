/* eslint-disable @typescript-eslint/no-explicit-any */
// react and other libraries
import { useCallback, useEffect, useState } from "react";

// third party libraries
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  TwitterAuthProvider,
  User,
} from "firebase/auth";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";

// hooks
import {
  useClaimRewardsActivity,
  useGetUserRewardsDetails,
} from "../../../queries";

// helpers
import appConfig from "../../../config";
import { walletToPCAIP10 } from "../../../helpers/web3helper";

export type UseTwitterVerifyParams = {
  activityTypeId: string;
  setErrorMessage: (errorMessage: string) => void;
  refetchActivity: () => void;
};

const useVerifyTwitter = ({
  activityTypeId,
  setErrorMessage,
  refetchActivity,
}: UseTwitterVerifyParams) => {
  const [verifyingTwitter, setVerifyingTwitter] = useState(false);
  const [twitterActivityStatus, setTwitterActivityStatus] = useState<
    "Claimed" | "Pending" | null
  >(null);
  const [updatedId, setUpdatedId] = useState<string | null>(null);

  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address;
  const caip10WalletAddress = walletToPCAIP10(
    universalAddress?.address as string,
  );

  const { refetch: refetchUserDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage, account]);

  initializeApp(appConfig.firebaseConfig);

  const provider = new TwitterAuthProvider();
  const auth = getAuth();

  const handleTwitterVerification = (userId: string) => {
    setUpdatedId(userId);
    setVerifyingTwitter(true);

    handleVerify(userId);
  };

  const handleConnect = (): Promise<User | null> => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const credential = TwitterAuthProvider.credentialFromResult(result);
        if (credential) {
          const user = result.user;
          return user;
        } else {
          return null;
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        const credential = TwitterAuthProvider.credentialFromError(error);
        console.log(
          "Error in connecting twitter >>>",
          errorCode,
          errorMessage,
          credential,
        );
        setVerifyingTwitter(false);
        return null;
      });
  };

  const { mutate: claimRewardsActivity } = useClaimRewardsActivity();

  const handleVerify = useCallback(
    async (userId: string | null) => {
      setErrorMessage("");

      const userTwitterDetails = await handleConnect();

      if (userTwitterDetails) {
        const twitterHandle = (userTwitterDetails as any)?.reloadUserInfo
          ?.screenName;

        const verificationProof = "abcd";

        claimRewardsActivity(
          {
            userId: updatedId || (userId as string),
            activityTypeId,
            pgpPublicKey: "abcd",
            data: {
              twitter: twitterHandle,
            },
            verificationProof: verificationProof as string,
          },
          {
            onSuccess: (response) => {
              if (response.status === "COMPLETED") {
                setTwitterActivityStatus("Claimed");
                refetchActivity();
                refetchUserDetails();
                setVerifyingTwitter(false);
              }
              if (response.status === "PENDING") {
                setTwitterActivityStatus("Pending");
                refetchActivity();
                setVerifyingTwitter(false);
              }
            },
            onError: (error: any) => {
              console.log("Error in creating activity", error);
              setVerifyingTwitter(false);
              if (error.name) {
                setErrorMessage(error.response.data.error);
              }
            },
          },
        );
      }
    },
    [handleConnect],
  );

  return {
    verifyingTwitter,
    twitterActivityStatus,
    handleTwitterVerification,
  };
};

export { useVerifyTwitter };
