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

const RewardsHeader: FC = () => {
  const baseURL = "/";
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  const { universalAddress } = usePushWalletContext();

  const GoToHome = () => {
    const targetUrl = baseURL;
    navigate(targetUrl);
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
        {darkMode ? <img src={ChainLogoDark} /> : <img src={ChainLogo} />}
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

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="fit-content"
        css={css`
          button {
            font-family: FK Grotesk Neue !important;
          }

          @media (max-width: 768px) {
            display: none;
          }
        `}
      >
        <PushWalletButton
          universalAddress={universalAddress}
          title="Connect Push Wallet"
          styling={{
            width: "inherit",
          }}
        />
      </Box>
    </Box>
  );
};

export default RewardsHeader;
