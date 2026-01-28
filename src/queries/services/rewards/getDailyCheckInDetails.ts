import axios from "axios";
import { getDailyCheckInDetailsModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { AuthHeaders } from "../../types";

export const getDailyCheckInDetails = (authHeaders: AuthHeaders) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/check-in/status`,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => getDailyCheckInDetailsModel(response.data));
