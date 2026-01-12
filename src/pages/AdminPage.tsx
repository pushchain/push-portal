import styled from "styled-components";
import { Helmet } from "react-helmet";
import { PointsVault } from "../components/pointsVault";


const AdminPage: React.FC = () => {
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
          content="https://portal.push.com/rewards/controls/"
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

      <AdminPageWrapper>
        <PointsVault />
      </AdminPageWrapper>
    </>
  );
};

export default AdminPage;

const AdminPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: DM Sans, sans-serif;
`;
