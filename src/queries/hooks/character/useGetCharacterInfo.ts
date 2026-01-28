import { useQuery } from '@tanstack/react-query';

import { CharacterInfoParams } from '../../types';
import { characterInfo } from '../../queryKeys';
import { getCharacterInfo } from '../../services';

export const useGetCharacterInfo = (options?: CharacterInfoParams) => {
  const isInvalidAddress = !options?.walletAddress;

  return useQuery({
    queryKey: isInvalidAddress ? undefined : [characterInfo, options.walletAddress],
    queryFn: () => getCharacterInfo(options!),
    retry: false,
    enabled: !isInvalidAddress,
  });
};
