import axios from "axios";
import { sendSquadInviteModel } from "../../models";
import { SendSquadInviteParams } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const sendSquadInvite = ({ squadId }: SendSquadInviteParams) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/${squadId}/invites`,
  }).then((response) => sendSquadInviteModel(response.data));
