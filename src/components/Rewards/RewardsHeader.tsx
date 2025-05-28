import React, { FC } from "react";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";

import {
  PushWalletButton,
  usePushWalletContext,
} from "@pushprotocol/pushchain-ui-kit";

import { useTheme } from "../../context/themeContext";
import { Box, LightFilled, MoonFilled } from "../../../src/blocks";
import ChainLogo from "../../../static/assets/website/chain/ChainLogo.svg";
import ChainLogoDark from "/static/assets/website/chain/ChainLogoDark.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import { device } from "../../config/globals";

// Dummy

const RewardsHeader: FC = () => {
  const baseURL = "/";
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const { universalAddress } = usePushWalletContext();
  const isTablet = useMediaQuery(device.tablet);

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
      backgroundColor="surface-secondary"
      css={css`
        box-sizing: border-box;
      `}
    >
      <Box cursor="pointer" onClick={GoToHome}>
        {darkMode ? (
          <img src={ChainLogoDark} width={150} />
        ) : (
          <img src={ChainLogo} width={150} />
        )}
      </Box>

      <Box
        display="flex"
        alignItems="center"
        css={css`
          margin: 0 16px 0 auto;
        `}
        onClick={toggleTheme}
        cursor="pointer"
      >
        {darkMode ? (
          <LightFilled size={24} color="icon-primary" />
        ) : (
          <MoonFilled size={24} />
        )}
      </Box>

      {!isTablet && (
        <PushWalletButton
          universalAddress={universalAddress}
          title="Connect Push Wallet"
          styling={{
            width: "fit-content",
            fontFamily: "inherit",
          }}
        />
      )}
    </Box>
  );
};

export default RewardsHeader;
