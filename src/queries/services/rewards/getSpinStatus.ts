import axios from "axios";
import { getSpinStatusModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSpinStatus = () =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/spin/status`,
  }).then((response) => getSpinStatusModel(response.data));
