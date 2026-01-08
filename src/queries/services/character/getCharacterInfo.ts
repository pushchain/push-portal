import axios from 'axios';

import { getCharacterInfoModel } from '../../models';
import { CharacterInfoParams } from '../../types/character';
import { getRewardsBaseURL } from '../../baseURL';

export const getCharacterInfo = ({ walletAddress }: CharacterInfoParams) =>
  axios({
    method: 'GET',
    url: `${getRewardsBaseURL()}/api/character/info`,
    params: { walletAddress },
  }).then((response) => getCharacterInfoModel(response.data));
