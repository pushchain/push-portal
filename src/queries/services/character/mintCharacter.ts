import axios from 'axios';

import { mintCharacterModel } from '../../models';
import { CharacterMintParams } from '../../types/character';
import { getRewardsBaseURL } from '../../baseURL';

export const mintCharacter = ({ walletAddress }: CharacterMintParams) =>
  axios({
    method: 'POST',
    url: `${getRewardsBaseURL()}/api/character/mint`,
    data: { walletAddress },
  }).then((response) => mintCharacterModel(response.data));
