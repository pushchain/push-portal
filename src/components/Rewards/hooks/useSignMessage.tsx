import { useCallback, useState } from "react";
import { ethers } from "ethers";
import { SiweMessage, generateNonce } from "siwe";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { useRewardsContext } from "../../../context/rewardsContext";

interface SignMessageResult {
  signature?: string;
  messageToSend?: any;
  error?: string;
  isLoading: boolean;
}

export const useSignMessageWithEthereum = () => {
  const { universalAddress, handleSendSignRequestToPushWallet } =
    usePushWalletContext();
  const { setSignature } = useRewardsContext();
  const [isLoading, setIsLoading] = useState(false);

  const signMessage = useCallback(
    async (extraData?: any): Promise<SignMessageResult> => {
      setIsLoading(true);

      try {
        if (!universalAddress) {
          throw new Error("Push Wallet is not connected");
        }

        const domain = window.location.hostname;
        const nonce = generateNonce();
        const origin = window.location.origin;
        const address = universalAddress.address;
        const chainId = parseInt(universalAddress.chainId);

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

        const signedMessageBytes =
          await handleSendSignRequestToPushWallet(messageBytes);
        const signature = ethers.utils.hexlify(signedMessageBytes);

        setSignature(signature);

        return { signature, messageToSend, isLoading: false };
      } catch (error) {
        return {
          error:
            error instanceof Error ? error.message : "Unknown error occurred",
          isLoading: false,
        };
      } finally {
        setIsLoading(false);
      }
    },
    [universalAddress, handleSendSignRequestToPushWallet, setSignature],
  );

  return { signMessage };
};

// import { useCallback } from "react";
// import { ethers } from "ethers";
// import { SiweMessage, generateNonce } from "siwe";
// import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
// import { useRewardsContext } from "../../../context/rewardsContext";

// export const useSignMessageWithEthereum = () => {
//   const { universalAddress, handleSendSignRequestToPushWallet } =
//     usePushWalletContext();
//   const { setSignature } = useRewardsContext();

//   const signMessage = useCallback(
//     async (extraData: Record<string, any> = {}): Promise<any | null> => {
//       if (!universalAddress) {
//         console.error("Push Wallet is not connected");
//         return null;
//       }

//       const domain = window.location.hostname;
//       const nonce = generateNonce();
//       const origin = window.location.origin;
//       const address = universalAddress.address;
//       const chainId = parseInt(universalAddress.chainId); // Ensure it's a number

//       const messageToSend = {
//         domain,
//         address,
//         uri: origin,
//         version: "1",
//         chainId,
//         nonce,
//         issuedAt: new Date().toISOString(),
//         ...extraData,
//       };

//       const siweMessage = new SiweMessage(messageToSend);

//       const messageToSign = siweMessage.prepareMessage();
//       console.log("SIWE Message:\n", messageToSign, messageToSend);

//       try {
//         // Convert message to Uint8Array
//         const encoder = new TextEncoder();
//         const messageBytes = encoder.encode(messageToSign);

//         // Send signing request to Push Wallet
//         const signedMessageBytes =
//           await handleSendSignRequestToPushWallet(messageBytes);

//         // ✅ Convert Uint8Array to hex string
//         const signature = ethers.utils.hexlify(signedMessageBytes);

//         setSignature(signature);
//         return { signature, messageToSend };
//       } catch (error) {
//         console.error("Signing failed:", error);
//         return null;
//       }
//     },
//     [universalAddress, handleSendSignRequestToPushWallet],
//   );

//   return { signMessage };
// };
