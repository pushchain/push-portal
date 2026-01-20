import { useCallback, useState } from "react";
import { ethers } from "ethers";
import { SiweMessage, generateNonce } from "siwe";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { useRewardsContext } from "../../../context/rewardsContext";
import { parseCAIP } from "../../../helpers/web3helper";

interface SignMessageResult {
  signature?: string;
  messageToSend?: any;
  error?: string;
  isLoading: boolean;
}

export const useSignMessageWithEthereum = () => {
  const { universalAccount, handleSignMessage } = usePushWalletContext();
  const { setSignature } = useRewardsContext();
  const [isLoading, setIsLoading] = useState(false);

  const signMessage = useCallback(
    async (extraData?: any): Promise<SignMessageResult> => {
      setIsLoading(true);

      try {
        if (!universalAccount) {
          throw new Error("Push Wallet is not connected");
        }

        const domain = window.location.hostname;
        const nonce = generateNonce();
        const origin = window.location.origin;
        const address = universalAccount.address;
        const { chainId } = parseCAIP(universalAccount?.chain);

        const messageToSend = {
          domain,
          address,
          uri: origin,
          version: "1",
          chainId,
          nonce,
          issuedAt: new Date().toISOString(),
          ...extraData,
        };

        const siweMessage = new SiweMessage(messageToSend);
        const messageToSign = siweMessage.prepareMessage();

        const encoder = new TextEncoder();
        const messageBytes = encoder.encode(messageToSign);

        const signedMessageBytes = await handleSignMessage(messageBytes);
        const signature = ethers.utils.hexlify(signedMessageBytes);

        setSignature(signature);

        return { signature, messageToSend, isLoading: false };
      } catch (error) {
        console.log(error);
        return {
          error:
            error instanceof Error ? error.message : "Unknown error occurred",
          isLoading: false,
        };
      } finally {
        setIsLoading(false);
      }
    },
    [universalAccount, handleSignMessage, setSignature],
  );

  return { signMessage };
};
