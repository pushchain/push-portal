import React, { FC } from "react";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

import { PushUniversalAccountButton, usePushWalletContext } from "@pushchain/ui-kit";

import useMediaQuery from "../hooks/useMediaQuery";
import { device } from "../config/globals";

import { Box, LevelBadge, Multiplier, RewardsCoin, SeasonThreePoints, Text } from "../../src/blocks";
import ChainLogoDark from "/static/assets/website/chain/ChainLogoDark.svg";
import { useGetSeasonThreeUserByWallet } from "../queries";
import { walletToFullCAIP10 } from "../helpers/web3helper";


interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ toggleSidebar }) => {
  const baseURL = "/";
  const navigate = useNavigate();
  const { connectionStatus, universalAccount } = usePushWalletContext();

  const isTablet = useMediaQuery(device.tablet);
  const isLaptop = useMediaQuery(device.laptopL);

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const GoToHome = () => {
    navigate(baseURL);
  };

  const { data: userSeasonThreeDetails } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress
  })



  console.log(userSeasonThreeDetails, 'details');

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding="spacing-sm"
      alignItems="center"
      css={css`
        box-sizing: border-box;
        z-index: 99;
      `}
    >
      <Box
        cursor="pointer"
        onClick={GoToHome}
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
          <img src={ChainLogoDark} width={150} />
        🍩
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        {!isTablet && connectionStatus == 'connected' && userSeasonThreeDetails  &&
          (<Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="spacing-xxs"
              margin="spacing-none spacing-sm spacing-none spacing-none"
              css={css`
                    height: 40px;
                  `}
            >
          <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs"><LevelBadge width={32} /> <Text variant="h5-bold">Lv. { userSeasonThreeDetails?.level }</Text></Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs"><Multiplier width={32} /> <Text variant="h5-bold">{ userSeasonThreeDetails?.permaMultiplier }x</Text></Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap="spacing-xxs"><SeasonThreePoints width={32} /> <Text variant="h5-bold">{ userSeasonThreeDetails?.totalPoints }</Text></Box>
        </Box>)}

        {!isTablet && (<PushUniversalAccountButton />)}

        {isLaptop &&
          (<Box
            margin="spacing-none spacing-none spacing-none spacing-sm"
            cursor="pointer"
            onClick={toggleSidebar}>
            <FaBars color="#fff"/>
          </Box>)}
      </Box>
    </Box>
  );
};

export default Header;
