import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CharacterReshuffleParams } from '../../types';
import { characterInfo } from '../../queryKeys';
import { reshuffleCharacter } from '../../services';

export const useReshuffleCharacter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: CharacterReshuffleParams) => reshuffleCharacter(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [characterInfo, variables.walletAddress] });
    },
  });
};
