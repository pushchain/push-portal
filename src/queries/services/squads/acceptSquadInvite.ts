import axios from "axios";
import { acceptSquadInviteModel } from "../../models";
import { AcceptSquadInviteParams } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const acceptSquadInvite = ({ inviteId }: AcceptSquadInviteParams) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/invites/${inviteId}/accept`,
  }).then((response) => acceptSquadInviteModel(response.data));
