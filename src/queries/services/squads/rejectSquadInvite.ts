import axios from "axios";
import { rejectSquadInviteModel } from "../../models";
import { RejectSquadInviteParams } from "../../types";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const rejectSquadInvite = ({ inviteId }: RejectSquadInviteParams) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/user/squads/invites/${inviteId}/reject`,
  }).then((response) => rejectSquadInviteModel(response.data));
