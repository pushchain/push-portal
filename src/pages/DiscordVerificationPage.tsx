import styled from "styled-components";
import dynamic from "next/dynamic";

const DiscordVerification = dynamic(
  () => import("../components/discordVerification/DiscordVerification"),
  { ssr: false },
);

const DiscordVerificationPage = () => {
  return (
    <Wrapper>
      <DiscordVerification />
    </Wrapper>
  );
};

export default DiscordVerificationPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "FK Grotesk Neu";
`;
