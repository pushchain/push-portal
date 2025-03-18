import styled from "styled-components";
import { Helmet } from "react-helmet";

import Rewards from "../components/Rewards/Rewards";
import RewardsHeader from "../components/Rewards/RewardsHeader";

import OGPreviewImg from "../../static/assets/website/preview/og-preview.webp";
import TwitterImg from "../../static/assets/website/preview/twitter-preview.webp";

const RewardsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Push Rewards</title>
        <meta property="og:title" content="Push Rewards" />
        <meta
          property="og:description"
          content="Earn rewards on Push Protocol"
        />
        <meta
          property="og:image"
          content="https://portal.push.org/static/assets/previews/og-preview.webp"
        />
        <meta property="og:url" content="https://portal.push.org/rewards" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:image"
          content="https://portal.push.org/static/assets/previews/twitter-preview.webp"
        />
        <meta name="twitter:title" content="Push Rewards" />
        <meta
          name="twitter:description"
          content="Earn rewards on Push Protocol"
        />
      </Helmet>
      <RewardsWrapper>
        <RewardsHeader />
        <Rewards />
      </RewardsWrapper>
    </>
  );
};

export default RewardsPage;

const RewardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "FK Grotesk Neue", Helvetica, sans-serif;
`;
