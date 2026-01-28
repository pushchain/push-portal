import axios from 'axios';

import { generateCharacterModel } from '../../models';
import { CharacterGenerateParams } from '../../types/character';
import { getRewardsBaseURL } from '../../baseURL';

export const generateCharacter = ({ walletAddress }: CharacterGenerateParams) =>
  axios({
    method: 'POST',
    url: `${getRewardsBaseURL()}/api/character/generate`,
    data: { walletAddress },
  }).then((response) => generateCharacterModel(response.data));
