import { useEffect, useState } from "react";
import { Box, Button, Discord, Text } from "../../blocks";
import { useGetUserDiscordDetails } from "../../queries";
import { useDiscordSession } from "../Rewards/hooks/useDiscordSession";
import { css } from "styled-components";

const DiscordVerification = () => {
  const params = new URLSearchParams(location.hash.substring(1));
  const access_token = params.get("access_token");

  const storedToken = useDiscordSession();
  const [token, setToken] = useState(storedToken);

  const { data: userDiscordDetails } = useGetUserDiscordDetails(
    token as string,
  );

  useEffect(() => {
    if (storedToken) setToken(storedToken);
  }, [storedToken]);

  const handleContinueVerification = () => {
    if (userDiscordDetails) {
      console.log("✅ Discord User Details:", userDiscordDetails);
      localStorage.setItem("username", userDiscordDetails.username);
      if (userDiscordDetails.email) {
        localStorage.setItem("discord_email", userDiscordDetails.email);
      }
      window.close();
    }
  };

  if (!access_token) {
    window.close();
  }

  return (
    <Box
      width="100vw"
      display="flex"
      alignItems="center"
      height="100vh"
      justifyContent="center"
      css={css`
        z-index: 99;
        `}
    >
      <Box
        display="flex"
        padding="spacing-md"
        flexDirection="column"
        alignItems="center"
        width="360px"
        gap="spacing-xs"
        backgroundColor="surface-primary"
        borderRadius="radius-md"
        border="border-sm solid stroke-secondary"
      >
        <Discord width={48} height={48} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Text variant="h4-semibold" color="text-primary">
            Complete Verification
          </Text>
          <Text variant="bs-regular" color="text-tertiary">
            Continue to complete the verification process.
          </Text>
        </Box>

        <Button onClick={handleContinueVerification}>Continue</Button>
      </Box>
    </Box>
  );
};

export { DiscordVerification };
