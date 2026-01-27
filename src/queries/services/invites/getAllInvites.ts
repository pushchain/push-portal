import axios from "axios";
import { getAllInvitesModel } from "../../models";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getAllInvites = () =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/invites`,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => getAllInvitesModel(response.data));
