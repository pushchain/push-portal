import { useState, useEffect, useCallback } from "react";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { useSignMessageWithEthereum } from "./useSignMessage";
import { AuthHeaders } from "../../../queries/types";
import { parseCAIP } from "../../../helpers/web3helper";

const AUTH_HEADERS_KEY = "push_auth_headers";

const getStoredAuthHeaders = (walletAddress: string): AuthHeaders | null => {
  try {
    const stored = sessionStorage.getItem(AUTH_HEADERS_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored);
    if (parsed.walletAddress?.includes(walletAddress)) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
};

const storeAuthHeaders = (authHeaders: AuthHeaders) => {
  try {
    sessionStorage.setItem(AUTH_HEADERS_KEY, JSON.stringify(authHeaders));
  } catch (err) {
    console.error("Failed to store auth headers:", err);
  }
};

const clearStoredAuthHeaders = () => {
  try {
    sessionStorage.removeItem(AUTH_HEADERS_KEY);
  } catch (err) {
    console.error("Failed to clear auth headers:", err);
  }
};

export const useAuthHeaders = () => {
  const [authHeaders, setAuthHeaders] = useState<AuthHeaders | undefined>();
  const [isSigningMessage, setIsSigningMessage] = useState(false);

  const { universalAccount } = usePushWalletContext();
  const { signMessage } = useSignMessageWithEthereum();

  const walletAddress = universalAccount?.address;
  const chain = universalAccount?.chain;
  const { chainId } = parseCAIP(chain);

  const hasSigned = !!authHeaders;

  useEffect(() => {
    if (walletAddress) {
      const stored = getStoredAuthHeaders(walletAddress);
      if (stored) {
        setAuthHeaders(stored);
      }
    }
  }, [walletAddress]);

  useEffect(() => {
    if (!universalAccount) {
      setAuthHeaders(undefined);
      clearStoredAuthHeaders();
    }
  }, [universalAccount]);

  const signAndStore = useCallback(async () => {
    if (!universalAccount || authHeaders || isSigningMessage) return null;

    setIsSigningMessage(true);

    try {
      const { signature, messageToSend, error } = await signMessage();

      if (error || !signature || !messageToSend) return null;

      const newAuthHeaders: AuthHeaders = {
        message: messageToSend,
        signature,
        walletAddress: `eip155:${chainId}:${walletAddress}`,
      };

      setAuthHeaders(newAuthHeaders);
      storeAuthHeaders(newAuthHeaders);

      return newAuthHeaders;
    } finally {
      setIsSigningMessage(false);
    }
  }, [
    universalAccount,
    authHeaders,
    isSigningMessage,
    signMessage,
    chainId,
    walletAddress,
  ]);

  useEffect(() => {
    if (!universalAccount) return;
    if (authHeaders) return;
    if (isSigningMessage) return;

    signAndStore();
  }, [universalAccount, authHeaders, isSigningMessage, signAndStore]);

  const clearAuthHeaders = useCallback(() => {
    setAuthHeaders(undefined);
    clearStoredAuthHeaders();
  }, []);

  return {
    authHeaders,
    isSigningMessage,
    hasSigned,
    signAndStore,
    clearAuthHeaders,
  };
};
