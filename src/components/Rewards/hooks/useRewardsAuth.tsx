// // react and other libraries
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// // third party libraries
// import { usePushWalletContext } from "@pushchain/ui-kit";

// // helpers
// import { walletToPCAIP10 } from "../../../helpers/web3helper";
// import { useAccountContext } from "../../../context/accountContext";
// // import { generateVerificationProof } from "../utils/generateVerificationProof";
// import { isUserNotFound } from "../utils/resolveError";

// // hooks
// import { useGetUserRewardsDetails } from "../../../queries/hooks/rewards";

// // types
// // import { useRewardsContext } from "../../../context/rewardsContext";
// import { checkUnlockProfileErrors } from "../../../components/unlockProfile/UnlockProfile.utils";

// const useRewardsAuth = () => {
//   const location = useLocation();
//   const { universalAccount } = usePushWalletContext();
//   const account = universalAccount?.address;
//   const isWalletConnected = Boolean(universalAccount?.address);
//   const caip10WalletAddress = walletToPCAIP10(
//     universalAccount?.address as string,
//   );

//   const { userPushSDKInstance } = useAccountContext();

//   // const { isAuthModalVisible, setIsAuthModalVisible } = useRewardsContext();

//   const [isVerifyClicked, setIsVerifyClicked] = useState(false);
//   const [handleVerify, setHandleVerify] = useState(false);
//   const activeRoute = location.pathname == "/rewards";

//   const {
//     data: userDetails,
//     status,
//     error,
//   } = useGetUserRewardsDetails({
//     caip10WalletAddress: caip10WalletAddress,
//   });

//   // rewards activity connect function
//   const connectWallet = () => {
//     setHandleVerify(false);
//     setIsVerifyClicked(true);

//     if (!isWalletConnected) {
//       // connect();
//     }
//   };

//   useEffect(() => {
//     if (!isWalletConnected || !account) return;
//   }, [status, isVerifyClicked, account, isWalletConnected]);

//   return {
//     status,
//     connectWallet,
//     handleVerify,
//     userDetails,
//   };
// };

// export { useRewardsAuth };
