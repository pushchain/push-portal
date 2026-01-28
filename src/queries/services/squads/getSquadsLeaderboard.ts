import axios from "axios";
import { getSquadsLeaderboardModel } from "../../models";
import { SquadsLeaderboardParams } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSquadsLeaderboard = ({
  order,
  pageSize,
  pageNumber,
}: SquadsLeaderboardParams) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/leaderboard`,
    params: {
      order: order || "desc",
      pageSize: pageSize || 20,
      pageNumber: pageNumber || 1,
    },
  }).then((response) => getSquadsLeaderboardModel(response.data));
