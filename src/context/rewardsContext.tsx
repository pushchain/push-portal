import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthModalContextType {
  isAuthModalVisible: boolean;
  setIsAuthModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isLocked: boolean;
  setIsLocked: React.Dispatch<React.SetStateAction<boolean>>;
  isVerifyClicked: boolean;
  setIsVerifyClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isXPRefreshCompleted: boolean;
  setIsXPRefreshCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(
  undefined,
);

export const RewardsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // context state for modal visibility option
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
  // context state for locked status in rewards activities
  const [isLocked, setIsLocked] = useState(true);
  // context state for current rewards login status(manual or auto, manual if verify button is clicked, and auto - on wallet conect)
  const [isVerifyClicked, setIsVerifyClicked] = useState(false);
  // context state for if refresh xp api is done and successful
  const [isXPRefreshCompleted, setIsXPRefreshCompleted] = useState(false);

  return (
    <AuthModalContext.Provider
      value={{
        isAuthModalVisible,
        setIsAuthModalVisible,
        isLocked,
        setIsLocked,
        isVerifyClicked,
        setIsVerifyClicked,
        isXPRefreshCompleted,
        setIsXPRefreshCompleted,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export const useRewardsContext = () => {
  const context = useContext(AuthModalContext);
  if (context === undefined) {
    throw new Error(
      "useRewardsContext must be used within an RewardsContextProvider",
    );
  }
  return context;
};
