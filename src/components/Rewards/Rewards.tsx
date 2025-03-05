import React, { FC } from "react";
import styled, { css } from "styled-components";
// import { usePushWalletContext } from '@pushprotocol/pushchain-ui-kit';
import { useAccountContext } from "../../../src/context/accountContext";
import { useRewardsContext } from "../../../src/context/rewardsContext";

import { device } from "../../config/globals";
import { useRewardsAuth } from "./hooks/useRewardsAuth";

import RewardsDashboard from "./RewardsDashboard";
import RewardsContent from "./RewardsContent";
import ReferralSection from "./ReferralSection";
import RewardsActivities from "./RewardsActivities";
import { Box } from "../../../src/blocks";
import UnlockProfileWrapper, {
  UNLOCK_PROFILE_TYPE,
} from "../../components/unlockProfile/UnlockProfileWrapper";
import RewardsFooter from "./RewardsFooter";

const Rewards: FC = () => {
  // const { universalAddress } = usePushWalletContext();
  const { userPushSDKInstance } = useAccountContext();
  const { isAuthModalVisible } = useRewardsContext();

  const { hideAuthModal } = useRewardsAuth();

  return (
    <RewardsWrapper>
      <RewardsDashboard />

      <RewardsActivities />

      <RewardsContent />

      <ReferralSection />

      {userPushSDKInstance &&
        userPushSDKInstance?.readmode() &&
        isAuthModalVisible && (
          <Box
            display="flex"
            justifyContent="center"
            width="-webkit-fill-available"
            alignItems="center"
            css={css`
              z-index: 99999;
            `}
          >
            <UnlockProfileWrapper
              type={UNLOCK_PROFILE_TYPE.MODAL}
              showConnectModal={isAuthModalVisible}
              onClose={() => hideAuthModal()}
              description="Unlock your profile to proceed."
            />
          </Box>
        )}

      <RewardsFooter />
    </RewardsWrapper>
  );
};

export default Rewards;

const RewardsWrapper = styled.div`
  width: 1200px;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.laptopM} {
    width: calc(100% - 32px);
  }
`;
