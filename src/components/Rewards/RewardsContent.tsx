import React from "react";

import { Box } from "../../../src/blocks";

import SendTestTxCard from "./SendTextTxCard";
import UniversalChessCard from "./ UniversalChessCard";
import AnyChainEmailCard from "./AnyChainEmailCard";
import RumorsAppCard from "./RumorsAppCard";

const RewardsContent = () => {
  return (
    <Box display="flex" flexDirection="column" gap="spacing-md">
      <Box
        display="flex"
        flexDirection={{ initial: "row", tb: "column" }}
        gap="spacing-md"
      >
        <SendTestTxCard />
        <UniversalChessCard />
      </Box>

      <Box
        display="flex"
        flexDirection={{ initial: "row", tb: "column" }}
        gap="spacing-md"
      >
        <AnyChainEmailCard />
        <RumorsAppCard />
      </Box>
    </Box>
  );
};

export default RewardsContent;
