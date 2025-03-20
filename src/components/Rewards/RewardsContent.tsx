import React, { useState } from "react";

import { Alert, Box } from "../../../src/blocks";

import SendTestTxCard from "./SendTextTxCard";
import AnyChainEmailCard from "./AnyChainEmailCard";
import RumorsAppCard from "./RumorsAppCard";
import UniversalChessCard from "./UniversalChessCard";

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
        flexDirection={{ initial: "row", ml: "column" }}
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
        <AnyChainEmailCard
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
        <RumorsAppCard
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </Box>
    </Box>
  );
};

export default RewardsContent;
