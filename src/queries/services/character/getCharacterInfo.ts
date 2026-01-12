import axios from 'axios';

import { getCharacterInfoModel } from '../../models';
import { CharacterInfoParams } from '../../types/character';
import { getRewardsBaseURL } from '../../baseURL';

export const getCharacterInfo = ({ walletAddress }: CharacterInfoParams) =>
  axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/api/character/info/${walletAddress}`,
    // params: {  },
  }).then((response) => getCharacterInfoModel(response.data));
