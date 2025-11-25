// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from "react";
import { css } from "styled-components";

import { Box, Tabs } from "../../blocks";
import { LeaderBoardSection } from "./LeaderBoardSection";
import { LeaderboardHeader } from "./LeaderboardHeader";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../structure/Footer";

const Leaderboard: FC = () => {
  const location = useLocation();

  const season = location?.pathname?.includes("s1") ? "S1" : "S2";

  const navigate = useNavigate();

  const handleSetActiveTab = (season) => {
    navigate(`/rewards/leaderboard${season === "S1" ? "-s1" : ""}`);
  };

  return (
    <Box
      display="flex"
      width={{ initial: "1200px", ll: "calc(100% - 32px)", ml: "100%" }}
      flexDirection="column"
      gap="spacing-md"
      height={{ initial: "calc(100vh - 130px)", ml: "calc(100vh - 80px)" }}
      padding={{ ml: "spacing-sm" }}
      css={css`
        margin: var(--spacing-md) auto;
        box-sizing: border-box;
      `}
    >
      <LeaderboardHeader />
      <Box
        backgroundColor="surface-primary"
        padding="spacing-md"
        borderRadius="radius-md"
        overflow="hidden"
        width={{ ml: "100%" }}
        css={css`
          box-sizing: border-box;
        `}
      >
        <Tabs
          items={[
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
