import React, { useState } from "react";

import { Alert, Box } from "../../../src/blocks";

import SendTestTxCard from "./SendTextTxCard";
import UniversalChessCard from "./ UniversalChessCard";
import AnyChainEmailCard from "./AnyChainEmailCard";
import RumorsAppCard from "./RumorsAppCard";

const RewardsContent = () => {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Box display="flex" flexDirection="column" gap="spacing-md">
      {errorMessage && (
        <Box width="-webkit-fill-available">
          <Alert
            heading={errorMessage}
            variant="error"
            onClose={() => setErrorMessage("")}
          />
        </Box>
      )}
      <Box
        display="flex"
        flexDirection={{ initial: "row", tb: "column" }}
        gap="spacing-md"
      >
        <SendTestTxCard
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <UniversalChessCard
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
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
