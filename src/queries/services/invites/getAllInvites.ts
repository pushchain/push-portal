import axios from "axios";
import { getAllInvitesModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { AuthHeaders } from "../../types";

export const getAllInvites = (authHeaders: AuthHeaders) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/invites`,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
  }).then((response) => getAllInvitesModel(response.data));
