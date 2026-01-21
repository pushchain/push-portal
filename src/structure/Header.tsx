import React, { FC } from "react";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

import { PushUniversalAccountButton, usePushWalletContext } from "@pushchain/ui-kit";

import useMediaQuery from "../hooks/useMediaQuery";
import { device } from "../config/globals";

import { Box } from "../../src/blocks";
import ChainLogoDark from "/static/assets/website/chain/ChainLogoDark.svg";


interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ toggleSidebar }) => {
  const baseURL = "/";
  const navigate = useNavigate();
  const { universalAccount } = usePushWalletContext();

  const isTablet = useMediaQuery(device.tablet);
  const isLaptop = useMediaQuery(device.laptopL);

  const GoToHome = () => {
    navigate(baseURL);
  };

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
        {!isTablet && (
               <PushUniversalAccountButton
                 universalAccount={universalAccount}
                 title="Connect Account"
                 styling={{
                   width: "fit-content",
                   fontFamily: "DM Sans !important",
                   margin: "0 0 0 auto",
                   borderRadius: "12px"
                 }}
               />
             )}

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
