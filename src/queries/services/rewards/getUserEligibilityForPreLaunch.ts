import axios from "axios";

import { getUserEligibilityForPreLaunchModel } from "../../models";
import { UserEligibilityForPreLaunchParams } from "../../types/rewards";
import { getRewardsBaseURL } from "../../baseURL";

export const getUserEligibilityForPreLaunch = ({
  address,
}: UserEligibilityForPreLaunchParams) =>
  axios({
    method: "GET",
    url: `${getRewardsBaseURL()}/v2/users/check/${address}`,
  }).then((response) => getUserEligibilityForPreLaunchModel(response.data));
