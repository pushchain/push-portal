import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";

import { ethers } from "ethers";
import { PushNetwork } from "@pushprotocol/push-chain";
import { ENV } from "@pushprotocol/push-chain/src/lib/constants";
import { usePushWalletContext } from "@pushprotocol/pushchain-ui-kit";
import { CONSTANTS, ProgressHookType, PushAPI } from "@pushprotocol/restapi";

import {
  toChecksumAddress,
  traceStackCalls,
  walletToPCAIP10,
} from "../helpers/web3helper";
import { LOADER_SPINNER_TYPE } from "../components/reusables/loaders/LoaderSpinner";
import appConfig from "../config/index";

// Define a type for the context value
type AccountContextType = {
  account: string | null;
  pushNetwork: PushNetwork | null;
  handleSendSignRequestToPushWallet: (data: Uint8Array) => Promise<Uint8Array>;
  removePGPKeyForUser: any;
  handleConnectWalletAndEnableProfile: (
    props: handleConnectWalletAndEnableProfileProps,
  ) => Promise<PushAPI>;
  isUserProfileUnlocked: boolean;
  setUserProfileUnlocked: (isUserProfileUnlocked: boolean) => void;
  blockedLoading: BlockedLoadingI;
  setBlockedLoading: (blockedLoading: BlockedLoadingI) => void;
  userPushSDKInstance: PushAPI;
  setUserPushSDKInstance: (userPushSDKInstance: PushAPI) => void;
  initializePushSDK: (wallet) => Promise<void>;
};

interface User {
  did: string;
  wallets: string;
  profilePicture: string | null;
  publicKey: string;
  encryptedPrivateKey: string;
  encryptionType: string;
  signature: string;
  sigType: string;
  about: string | null;
  name: string | null;
  numMsg: number;
  allowedNumMsg: number;
  linkedListHash?: string | null;
  isAdmin?: boolean;
}

interface ConnectedUser extends User {
  privateKey: string | null;
}

type handleConnectWalletAndEnableProfileProps = {
  showToast?: boolean;
  toastMessage?: string;
  wallet?: any;
  remember?: boolean;
};

interface onboardingProgressI {
  enabled: boolean;
  hookInfo: ProgressHookType;
  spinnerType: number;
  progress: number;
  errorMessage?: string;
}

interface BlockedLoadingI {
  enabled: boolean;
  title: string;
  spinnerEnabled?: boolean;
  spinnerSize?: number;
  spinnerType?: number;
  progressEnabled?: boolean;
  progress?: number;
  progressNotice?: string;
  errorMessage?: string;
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

// Create context with the defined type
const AccountContext = createContext<AccountContextType | undefined>(undefined);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  // To ensure intialize via [account] is not run on certain logic points
  const shouldInitializeRef = useRef(true); // Using a ref to control useEffect execution
  const { universalAddress, handleSendSignRequestToPushWallet } =
    usePushWalletContext();
  const [pushNetwork, setPushNetwork] = useState<PushNetwork | null>(null);
  // const [pgpPvtKey, setPgpPvtKey] = useState(null);
  const [userPushSDKInstance, setUserPushSDKInstance] = useState(null);
  // const [connectedUser, setConnectedUser] = useState<ConnectedUser>();
  const [isUserProfileUnlocked, setUserProfileUnlocked] =
    useState<boolean>(false);
  const [blockedLoading, setBlockedLoading] = useState<BlockedLoadingI>({
    enabled: false,
    title: null,
  });

  const provider = window.ethereum
    ? new ethers.providers.Web3Provider(window.ethereum)
    : null;

  const handleConnectWalletAndEnableProfile = async ({
    remember = false,
    showToast = false,
    toastMessage = undefined,
    wallet,
  }: handleConnectWalletAndEnableProfileProps) => {
    shouldInitializeRef.current = false;
    // Directly modify the ref to disable useEffect execution

    // if (showToast) {
    //   web3onboardToast.showMessageToast({
    //     toastMessage: toastMessage || 'Please connect your wallet to continue',
    //     toastTitle: 'Connect Wallet',
    //     toastType: 'ERROR',
    //     getToastIcon: (size) => <MdError size={size} color='red' />,
    //   });
    // }

    let user;
    if (wallet) {
      user = await initializePushSDK(wallet);
    }

    if (remember) {
      if (user && !user.readmode()) {
        storePGPKeyForUser(user.account, user.decryptedPgpPvtKey);
      }
    }

    // reset the ref to true
    shouldInitializeRef.current = true; // Directly modify the ref to disable useEffect execution
    setUserProfileUnlocked(true);
    return user;
  };

