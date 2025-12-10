// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from "react";
import { css } from "styled-components";

import { Box, Tabs } from "../../blocks";
import { LeaderBoardSection } from "./LeaderBoardSection";
import { LeaderboardHeader } from "./Header/LeaderboardHeader";
import { useLocation, useNavigate } from "react-router-dom";

import Footer from "../../structure/Footer";
import { device } from "../../config/globals";

const Leaderboard: FC = () => {
  const location = useLocation();

  const getSeason = () => {
    if (location?.pathname?.includes("s1")) return "S1";
    if (location?.pathname?.includes("s2")) return "S2";
    return "S3";
  };

  const season = getSeason();
  const navigate = useNavigate();

  const handleSetActiveTab = (season) => {
    if (season === "S3") {
      navigate("/rewards/leaderboard");
    } else if (season === "S2") {
      navigate("/rewards/leaderboard-s2");
    } else {
      navigate("/rewards/leaderboard-s1");
    }
  };

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      height={{ initial: "calc(100vh - 130px)", ml: "calc(100vh - 80px)" }}
      css={css`
        margin: var(--spacing-md) auto;
        box-sizing: border-box;
        position: relative;

        @media ${device.tablet} {
            margin: var(--spacing-none) auto;
        }
      `}
    >
      <Box css={css`
          position: relative;
          z-index: 2;
        `}>
        <LeaderboardHeader />
      </Box>
      <Box
        padding="spacing-md"
        overflow="hidden"
        width={{ ml: "100%" }}
        css={css`
          box-sizing: border-box;
          margin-top: -20px;
          position: relative;
          z-index: 1;

          border-radius: 0 0 32px 32px;
          border: 1px solid rgba(171, 70, 248, 0.40);
          background: rgba(0, 0, 0, 0.10);
          background-blend-mode: plus-lighter;
          box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
          backdrop-filter: blur(10px);
        `}
      >
        <Tabs
          items={[
            {
              key: "S3",
              label: "Season 3",
              children: <LeaderBoardSection />,
            },
            {
              key: "S2",
              label: "Season 2",
              children: <LeaderBoardSection />,
            },
            {
              key: "S1",
              label: "Season 1",
              children: <LeaderBoardSection />,
            },
          ]}
          activeKey={season}
          onChange={(activeKey) => handleSetActiveTab(activeKey)}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Leaderboard;
