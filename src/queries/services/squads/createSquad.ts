import axios from "axios";
import { createSquadModel } from "../../models";
import { CreateSquadParams } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const createSquad = (params: CreateSquadParams) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads`,
    data: params,
  }).then((response) => createSquadModel(response.data));
