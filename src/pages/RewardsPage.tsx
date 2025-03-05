import styled from "styled-components";

import Rewards from "../components/Rewards/Rewards";
import RewardsHeader from "../components/Rewards/RewardsHeader";

const RewardsPage: React.FC = () => {
  return (
    <RewardsWrapper>
      <RewardsHeader />
      <Rewards />
    </RewardsWrapper>
  );
};

export default RewardsPage;

const RewardsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "FK Grotesk Neue", Helvetica, sans-serif;
`;