  // Remove PGP key from local storage
  const removePGPKeyForUser = (account: string) => {
    const key = getUniquePGPKey(account);
    localStorage.removeItem(key);
  };

  // Store PGP key in local storage
  const storePGPKeyForUser = (account: string, pgpPvtKey: string) => {
    const key = getUniquePGPKey(account);
    localStorage.setItem(key, pgpPvtKey);
  };

  // Retrieve PGP key from local storage
  const retrieveUserPGPKeyFromStorage = (account: string) => {
    const key = getUniquePGPKey(account);
    const value = localStorage.getItem(key);

    if (isPGPKey(value)) {
      setUserProfileUnlocked(true);

      return value;
    }

    return null;
  };

  // Append unique key for PGP key
  const getUniquePGPKey = (account: string) => {
    const address = walletToPCAIP10(account);
    const uniqueKey = `push-user-${address}-pgp`;
    return uniqueKey;
  };

  // Check if the string is a PGP key
  const isPGPKey = (str: string | null) => {
    if (!str) return false;

    const pgpPublicKeyRegex =
      /-----BEGIN PGP PUBLIC KEY BLOCK-----[\s\S]*-----END PGP PUBLIC KEY BLOCK-----/;
    const pgpPrivateKeyRegex =
      /-----BEGIN PGP PRIVATE KEY BLOCK-----[\s\S]*-----END PGP PRIVATE KEY BLOCK-----/;

    return pgpPublicKeyRegex.test(str) || pgpPrivateKeyRegex.test(str);
  };

  const shouldCreateNewPushUser = async (checksumAddr: string, signer: any) => {
    // check if push sdk is already initialized with same account
    return !(
      userPushSDKInstance?.account === checksumAddr &&
      userPushSDKInstance?.env === appConfig.APP_ENV &&
      userPushSDKInstance?.signer === signer &&
      !userPushSDKInstance.readmode()
    );
  };

  const initializePushSdkReadMode = async () => {
    // traceStackCalls(); // Incase we want to see what function called this

    // get decrypted pgp keys from local storage
    const decryptedPGPKeys = retrieveUserPGPKeyFromStorage(
      universalAddress?.address,
    );

    // Return if new push user is not necessary
    if (
      !shouldCreateNewPushUser(
        universalAddress?.address,
        decryptedPGPKeys
          ? provider?.getSigner(universalAddress?.address)
          : null,
      )
    )
      return userPushSDKInstance;

    // call initializePushSDK if decryptedPGPKeys is not null
    if (decryptedPGPKeys) {
      console.debug(
        "src::contexts::AppContext::initializePushSdkReadMode::Called initializePushSDK()",
      );

      return initializePushSDK(universalAddress?.address);
    }

    // else initialize push sdk in read mode
    const userInstance = await PushAPI.initialize(null, {
      decryptedPGPPrivateKey: null,
      env: appConfig.APP_ENV as ENV,
      account: universalAddress?.address,
      alpha: { feature: ["SCALABILITY_V2"] },
    });

    // sets up stream in read mode
    await setupStream(userInstance);
    console.debug(
      "src::contexts::AppContext::initializePushSdkReadMode::User Instance Initialized",
      userInstance,
    );
    setUserPushSDKInstance(userInstance);
    return userInstance;
  };

