import axios from "axios";
import { requestInviteCodeModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";
import { AuthHeaders, RequestInviteCodePayload } from "../../types";

export const requestInviteCode = (payload: RequestInviteCodePayload, authHeaders: AuthHeaders) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/invites/request`,
    headers: {
      "Content-Type": "application/json",
      "x-message": JSON.stringify(authHeaders.message),
      "x-signature": authHeaders.signature,
      "x-wallet-address": authHeaders.walletAddress,
    },
    data: payload,
  }).then((response) => requestInviteCodeModel(response.data));
