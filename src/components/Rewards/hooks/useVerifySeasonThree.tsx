// React and other libraries
import { useEffect, useState, useCallback } from "react";

// Third-party libraries
import { usePushWalletContext } from "@pushchain/ui-kit";

// hooks
import appConfig from "../../../config";
import {
  useClaimSeasonThree,
  useGetUserEligibilityForPreLaunch,
} from "../../../queries";

// helpers
import { parseCAIP } from "../../../helpers/web3helper";
import { useSignMessageWithEthereum } from "./useSignMessage";
import { WalletChainType } from "../utils/wallet";

type UseDiscordActivityVerificationProps = {
  activityTypeId: string;
  setErrorMessage: (errorMessage: string) => void;
};

const useVerifySeasonThree = ({
  activityTypeId,
  setErrorMessage,
}: UseDiscordActivityVerificationProps) => {
  const token = localStorage.getItem("access_token");

  const [seasonThreeActivityStatus, setSeasonThreeActivityStatus] = useState<
    "Claimed" | null
  >(null);
  const [verifyingSeasonThree, setVerifyingSeasonThree] = useState(
    token ? true : false,
  );
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const { universalAccount } = usePushWalletContext();
  const { signMessage } = useSignMessageWithEthereum();

  const account = universalAccount?.address;
  const { chainId } = parseCAIP(universalAccount?.chain);

  useEffect(() => {
    setErrorMessage("");
  }, [setErrorMessage]);

  const { refetch: refetchUserEligibility} = useGetUserEligibilityForPreLaunch({
    address: account
  });

  const { mutate: claimSeasonThree } = useClaimSeasonThree();

  const handleSeasonThreeVerification = () => {
    setErrorMessage("");
    setVerifyingSeasonThree(true);

    handleConnect();
  };

  const handleConnect = () => {
    const clientID = appConfig.discord_client_id;
    const baseURL = import.meta.env.VITE_PR_PREVIEW_BASE
      ? `https://push-protocol.github.io/push-website/pr-preview/${import.meta.env.VITE_PR_PREVIEW_BASE}`
      : window.location.origin;
    const redirectURI = `${baseURL}/discord/verification`;
    const scope = "identify email guilds.members.read";

    const authURL = `https://discord.com/api/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&scope=${scope}`;

    const newWindow = window.open(authURL, "_blank");

    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      setErrorMessage("Popup blocked. Please allow popups for this site and try again.");
      setVerifyingSeasonThree(false);
      return;
    }

    const checkAuth = setInterval(() => {
      if (newWindow?.closed) {
        clearInterval(checkAuth);
        handleVerify();
      }
    }, 1000);
  };

  const handleVerify = useCallback(
    async () => {
      const token = localStorage.getItem("access_token");
      const username = localStorage.getItem("username");
      const email = localStorage.getItem("discord_email");

      if (username && token) {
        let verificationProof = "abcd";
        let messageToSend = {
          discord: username,
          discord_email: email,
          discord_token: token,
        };


        const isSupportedChain =
          chainId == WalletChainType.SEPOLIA ||
          chainId == WalletChainType.ETH;

        if (isSupportedChain) {
          const {
            signature,
            messageToSend: signedMessage,
            error,
          } = await signMessage({
            discord: username,
            discord_token: token,
          });

          if (error || !signature) {
            console.log(error);
            setErrorMessage(error);
            setVerifyingSeasonThree(false);
            return;
          }
          verificationProof = signature;
          messageToSend = signedMessage;
        }

        localStorage.removeItem("access_token");
        localStorage.removeItem("username");
        localStorage.removeItem("discord_email");
        localStorage.removeItem("expires_in");

        claimSeasonThree(
          {
            userWallet: universalAccount?.address,
            discordEmail: email,
            discordUsername: username,
            data: messageToSend,
            verificationProof,
          },
          {
            onSuccess: (response) => {

              if (response.status === "COMPLETED" || response.success) {
                setSeasonThreeActivityStatus("Claimed");
                setVerificationSuccess(true);
                refetchUserEligibility()
                setVerifyingSeasonThree(false);
                setErrorMessage("");
              } else {
                setVerifyingSeasonThree(false);
              }
            },
            onError: (error: any) => {
              console.log("Error in creating activity", error);
              setVerifyingSeasonThree(false);
              setVerificationSuccess(false);
              if (error.response?.data?.error) {
                setErrorMessage(error.response.data.error);
              } else {
                setErrorMessage('An error occurred. Please try again');
              }
            },
          },
        );
      }
    },
    [account],
  );

  return {
    verifyingSeasonThree,
    seasonThreeActivityStatus,
    handleSeasonThreeVerification,
    verificationSuccess,
  };
};

export { useVerifySeasonThree };
