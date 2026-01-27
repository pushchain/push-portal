import { useState, useRef } from 'react';
import { css } from 'styled-components';
import { Box, Button, Modal, Text } from '../../../blocks';
import Spinboard, { SpinboardHandle } from './Spinboard';
import { useSpinStatus } from '../hooks/useSpinStatus';
import { useSpinTheWheel } from '../../../queries/hooks';

type SpinToWinModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SpinToWinModal = ({ isOpen, onClose }: SpinToWinModalProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [wonPrize, setWonPrize] = useState('');
  const spinboardRef = useRef<SpinboardHandle>(null);

  const { spinStatus, authHeaders, refetch } = useSpinStatus();
  const { mutate: spin, isPending: isSpinPending } = useSpinTheWheel();

  const prizes = [
    '80 Points',
    '0.1x Multiplier',
    '10 PC Tokens',
    'Rare Pass',
    '150 Points',
    '500 PC Tokens',
    '0.1x Multiplier',
    '500 Points',
    'Rare Pass',
    '5 PC Tokens'
  ];

  const handleSpinClick = () => {
    if (isSpinning || !spinStatus?.canSpin || !authHeaders) return;
    setShowResult(false);
    setIsSpinning(true);

    spin(authHeaders, {
      onSuccess: (data) => {
        // Pass the prize index from API response to the spinboard
        // Adjust data.prizeIndex based on actual API response structure
        const prizeIndex = data?.prizeIndex ?? data?.data?.prizeIndex;
        spinboardRef.current?.spin(prizeIndex);
        refetch();
      },
      onError: (error) => {
        setIsSpinning(false);
        console.error('Spin failed:', error);
      },
    });
  };

  const handleSpinComplete = (prizeIndex: number) => {
    setIsSpinning(false);
    setWonPrize(prizes[prizeIndex]);
    setShowResult(true);
  };

  const handleClose = () => {
    if (isSpinning) return;
    setShowResult(false);
    setWonPrize('');
    onClose();
  };

  const remainingSpins = spinStatus?.remainingSpins ?? 0;
  const canSpin = spinStatus?.canSpin ?? false;

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="small"
      css={css`
        border-radius: var(--radius-lg, 32px);
        outline: none;
        background: linear-gradient(180deg, #000 0%, #4C2A6B 100%);

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}
      acceptButtonProps={null}
      cancelButtonProps={null}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-md"
        width="100%"
      >
        <Text
          variant="h2-semibold"
          textAlign="center"
          css={css`
            background: linear-gradient(180deg, #FFF 0%, #FFE397 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
            {remainingSpins} Spin{remainingSpins !== 1 ? 's' : ''} Remaining
          </Text>
        </Box>

        {showResult ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="spacing-sm"
            padding="spacing-lg"
            width="100%"
            css={css`
              animation: fadeIn 0.3s ease-in;
              @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
              }
            `}
          >
            <Text variant="h4-semibold" color="text-on-dark-bg">
              🎉 Congratulations!
            </Text>
            <Text variant="h3-bold" color="text-on-dark-bg">
              You Won {wonPrize}!
            </Text>
          </Box>
        ) : (
          <Box width="100%">
            <Spinboard
              ref={spinboardRef}
              onSpinComplete={handleSpinComplete}
              disabled={isSpinning}
            />
          </Box>
        )}

        <Button
          size="medium"
          variant="primary"
          onClick={showResult && remainingSpins > 0 ? () => setShowResult(false) : handleSpinClick}
          disabled={isSpinning || (!showResult && !canSpin)}
          css={css`
            width: 100%;
            opacity: ${isSpinning || (!showResult && !canSpin) ? 0.6 : 1};
            cursor: ${isSpinning || (!showResult && !canSpin) ? 'not-allowed' : 'pointer'};
          `}
        >
          {isSpinning
            ? 'Spinning...'
            : showResult
              ? remainingSpins > 0
                ? 'Spin Again'
                : 'Close'
              : canSpin
                ? 'Spin Now'
                : 'No Spins Available'}
        </Button>

        {showResult && remainingSpins === 0 && (
          <Button
            size="medium"
            variant="outline"
            onClick={handleClose}
            css={css`
              width: 100%;
            `}
          >
            Close
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default SpinToWinModal;
