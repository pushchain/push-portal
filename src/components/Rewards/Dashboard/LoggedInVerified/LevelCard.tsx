import { FC } from 'react';
import { css } from 'styled-components';
import { Box, LevelBadge, Text } from '../../../../blocks';
import { useGetUserRewardsDetails } from '../../../../queries';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';
import { usePushWalletContext } from '@pushprotocol/pushchain-ui-kit';

export const LevelCard: FC = () => {
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
      height="165px"
      width="164px"
      borderRadius="radius-md"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-end"
      padding="spacing-md"
      css={css`
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);
        box-sizing: border-box;
      `}
    >
      <Box
        css={css`
            position: absolute;
            top: -31px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 99;
        `}>
        <LevelBadge />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" width="100%">
        <Text
          variant="h5-semibold"
          color="text-tertiary"
          textAlign="center">
          Noobie
        </Text>
        <Text
          variant="h1-bold"
          color="text-primary"
          textAlign="center">
          Lv. {userDetails?.level || 1}
        </Text>
      </Box>
    </Box>
  );
};
