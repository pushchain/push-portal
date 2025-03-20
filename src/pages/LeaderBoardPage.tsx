import dynamic from "next/dynamic";
import styled from "styled-components";

const RewardsHeader = dynamic(
  () => import("../components/Rewards/RewardsHeader"),
  {
    ssr: false,
  },
);

const Leaderboard = dynamic(
  () => import("../components/Leaderboard/Leaderboard"),
  {
    ssr: false,
  },
);

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
  font-family: "FK Grotesk Neu";
`;
