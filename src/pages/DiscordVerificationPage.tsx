import styled from "styled-components";
import { DiscordVerification } from "../../src/components/discordVerification/DiscordVerification";

export const DiscordVerificationPage = () => {
  return (
    <Wrapper>
      <DiscordVerification />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: DM Sans, sans-serif;
`;
