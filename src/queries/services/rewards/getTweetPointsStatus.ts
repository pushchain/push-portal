import axios from "axios";
import { getRewardsBaseURL } from "../../../queries/baseURL";
import { getTweetPointsStatusModel } from "../../models";

export const getTweetPointsStatus = async (userId: string) => {
  return axios({
    method: "GET",
    url: `${getRewardsBaseURL()}/v2/users/check-push-tweet_200k/${userId}`,
  }).then((response) => getTweetPointsStatusModel(response.data));
};
