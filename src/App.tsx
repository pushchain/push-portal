// React + Web3 Essentials
import React, { useState } from "react";

// External Packages
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createGlobalStyle, css } from "styled-components";
import {
  PushUI,
  PushUniversalWalletProvider,
  ProviderConfigProps,
} from '@pushchain/ui-kit';

import { getPreviewBasePath } from "../basePath";
import { ThemeProviderWrapper } from "./context/themeContext";
import { AccountProvider } from "./context/accountContext";
import { RewardsContextProvider } from "./context/rewardsContext";

import { blocksColors, Box, getBlocksCSSVariables } from "../src/blocks";
import NotFound from "./components/NotFound";
import RewardsPage from "./pages/RewardsPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import { DiscordVerificationPage } from "./pages/DiscordVerificationPage";
import PushPassPage from "./pages/PushPassPage";
import PushPassItemPage from "./pages/PushPassItemPage";

import { Sidebar } from "./components/sidebar";
import Header from "./structure/Header";
import SeasonBg from "../static/assets/website/shared/season-bg.webp";
import PreLaunchPage from "./pages/PreLaunchPage";
import AdminPage from "./pages/AdminPage";
import SquadsPage from "./pages/SquadsPage";


const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.header.bg} !important;
    padding-right: 0 !important;
  }
  :root{

    /* deprecated */
    /* Spaces */
    --s0: 0px;
    --s1: 4px;
    --s2: 8px;
    --s3: 12px;
    --s4: 16px;
    --s5: 20px;
    --s6: 24px;
    --s7: 28px;
    --s8: 32px;
    --s9: 36px;
    --s10: 40px;
    --s11: 44px;
    --s12: 48px;
    --s13: 52px;
    --s14: 56px;
    --s15: 60px;
    --s16: 64px;
    --s17: 68px;
    --s18: 72px;
    --s19: 76px;
    --s20: 80px;
    --s21: 84px;
    --s22: 88px;
    --s23: 92px;
    --s24: 96px;
    --s25: 100px;
    // TODO: Add more as needed

    /* deprecated */
    /* Border Radius */
    --r0: 0px;
    --r1: 4px;
    --r2: 8px;
    --r3: 12px;
    --r4: 16px;
    --r5: 20px;
    --r6: 24px;
    --r7: 28px;
    --r8: 32px;
    --r9: 36px;
    --r10: 40px;
    // TODO: Add more as needed

    /* deprecated */
    /* Colors */
    ${Object.entries(blocksColors)
      .map(([colorName, code]) => `--${colorName}: ${code};`)
      .join("")}

    /* Font Family */
      --font-family: "DM Sans", sans-serif;

    /* New blocks theme css variables*/
    ${(props) => getBlocksCSSVariables(props.theme.blocksTheme)}
  }

`;

const basename = getPreviewBasePath() || "/";

const queryClient = new QueryClient({});

const AppContent = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const hideSideBar = location.pathname === "/discord/verification" || location.pathname === "/admin/controls";
  const isAdminPage = location.pathname === "/admin/controls";

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      css={css``}
    >
      {!isAdminPage &&
        (<Box
        css={css`
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: url(${SeasonBg}) no-repeat center center fixed;
          background-size: cover;
          pointer-events: none;
          z-index: 0;
        `}
      />)}

      <Header toggleSidebar={toggleSidebar} />
      <Box
        display="flex"
        overflow="hidden"
        css={css`
          flex: 1;
        `}
      >
        {!hideSideBar && (
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        )}
        <Box
          width="100%"
          maxWidth={hideSideBar ? "100%" : "1200px"}
          padding={{
            initial: "spacing-none spacing-md",
            tb: "spacing-none spacing-xs",
          }}
          css={css`
            overflow-y: auto;
            overflow-x: hidden;
            margin: ${hideSideBar ? "0" : "0 auto"};
          `}
        >
          <Routes>
            {/*<Route path="/rewards" element={<Navigate to="/rewards/pre-launch" replace />} />*/}
            <Route path="/" element={<Navigate to="/rewards" replace />} />
            <Route path="/admin/controls" element={<AdminPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/rewards/pushpass" element={<PushPassPage />} />
            <Route path="/rewards/squads" element={<SquadsPage />} />
            {/*<Route path="/rewards/pre-launch" element={<PreLaunchPage />} />*/}
            <Route
              path="/rewards/pushpass/:id"
              element={<PushPassItemPage />}
            />
            <Route
              path="/rewards/leaderboard"
              element={<LeaderBoardPage />}
            />
            <Route
              path="/rewards/leaderboard-s2"
              element={<LeaderBoardPage />}
            />
            <Route
              path="/rewards/leaderboard-s1"
              element={<LeaderBoardPage />}
            />
            <Route
              path="/discord/verification"
              element={<DiscordVerificationPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

function App() {

  const walletConfig: ProviderConfigProps = {
    network: PushUI.CONSTANTS.PUSH_NETWORK.TESTNET,
    login: {
      email: false,
      google: false,
      wallet: {
        enabled: true,
      },
      appPreview: true,
    },
    modal: {
      loginLayout: PushUI.CONSTANTS.LOGIN.LAYOUT.SPLIT,
      connectedLayout: PushUI.CONSTANTS.CONNECTED.LAYOUT.HOVER,
      appPreview: true,
      connectedInteraction: PushUI.CONSTANTS.CONNECTED.INTERACTION.BLUR,
    },
    chainConfig: {
      rpcUrls: {
      },
    },
  };

  return (
    <ThemeProviderWrapper>
      {/* Global style */}
      <GlobalStyle />
      <PushUniversalWalletProvider
        config={walletConfig}
        themeMode={PushUI.CONSTANTS.THEME.DARK}
        themeOverrides={{
          '--pw-core-font-family': "'DM Sans', sans-serif",
          '--pwauth-btn-connected-bg-color': '#D548EC'
        }}
      >
        <AccountProvider>
          <RewardsContextProvider>
            <QueryClientProvider client={queryClient}>
              <Router basename={basename}>
                <AppContent />
              </Router>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </RewardsContextProvider>
        </AccountProvider>
      </PushUniversalWalletProvider>
    </ThemeProviderWrapper>
  );
}

export default App;
