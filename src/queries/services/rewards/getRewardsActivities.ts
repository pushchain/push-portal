import axios from "axios";
import { getRewardsActivitiesModelCreator } from "../../models/rewards";
import { getRewardsBaseURL } from "../../baseURL";

const pageSize = 300;

export const getRewardsActivities = () =>
  axios({
    method: "GET",
    url: `${`${getRewardsBaseURL()}`}/v2/activities/all`,
    params: {
      pageSize: pageSize,
    },
  }).then((response) => getRewardsActivitiesModelCreator(response.data));
