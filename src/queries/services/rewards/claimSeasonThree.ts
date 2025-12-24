import axios from "axios";
import { getRewardsBaseURL } from "../../../queries/baseURL";
import { claimSeasonThreeModel } from "../../../queries/models/rewards";

export const claimSeasonThree = (payload: any) =>
  axios({
    method: "POST",
    url: `${getRewardsBaseURL()}/v2/users/discord-reverify`,
    data: {
      data: payload.data,
      verificationProof: payload.verificationProof,
    },
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => claimSeasonThreeModel(response.data));
