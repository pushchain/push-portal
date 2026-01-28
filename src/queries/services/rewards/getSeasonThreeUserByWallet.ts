import axios from "axios";

import { getSeasonThreeUserByWalletModel } from "../../models";
import { SeasonThreeUserByWalletParams } from "../../types/rewards";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const getSeasonThreeUserByWallet = ({
  walletAddress,
}: SeasonThreeUserByWalletParams) =>
  axios({
    method: "GET",
    url: `${getSeasonThreeBaseURL()}/v3/users/wallet/${walletAddress}`,
  }).then((response) => getSeasonThreeUserByWalletModel(response.data));
