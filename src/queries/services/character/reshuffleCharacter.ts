import axios from 'axios';

import { reshuffleCharacterModel } from '../../models';
import { CharacterReshuffleParams } from '../../types/character';
import { getRewardsBaseURL } from '../../baseURL';

export const reshuffleCharacter = ({ walletAddress }: CharacterReshuffleParams) =>
  axios({
    method: 'POST',
    url: `${getRewardsBaseURL()}/api/character/reshuffle`,
    data: { walletAddress },
  }).then((response) => reshuffleCharacterModel(response.data));
