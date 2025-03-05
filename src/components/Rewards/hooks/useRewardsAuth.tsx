// react and other libraries
import { useEffect, useState } from 'react';

// third party libraries
import { usePushWalletContext } from '@pushprotocol/pushchain-ui-kit';

// helpers
import { walletToPCAIP10 } from '../../../helpers/web3helper';
import { useAccountContext } from '../../../context/accountContext';
import { generateVerificationProof } from '../utils/generateVerificationProof';
import { isUserNotFound } from '../utils/resolveError';

// hooks
import { useGetUserRewardsDetails } from '../../../queries/hooks/rewards';

// types
import { useRewardsContext } from '../../../context/rewardsContext';
import { checkUnlockProfileErrors } from '../../../components/unlockProfile/UnlockProfile.utils';

const useRewardsAuth = () => {
  const { universalAddress } = usePushWalletContext();
  const account = universalAddress?.address;
  const isWalletConnected = Boolean(universalAddress?.address);
  const caip10WalletAddress = walletToPCAIP10(
    universalAddress?.address as string
  );

  const { userPushSDKInstance } = useAccountContext();

  const { isAuthModalVisible, setIsAuthModalVisible } = useRewardsContext();

  const [isVerifyClicked, setIsVerifyClicked] = useState(false);
  const [handleVerify, setHandleVerify] = useState(false);
  const activeTab = 'dashboard';

  const {
    data: userDetails,
    status,
    error,
  } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress,
  });

  // rewards activity connect function
  const connectWallet = () => {
    setHandleVerify(false);
    setIsVerifyClicked(true);
    setIsAuthModalVisible(false);

    if (!isWalletConnected) {
      // connect();
    }
  };

  // dashboard referral section unlock profile
  const connectUserWallet = () => {
    setIsAuthModalVisible(false);
    unlockProfile();
  };

  const showAuthModal = () => {
    setIsAuthModalVisible(true);
  };

  const hideAuthModal = () => {
    setIsAuthModalVisible(false);
  };

  // unlock profile function
  const unlockProfile = async () => {
    // get ref, send with user wallet. if ref is null, send only user wallet
    const ref = sessionStorage.getItem('ref');
    const data = {
      ...(ref && { refPrimary: ref }),
      userWallet: caip10WalletAddress,
    };

    // generate verification proof
    const verificationProof = await generateVerificationProof(
      data,
      userPushSDKInstance
    );

    //if verification proof is null, unlock push profile update to update userPUSHSDKInstance
    if (verificationProof === null || verificationProof === undefined) {
      if (
        isWalletConnected &&
        userPushSDKInstance &&
        userPushSDKInstance.readmode()
      ) {
        console.log('open modal');
        setIsAuthModalVisible(true);
      }
    }

    // if verify is clicked as an existing user, or verificationProof is present, handle verification
    if ((isVerifyClicked && userDetails) || verificationProof) {
      setHandleVerify(true);
    }
    setIsVerifyClicked(false);
  };

  useEffect(() => {
    if (!isWalletConnected || !userPushSDKInstance) return;

    // dashboard connect wallet flow
    if (status === 'error' && activeTab == 'dashboard' && !isVerifyClicked) {
      if (isUserNotFound(error)) {
        const errorExistsInUnlockProfile =
          checkUnlockProfileErrors(userPushSDKInstance);
        if (errorExistsInUnlockProfile || !isWalletConnected) return;
        unlockProfile();
      }
    }

    // user disconnects while modal is open
    if (status === 'pending' && !isWalletConnected) {
      setIsAuthModalVisible(false);
    }

    // rewards activity first user
    if (isVerifyClicked && status === 'error') {
      if (isUserNotFound(error)) {
        unlockProfile();
      }
    }

    // rewards activity existing user
    if (isVerifyClicked && userDetails && !handleVerify) {
      unlockProfile();
    }
  }, [status, isVerifyClicked, userPushSDKInstance]);

  useEffect(() => {
    if (!isWalletConnected) hideAuthModal();
  }, [isWalletConnected, account]);

  return {
    status,
    isAuthModalVisible,
    connectWallet,
    handleVerify,
    userDetails,
    connectUserWallet,
    hideAuthModal,
    showAuthModal,
  };
};

export { useRewardsAuth };