  const initializePushSDK = async (wallet?: any) => {
    // convert address to checksum
    const currentAddress = toChecksumAddress(wallet);

    // Return if new push user is not necessary
    if (
      !shouldCreateNewPushUser(
        currentAddress,
        provider?.getSigner(currentAddress),
      )
    )
      return userPushSDKInstance;

    traceStackCalls();
    let userInstance;

    try {
      const web3Provider = provider;

      const librarySigner = web3Provider?.getSigner(currentAddress);
      const decryptedPGPKeys = retrieveUserPGPKeyFromStorage(currentAddress);

      if (decryptedPGPKeys) {
        userInstance = await PushAPI.initialize(librarySigner!, {
          decryptedPGPPrivateKey: decryptedPGPKeys,
          env: appConfig.APP_ENV as ENV,
          account: currentAddress,
          progressHook: onboardingProgressReformatter,
          alpha: { feature: ["SCALABILITY_V2"] },
        });
      } else {
        userInstance = await PushAPI.initialize(librarySigner!, {
          env: appConfig.APP_ENV as ENV,
          account: currentAddress,
          progressHook: onboardingProgressReformatter,
          alpha: { feature: ["SCALABILITY_V2"] },
        });
      }

      console.debug(
        "src::contexts::AppContext::initializePushSDK::User Intance Initialized",
        userInstance,
      );
      if (userInstance) {
        setBlockedLoading({
          enabled: false,
          title: "Push Profile Setup Complete",
          spinnerType: LOADER_SPINNER_TYPE.COMPLETED,
          progressEnabled: false,
          progress: 100,
        });
      }

      // connect stream as well
      await setupStream(userInstance);
      setUserPushSDKInstance(userInstance);
      return userInstance;
    } catch (error) {
      // Handle initialization error
      console.error(
        "src::contexts::AppContext::initializePushSDK::Error",
        error,
      );
      return null;
    }
  };

  const setupStream = async (userInstance: any) => {
    // Connect stream as well
    if (!userInstance.stream) {
      const stream = await userInstance.initStream([
        CONSTANTS.STREAM.CONNECT,
        CONSTANTS.STREAM.DISCONNECT,
        CONSTANTS.STREAM.CHAT,
        CONSTANTS.STREAM.NOTIF,
        CONSTANTS.STREAM.VIDEO,
      ]);

      await stream.connect();
      console.debug(
        "src::contexts::AppContext::setupStream::User Intance Stream Connected",
        userInstance,
      );
    }
  };

