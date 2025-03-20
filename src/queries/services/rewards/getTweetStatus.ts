import axios from "axios";
import { getRewardsBaseURL } from "../../../queries/baseURL";
import { getTweetStatusModel } from "../../models";

export const getTweetStatus = async (userId: string) => {
  return axios({
    method: "GET",
    url: `${getRewardsBaseURL()}/v2/users/check-push-tweet/${userId}`,
  }).then((response) => getTweetStatusModel(response.data));
};
