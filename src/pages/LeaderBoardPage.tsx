import styled from "styled-components";

import RewardsHeader from "../components/Rewards/RewardsHeader";
import Leaderboard from "../components/Leaderboard/Leaderboard";

const LeaderBoardPage: React.FC = () => {
  return (
    <LeaderBoardWrapper>
      <RewardsHeader />
      <Leaderboard />
    </LeaderBoardWrapper>
  );
};

export default LeaderBoardPage;

const LeaderBoardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "FK Grotesk Neue";
`;
