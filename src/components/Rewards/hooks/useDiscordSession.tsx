import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useDiscordSession = () => {
  const location = useLocation();
  const [token, setToken] = useState(
    localStorage.getItem("access_token") ?? "",
  );

  useEffect(() => {
    if (location.hash) {
      const params = new URLSearchParams(location.hash.substring(1));
      const accessToken = params.get("access_token");
      const expiresIn = params.get("expires_in");

      if (accessToken && expiresIn) {
        localStorage.setItem("access_token", accessToken);
        localStorage.setItem("expires_in", expiresIn);
        setToken(accessToken);
      }
    }
  }, []);

  return token;
};
