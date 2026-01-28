import { useAuthHeaders } from "./useAuthHeaders";
import { useGetSpinStatus } from "../../../queries/hooks";

export const useSpinStatus = () => {
  const { authHeaders, isSigningMessage, hasSigned, signAndStore } = useAuthHeaders();

  const {
    data: spinStatus,
    isLoading: isLoadingSpinStatus,
    refetch,
    error,
  } = useGetSpinStatus(authHeaders);

  return {
    spinStatus,
    isLoading: isLoadingSpinStatus || isSigningMessage,
    hasSigned,
    error,
    refetch,
    signAndStore,
    authHeaders,
  };
};
