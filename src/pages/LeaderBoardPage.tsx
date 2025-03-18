import styled from "styled-components";
import { Helmet } from "react-helmet";

import RewardsHeader from "../components/Rewards/RewardsHeader";
import Leaderboard from "../components/Leaderboard/Leaderboard";

import OGPreviewImg from "../../static/assets/website/preview/og-preview.webp";
import TwitterImg from "../../static/assets/website/preview/twitter-preview.webp";

const LeaderBoardPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Push Rewards</title>
        <meta property="og:title" content="Push Rewards" />
        <meta
          property="og:description"
          content="Earn rewards on Push Protocol"
        />
        <meta property="og:image" content={OGPreviewImg} />
        <meta property="og:url" content="https://yourwebsite.com/rewards" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:image" content={TwitterImg} />
        <meta name="twitter:title" content="Push Rewards" />
        <meta
          name="twitter:description"
          content="Earn rewards on Push Protocol"
        />
      </Helmet>

      <LeaderBoardWrapper>
        <RewardsHeader />
        <Leaderboard />
      </LeaderBoardWrapper>
    </>
  );
};

export default LeaderBoardPage;

const LeaderBoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "FK Grotesk Neue";
`;
