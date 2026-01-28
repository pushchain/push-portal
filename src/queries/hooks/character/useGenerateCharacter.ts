import { useMutation, useQueryClient } from '@tanstack/react-query';

import { CharacterGenerateParams } from '../../types';
import { characterInfo } from '../../queryKeys';
import { generateCharacter } from '../../services';

export const useGenerateCharacter = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: CharacterGenerateParams) => generateCharacter(params),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: [characterInfo, variables.walletAddress] });
    },
  });
};
