// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from "react";
import { css } from "styled-components";

import { Box, Text } from "../../blocks";

const LeaderboardHeader: FC = () => {

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      flexDirection={{ initial: "column", tb: "column" }}
      css={css`
            border-radius: 32px;
            border: 1px solid rgba(255, 255, 255, 0.40);
            background: #F1D5FF;
            padding: 50px 0px;
            box-sizing: border-box;
        `}
    >
      <Text css={css`
        background: linear-gradient(180deg, #000 29.25%, #7D238C 75%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 48px;
        `}>
          Top the Leaderboards
      </Text>

      <Text variant="h4-regular" textAlign="center" css={css`
            width: 660px;
            color: #000;
        `}>
        Rise up the leaderboards to be a part of Exclusive Rewards Staking Pool at TGE with special rewards.
      </Text>
    </Box>
  );
};

export { LeaderboardHeader };
