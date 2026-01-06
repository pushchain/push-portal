import axios from "axios";

import { getSeasonOneUserDetailsModel } from "../../models";
import { UserRewardsDetailParams } from "../../types/rewards";
import { getRewardsBaseURL } from "../../baseURL";

export const getSeasonOneUserDetails = ({
  caip10WalletAddress,
}: UserRewardsDetailParams) =>
  axios({
    method: "GET",
    url: `${getRewardsBaseURL()}/users/wallet/${caip10WalletAddress}`,
  }).then((response) => getSeasonOneUserDetailsModel(response.data));
