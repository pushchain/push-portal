import axios from "axios";
import { getSquadsListModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSquadsList = () =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/me`,
  }).then((response) => getSquadsListModel(response.data));
