import axios from "axios";

import { advancedSybilCheckModel } from "../../models";
import { AdvancedSybilCheckParams } from "../../types/rewards";
import { getSeasonThreeBaseURL } from "../../baseURL";

export const callAdvancedSybilCheck = ({
  address,
  chainId,
}: AdvancedSybilCheckParams) =>
  axios({
    method: "POST",
    url: `${getSeasonThreeBaseURL()}/api/v3/advanced-sybil/check-evm`,
    data: {
      address,
      chainId,
    },
  }).then((response) => advancedSybilCheckModel(response.data.data));