  // To reformat errors
  const onboardingProgressReformatter = (progressHook: ProgressHookType) => {
    const onboardingProgress: onboardingProgressI = {
      enabled: true,
      hookInfo: progressHook,
      spinnerType: LOADER_SPINNER_TYPE.PROCESSING,
      progress: 0,
      errorMessage: "",
    };

    if (progressHook) {
      switch (progressHook.progressId) {
        case "PUSH-CREATE-01":
          onboardingProgress.hookInfo.progressTitle = "Creating Push Profile";
          onboardingProgress.progress = 10;
          break;
        case "PUSH-CREATE-02":
          onboardingProgress.hookInfo.progressTitle =
            "1/3 - Profile Generation";
          onboardingProgress.progress = 25;
          break;
        case "PUSH-CREATE-03":
          onboardingProgress.hookInfo.progressTitle =
            "2/3 - Profile Encryption";
          onboardingProgress.progress = 50;
          break;
        case "PUSH-CREATE-04":
          onboardingProgress.hookInfo.progressTitle = "3/3 - Profile Sync";
          onboardingProgress.progress = 75;
          break;
        case "PUSH-CREATE-05":
          onboardingProgress.hookInfo.progressTitle = "Push Profile Created";
          onboardingProgress.progress = 99;
          break;
        case "PUSH-DECRYPT-01":
          onboardingProgress.hookInfo.progressTitle = "Decrypting Push Profile";
          break;
        case "PUSH-DECRYPT-02":
          onboardingProgress.enabled = false;
          onboardingProgress.hookInfo.progressTitle = "Push Profile Unlocked";
          break;
        // case "PUSH-UPGRADE-01":
        //     onboardingProgress.hookInfo.progressTitle = "1/4 - Profile Generation";
        //     onboardingProgress.progress = 35;
        //     break;
        case "PUSH-UPGRADE-02":
          onboardingProgress.hookInfo.progressTitle =
            "1/5 - Profile Generation";
          onboardingProgress.progress = 15;
          break;
        case "PUSH-AUTH-UPDATE-01":
          onboardingProgress.hookInfo.progressTitle =
            "2/5 - Decrypting Old Profile";
          onboardingProgress.progress = 30;
          break;
        case "PUSH-AUTH-UPDATE-02":
          onboardingProgress.hookInfo.progressTitle =
            "3/5 - New Profile Encryption";
          onboardingProgress.progress = 45;
          break;
        case "PUSH-AUTH-UPDATE-03":
          onboardingProgress.hookInfo.progressTitle = "4/5 - Profile Sync";
          onboardingProgress.progress = 60;
          break;
        case "PUSH-AUTH-UPDATE-04":
          onboardingProgress.hookInfo.progressTitle =
            "5/5 - Upgradation Complete";
          onboardingProgress.progress = 75;
          break;
        // case "PUSH-UPGRADE-03":
        //     onboardingProgress.hookInfo.progressTitle = "3/4 - New Profile Encryption";
        //     onboardingProgress.progress = 75;
        //     break;
        // case "PUSH-UPGRADE-04":
        //     onboardingProgress.hookInfo.progressTitle = "4/4 - Profile Sync";
        //     onboardingProgress.progress = 90;
        //     break;
        case "PUSH-UPGRADE-05":
          onboardingProgress.hookInfo.progressTitle = "Push Profile Upgraded";
          onboardingProgress.progress = 99;
          break;
        case "PUSH-PROFILE-UPDATE-01":
          onboardingProgress.hookInfo.progressTitle = "Updating User Profile";
          break;
        case "PUSH-PROFILE-UPDATE-02":
          onboardingProgress.enabled = false;
          onboardingProgress.hookInfo.progressTitle = "User Profile Updated";
          break;
        case "PUSH-ERROR-00":
          onboardingProgress.errorMessage =
            "The sign in was rejected by the user. You can still continue in read-only mode.";
          onboardingProgress.hookInfo.progressTitle =
            "Profile Unlock Unsuccessful";
          onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
          break;
        case "PUSH-ERROR-01":
          onboardingProgress.errorMessage = "Upgrade Failed";
          onboardingProgress.hookInfo.progressTitle = "Upgrade Failed";
          onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
          break;
        case "PUSH-ERROR-02":
          onboardingProgress.errorMessage = "Decrypting Keys Failed";
          onboardingProgress.hookInfo.progressTitle = "Decrypting Keys Failed";
          onboardingProgress.spinnerType = LOADER_SPINNER_TYPE.ERROR;
          break;
      }
    } else {
    }

    // This is a new user
    setBlockedLoading({
      enabled: onboardingProgress.enabled,
      title: onboardingProgress.hookInfo.progressTitle,
      spinnerType: onboardingProgress.spinnerType,
      progressEnabled: onboardingProgress.progress ? true : false,
      progress: onboardingProgress.progress,
      progressNotice: onboardingProgress.hookInfo.progressInfo,
      errorMessage: onboardingProgress.errorMessage,
    });
  };

  // Connect wallet and try to initialize push sdk
  useEffect(() => {
    // return if this ref is marke false
    if (!shouldInitializeRef.current) return;

    const initialize = async () => {
      // const librarySigner = await provider?.getSigner(account); // If you need to use librarySigner in async operations
      // if (!account || !appConfig?.appEnv) return;
      if (universalAddress) {
        await initializePushSdkReadMode();
      }
    };
    initialize();
  }, [universalAddress]);

  useEffect(() => {
    const setNetwork = async () => {
      try {
        const pushNetworkInstance = await PushNetwork.initialize(ENV.DEV);
        setPushNetwork(pushNetworkInstance);
      } catch (error) {
        console.error("Error initializing Push Network:", error);
      }
    };
    setNetwork();
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account: universalAddress ? universalAddress.address : null,
        pushNetwork,
        handleSendSignRequestToPushWallet,
        removePGPKeyForUser,
        handleConnectWalletAndEnableProfile,
        isUserProfileUnlocked,
        setUserProfileUnlocked,
        blockedLoading,
        setBlockedLoading,
        userPushSDKInstance,
        setUserPushSDKInstance,
        initializePushSDK,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};

export const useAccountContext = () => {
  const context = useContext(AccountContext);
  if (context === undefined) {
    throw new Error("useAccountContext must be used within an AccountProvider");
  }
  return context;
};

export default AccountContext;
