import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Text } from '../../../../blocks';
import { useGetUserRewardsDetails } from '../../../../queries';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';
import { usePushWalletContext } from '@pushprotocol/pushchain-ui-kit';

export const PointsCard: FC = () => {
  const { universalAddress } = usePushWalletContext();
  const caip10WalletAddress = walletToFullCAIP10(
    universalAddress?.address as string,
    universalAddress?.chainId,
    universalAddress?.chain,
  );

  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress
  });

  return (
    <Box
      height="196px"
      borderRadius="radius-md"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      padding="spacing-sm"
      position="relative"
      width="auto"
      css={css`
        flex: 1;
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 51.7%, #44350D 100%);
        box-sizing: border-box;
      `}
    >
      <Box
        css={css`
          position: absolute;
          width: 76.18%;
          height: 85.2%;
          top: 35.71%;
          right: -13.91%;
          bottom: -20.92%;
          left: 37.73%;
        `}
      >
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-start" position="relative" css={css`z-index: 1;`}>
        <Text variant="h1-bold" color="text-primary">
          {userDetails?.totalPoints?.toLocaleString() || '1050'}
        </Text>
        <Text variant="h5-semibold" color="text-tertiary">
          Total
          <br />
          Points
        </Text>
      </Box>
    </Box>
  );
};
