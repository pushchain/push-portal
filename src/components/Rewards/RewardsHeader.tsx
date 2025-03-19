import React, { FC, useState } from "react";
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
import { AiOutlineClose } from "react-icons/ai";
import useMediaQuery from "../../hooks/useMediaQuery";
import { device } from "../../config/globals";
import { BsList } from "react-icons/bs";

// Dummy

const RewardsHeader: FC = () => {
  const baseURL = "/";
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const { universalAddress } = usePushWalletContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTablet = useMediaQuery(device.tablet);

  const GoToHome = () => {
    navigate(baseURL);
    setIsMenuOpen(false);
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

      {isTablet ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="fit-content"
          cursor="pointer"
          onClick={() => setIsMenuOpen(true)}
        >
          <BsList size={28} color={darkMode ? "#fff" : "#000"} />
        </Box>
      ) : (
        <PushWalletButton
          universalAddress={universalAddress}
          title="Connect Push Wallet"
          styling={{
            width: "fit-content",
            fontFamily: "inherit",
          }}
        />
      )}

      {isMenuOpen && isTablet && (
        <Box
          position="fixed"
          backgroundColor="surface-primary"
          display="flex"
          flexDirection="column"
          alignItems="center"
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            z-index: 99999999;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            padding: 24px;
            box-sizing: border-box;
          `}
        >
          <Box
            cursor="pointer"
            width="100%"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            onClick={() => setIsMenuOpen(false)}
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
            <AiOutlineClose size={32} color={darkMode ? "#fff" : "#000"} />
          </Box>

          <PushWalletButton
            universalAddress={universalAddress}
            title="Connect Push Wallet"
            styling={{
              width: "100%",
              margin: "48px 0",
              fontFamily: "inherit",
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default RewardsHeader;
