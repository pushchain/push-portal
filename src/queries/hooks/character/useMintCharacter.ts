import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CharacterMintParams } from '../../types';
import { characterInfo } from '../../queryKeys';
import { mintCharacter } from '../../services';

export const useMintCharacter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: CharacterMintParams) => mintCharacter(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [characterInfo, variables.walletAddress] });
    },
  });
};
