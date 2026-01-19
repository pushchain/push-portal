import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Text } from '../../../../blocks';
import { useGetUserRewardsDetails } from '../../../../queries';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';
import { usePushWalletContext } from '@pushprotocol/pushchain-ui-kit';
import TotalMultiplierBg from '../../../../../static/assets/website/rewards/total-multiplier-bg.webp';

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
        border: none;
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 53.87%, #143C23 100%);
        box-sizing: border-box;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: rgba(255, 255, 255, 0.10);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}
    >
      <Box
        css={css`
          position: absolute;
          bottom: 0;
          right: 0;
          width: 65%;
          height: 65%;
          background: url(${TotalMultiplierBg}) no-repeat bottom right;
          background-size: contain;
          pointer-events: none;
          z-index: 0;
        `}
      />

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
