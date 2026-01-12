import { useEffect } from "react";
import {
  useGetUserRewardsDetails,
  useGetUserXP,
  useUpdateUserXP,
} from "../../../queries";
import { usePushWalletContext } from "@pushchain/ui-kit";
import { walletToFullCAIP10 } from "../../../helpers/web3helper";
import { useRewardsContext } from "../../../context/rewardsContext";

export const useRefreshUserXP = () => {
  const { universalAccount } = usePushWalletContext();
  const { setIsXPRefreshCompleted } = useRewardsContext();

  const account = universalAccount?.address as string;
  const caip10WalletAddress = walletToFullCAIP10(
    account,
    universalAccount?.chain,
  );

  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  const { refetch: refetchXP } = useGetUserXP({
    userId: userDetails?.userId as string,
  });
  const { mutate, isPending } = useUpdateUserXP();

  useEffect(() => {
    if (!userDetails?.userId || !account) return;

    mutate(
      { userId: userDetails?.userId },
      {
        onSuccess: () => {
          console.log("User XP updated successfully");
          setIsXPRefreshCompleted(true);
          refetchXP();
        },
        onError: (error) => {
          console.error("Failed to update XP:", error);
        },
      },
    );
  }, [userDetails?.userId, account]);

  return { isPending, refreshXP: mutate };
};
