import axios from "axios";
import { getRewardsBaseURL } from "../../../queries/baseURL";
import { getUserXPModel } from "../../../queries/models";

export const getUserXP = async (userId: string) => {
  return axios({
    method: "GET",
    url: `${getRewardsBaseURL()}/v2/user-app-xp/user/${userId}/xp`,
  }).then((response) => getUserXPModel(response.data));
};
