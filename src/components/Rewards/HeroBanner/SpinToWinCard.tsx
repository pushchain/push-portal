import { useState } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text } from '../../../blocks';
import SpinToWinModal from './SpinToWinModal';
import { useSpinStatus } from '../hooks/useSpinStatus';
import spinboardImage from '/static/assets/website/rewards/spinboard.webp';
import stopperImage from '/static/assets/website/rewards/stopper.webp';

const SpinToWinCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { spinStatus } = useSpinStatus();

  const remainingSpins = spinStatus?.remainingSpins ?? 0;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        width={{ initial: '280px', tb: '100%' }}
        height={{ initial: '374px', tb: 'auto' }}
        minHeight={{ tb: '300px' }}
        padding="spacing-md"
        borderRadius="radius-xl"
        position="relative"
        overflow="hidden"
        css={css`
          border: none;
          background: linear-gradient(241deg, rgba(253, 253, 218, 1) 28%, rgba(212, 255, 193, 1) 100%);
          box-sizing: border-box;
          position: relative;

          &::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 1px;
            background: rgba(255, 255, 255, 0.40);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
          }
        `}
      >
        <Box
          position="absolute"
          css={css`
            top: 40%;
            left: 50%;
            transform: translateX(-50%);
            opacity: 0.9;
            pointer-events: none;
            z-index: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <img
            src={stopperImage}
            alt=""
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'contain',
              marginBottom: '-20px',
              position: 'relative',
              zIndex: 1,
            }}
          />
          <img
            src={spinboardImage}
            alt=""
            style={{
              width: '300px',
              height: '300px',
              objectFit: 'contain',
            }}
          />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          gap="spacing-xs"
          position="relative"
          height="100%"
          css={css`
            flex: 1;
            z-index: 1;
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="spacing-xs"
            width="100%"
          >
            <Text
              variant="h3-semibold"
              css={css`
                background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(48, 119, 36, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                text-align: center;
              `}
            >
              Spin to Win
            </Text>

            <Box
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              padding="spacing-xxs spacing-xs"
              backgroundColor="surface-primary"
              borderRadius="radius-xl"
            >
              <Text variant="bs-bold" color="text-on-dark-bg">
                {remainingSpins} FREE Spin{remainingSpins !== 1 ? 's' : ''}/Day
              </Text>
            </Box>


          </Box>

          <Button
            size="medium"
            variant="primary"
            disabled={!spinStatus?.canSpin}
            onClick={() => {
              if (!spinStatus?.canSpin) return;
              setIsModalOpen(true)
            }}
            css={css`
              width: 100%;
              position: relative;
            `}
          >
            Spin Now
          </Button>
        </Box>
      </Box>

      <SpinToWinModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default SpinToWinCard;
