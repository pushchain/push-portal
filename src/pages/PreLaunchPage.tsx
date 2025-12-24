import styled from "styled-components";
import { Helmet } from "react-helmet";
import { PreLaunch } from "../components/PreLaunch/PreLaunch";


const PreLaunchPage: React.FC = () => {
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
        <meta
          property="og:url"
          content="https://portal.push.com/rewards/pushplan/"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:image"
          content="https://portal.push.org/static/assets/previews/twitter-preview.webp"
        />
        <meta name="twitter:title" />
        <meta
          name="twitter:description"
          content="Earn rewards on Push Protocol"
        />
      </Helmet>

      <PreLaunchWrapper>
        <PreLaunch />
      </PreLaunchWrapper>
    </>
  );
};

export default PreLaunchPage;

const PreLaunchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: DM Sans, sans-serif;
`;
