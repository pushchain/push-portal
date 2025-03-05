import { useQuery } from '@tanstack/react-query';
import { getPreviousPushStakeEpoch } from '../../../queries/services';
import { pushPreviousStakeEpoch } from '../../../queries/queryKeys';

export const useGetPreviousPushStakeEpoch = () =>
  useQuery({
    queryKey: [pushPreviousStakeEpoch],
    queryFn: getPreviousPushStakeEpoch,
  });
