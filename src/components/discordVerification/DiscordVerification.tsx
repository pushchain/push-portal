import { useEffect, useState } from "react";
import { Box, Button, Discord, Text } from "../../blocks";
import { useGetUserDiscordDetails } from "../../queries";
import { useDiscordSession } from "../Rewards/hooks/useDiscordSession";

const DiscordVerification = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const storedToken = useDiscordSession();
  const [token, setToken] = useState(storedToken);

  const { data: userDiscordDetails } = useGetUserDiscordDetails(
    token as string,
  );

  useEffect(() => {
    if (storedToken) setToken(storedToken);
  }, [storedToken]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.hash.substring(1));
      const token = params.get("access_token");
      setAccessToken(token);
    }
  }, []);

  const handleContinueVerification = () => {
    if (userDiscordDetails) {
      localStorage.setItem("username", userDiscordDetails.username);
      if (typeof window !== "undefined") {
        window.close();
      }
    }
  };

  useEffect(() => {
    if (accessToken === null && typeof window !== "undefined") {
      window.close();
    }
  }, [accessToken]);

  return (
    <Box
      width="100vw"
      display="flex"
      alignItems="center"
      height="100vh"
      justifyContent="center"
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

export default DiscordVerification;
// import { useEffect, useState } from "react";
// import { Box, Button, Discord, Text } from "../../blocks";
// import { useGetUserDiscordDetails } from "../../queries";
// import { useDiscordSession } from "../Rewards/hooks/useDiscordSession";

// const DiscordVerification = () => {
//   const params = new URLSearchParams(location.hash.substring(1));
//   const access_token = params.get("access_token");

//   const storedToken = useDiscordSession();
//   const [token, setToken] = useState(storedToken);

//   const { data: userDiscordDetails } = useGetUserDiscordDetails(
//     token as string,
//   );

//   useEffect(() => {
//     if (storedToken) setToken(storedToken);
//   }, [storedToken]);

//   const handleContinueVerification = () => {
//     if (userDiscordDetails) {
//       localStorage.setItem("username", userDiscordDetails.username);
//       if (typeof window !== "undefined") {
//         window.close();
//       }
//     }
//   };

//   if (!access_token) {
//     if (typeof window !== "undefined") {
//       window.close();
//     }
//   }

//   return (
//     <Box
//       width="100vw"
//       display="flex"
//       alignItems="center"
//       height="100vh"
//       justifyContent="center"
//     >
//       <Box
//         display="flex"
//         padding="spacing-md"
//         flexDirection="column"
//         alignItems="center"
//         width="360px"
//         gap="spacing-xs"
//         backgroundColor="surface-primary"
//         borderRadius="radius-md"
//         border="border-sm solid stroke-secondary"
//       >
//         <Discord width={48} height={48} />
//         <Box display="flex" flexDirection="column" alignItems="center">
//           <Text variant="h4-semibold" color="text-primary">
//             Complete Verification
//           </Text>
//           <Text variant="bs-regular" color="text-tertiary">
//             Continue to complete the verification process.
//           </Text>
//         </Box>

//         <Button onClick={handleContinueVerification}>Continue</Button>
//       </Box>
//     </Box>
//   );
// };

// export { DiscordVerification };
