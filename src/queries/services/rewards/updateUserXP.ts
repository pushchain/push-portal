import axios from "axios";
import { getRewardsBaseURL } from "../../../queries/baseURL";
import { updateUserXPModel } from "../../models";

export const updateUserXP = async (payload) => {
  return axios({
    method: "PUT",
    url: `${getRewardsBaseURL()}/v2/user-app-xp/user/${payload?.userId}/xp/refresh`,
  }).then((response) => updateUserXPModel(response.data));
};
