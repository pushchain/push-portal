import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text, Copy } from '../../../../blocks';
import { useGetUserRewardsDetails } from '../../../../queries';
import { walletToFullCAIP10 } from '../../../../helpers/web3helper';
import { usePushWalletContext } from '@pushprotocol/pushchain-ui-kit';

export const ReferralCard: FC = () => {
  const { universalAddress } = usePushWalletContext();
  const caip10WalletAddress = walletToFullCAIP10(
    universalAddress?.address as string,
    universalAddress?.chainId,
    universalAddress?.chain,
  );

  const { data: userDetails } = useGetUserRewardsDetails({
    caip10WalletAddress: caip10WalletAddress
  });

  const baseUrl = window.location.origin;
  const referralLink = `${baseUrl}/rewards?ref=${userDetails?.userId}`;

  return (
    <Box
      borderRadius="radius-md"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
      padding="spacing-md spacing-md"
      width="100%"
      css={css`
        flex: 1;
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);
        box-sizing: border-box;
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-xs"
        justifyContent="space-between"
        width="100%"
        height="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="272px">
          <Text variant="h3-semibold" color="text-brand-medium">
            Invite <Text as="span" variant="h3-semibold" color="text-primary">your friends</Text>
          </Text>
          <Text variant="bm-regular" color="text-tertiary">
            Enjoy rewards with your friends with our rewards system*
          </Text>
        </Box>

        <Button
          variant="tertiary"
          size="small"
          leadingIcon={<Copy />}
          onClick={() => navigator.clipboard.writeText(referralLink)}
          css={css`
            background: none;
            padding: 0px;
            min-width: auto;
            height: auto;
        `}
        >
          Copy Link
        </Button>
      </Box>
    </Box>
  );
};
