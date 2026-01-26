import axios from "axios";
import { spinTheWheelModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { AuthHeaders } from "../../types";

export const spinTheWheel = (authHeaders: AuthHeaders) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/spin/wheel`,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => spinTheWheelModel(response.data));
