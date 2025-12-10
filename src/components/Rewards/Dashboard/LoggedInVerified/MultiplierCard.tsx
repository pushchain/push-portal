import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Text } from '../../../../blocks';
import { useGetUserRewardsDetails } from '../../../../queries';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';
import { usePushWalletContext } from '@pushprotocol/pushchain-ui-kit';

export const MultiplierCard: FC = () => {
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
      width="138px"
      borderRadius="radius-md"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      padding="spacing-sm spacing-sm"
      position="relative"
      css={css`
        flex: 1;
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 53.87%, #143C23 100%);
        box-sizing: border-box;
      `}
    >
      <Box
        css={css`
          position: absolute;
          width: 201px;
          top: 67px;
          left: 33px;
        `}
      >
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-start" position="relative" css={css`z-index: 1;`}>
        <Text variant="h1-bold" color="text-primary">
          1.2x
        </Text>
        <Text variant="h5-semibold" color="text-tertiary">
          XP
          <br />
          Multiplier
        </Text>
      </Box>
    </Box>
  );
};
