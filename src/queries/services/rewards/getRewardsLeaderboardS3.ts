import axios from "axios";

import { getRewardsLeaderboardModalCreator } from "../../models";
import { LeaderboardParams } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getRewardsLeaderboardS3 = async ({
  order,
  pageSize,
  pageNumber,
}: LeaderboardParams) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/leaderboard`,
    params: {
      order: order || "desc",
      pageSize: pageSize || 20,
      pageNumber: pageNumber || 1,
    },
  }).then((response) => getRewardsLeaderboardModalCreator(response.data));
