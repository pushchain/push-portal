import axios from "axios";
import { createSeasonThreeUserModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const createSeasonThreeUser = (payload: any) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/v3/users`,
    data: {
      userWallet: payload.userWallet,
      userUEAWallet: payload.userUEAWallet,
      phase: payload.phase,
      inviteCodeUsed: payload.inviteCodeUsed,
      email: payload.email,
      data: payload.data,
      verificationProof: payload.verificationProof,
    },
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => createSeasonThreeUserModel(response.data));
