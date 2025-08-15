// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from "react";
import styled, { css } from "styled-components";
import {
  PushWalletButton,
  usePushWalletContext,
} from "@pushprotocol/pushchain-ui-kit";

import { useGetUserRewardsDetails } from "../../queries";

import { device } from "../../config/globals";
import { Box, Button, Leaderboard, Points, Link } from "../../blocks";
import { DashboardSectionPoints } from "./DashboardSectionPoints";
import { walletToFullCAIP10 } from "../../helpers/web3helper";
import useMediaQuery from "../../hooks/useMediaQuery";

const RewardsDashboard: FC = () => {
  const isTablet = useMediaQuery(device.tablet);
  const { universalAddress } = usePushWalletContext();
  const caip10WalletAddress = walletToFullCAIP10(
    universalAddress?.address as string,
    universalAddress?.chainId,
    universalAddress?.chain,
  );

  const {
    data: userDetails,
    refetch,
    isLoading: isUserLoading,
    isFetching,
  } = useGetUserRewardsDetails({ caip10WalletAddress: caip10WalletAddress });

  const isLoading = isUserLoading;

  return (
    <RewardsDashboardWrapper>
      <HeaderSection>
        <Points />
        <HeaderText>
          <h2>Devnet Drop S2 has ended! Stay tuned for updates.</h2>
          <div>
            Thanks for participating in devnet drop. S3 coming soon!
          </div>
        </HeaderText>

        <Box width={{ ml: "100%" }}>
          <Box
            css={css`
              button {
                flex: 1;
                width: 100% !important;
                margin: 16px 0;
              }
            `}
          >
            {isTablet && (
              <PushWalletButton
                universalAddress={universalAddress}
                title="Connect Push Wallet"
                styling={{
                  fontFamily: "inherit",
                }}
              />
            )}

            <Link to="/rewards/leaderboard" title="Terms of Service">
              <Button
                variant="secondary"
                leadingIcon={<Leaderboard />}
                css={css`
                  @media ${device.mobileL} {
                    width: 100%;
                  }
                `}
              >
                Leaderboard
              </Button>
            </Link>
          </Box>
        </Box>
      </HeaderSection>

      <Box
        width="100%"
        display="flex"
        gap="spacing-sm"
        flexDirection={{ tb: "column", initial: "row" }}
      >
        <DashboardSectionPoints
          title="Total Points"
          points={userDetails?.totalPoints}
          rank={userDetails?.rank}
          isLoading={isLoading}
          isFetching={isFetching}
          data={userDetails}
          refetch={() => refetch()}
        />

        <DashboardSectionPoints
          title="Multiplier"
          multiplier={true}
          points={userDetails?.referralPoints}
          data={userDetails}
          isLoading={isLoading}
        />

        <DashboardSectionPoints
          title="Referral Points"
          points={userDetails?.referralPoints}
          usersInvited={userDetails?.usersInvited}
          isLoading={isLoading}
        />
      </Box>
    </RewardsDashboardWrapper>
  );
};

export default RewardsDashboard;

const RewardsDashboardWrapper = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1 0 0;
  gap: 32px;
  border-radius: 24px;
  background: radial-gradient(
    circle at top left,
    #c0fff7 0%,
    #c0fff7 20%,
    #d6adff 45%,
    #d6adff 70%,
    #c0fff7 100%
  );
  font-family: "FK Grotesk Neu";

  @media ${device.mobileL} {
    background: radial-gradient(
      174.95% 108.75% at 64.27% 0%,
      #d6adff 30.74%,
      #c0fff7 100%
    );
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media ${device.laptopM} {
    flex-direction: column;
    padding-top: 12px;
    gap: 16px;
  }
`;

const HeaderText = styled.div`
  align-self: flex-start;
  margin-right: auto;
  margin-left: 16px;

  h2 {
    color: #000;
    font-family: "FK Grotesk Neu";
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
    margin: 0;
  }

  div {
    color: #000;
    font-family: "FK Grotesk Neu";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin: 0;
  }

  @media ${device.laptopM} {
    text-align: center;
    align-self: center;
    margin-right: 0;
    margin-left: 0;
  }
`;
