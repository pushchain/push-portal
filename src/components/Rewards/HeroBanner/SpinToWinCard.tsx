import { useState, useRef } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text } from '../../../blocks';
import Spinboard, { SpinboardHandle } from './Spinboard';

const SpinToWinCard = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinCount, setSpinCount] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [wonPrize, setWonPrize] = useState('');
  const spinboardRef = useRef<SpinboardHandle>(null);

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
    if (isSpinning) return;
    setShowResult(false);
    setIsSpinning(true);
    spinboardRef.current?.spin();
  };

  const handleSpinComplete = (prizeIndex: number) => {
    setIsSpinning(false);
    setSpinCount((prev) => prev + 1);
    setWonPrize(prizes[prizeIndex]);
    setShowResult(true);
    
    console.log('🎉 Prize Result:', {
      index: prizeIndex,
      prize: prizes[prizeIndex],
      totalSpins: spinCount + 1
    });
  };

  return (
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
        background: ${isSpinning || spinCount === 0
          ? 'linear-gradient(241deg, rgba(253, 253, 218, 1) 28%, rgba(212, 255, 193, 1) 100%)'
          : 'linear-gradient(180deg, #000 0%, #4C2A6B 100%)'};
        box-sizing: border-box;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: ${isSpinning || spinCount === 0
            ? 'rgba(255, 255, 255, 0.40)'
            : 'rgba(255, 255, 255, 0.25)'};
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}
    >

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="spacing-xs"
        position="relative"
        css={css`
          flex: 1;
          z-index: 1;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="spacing-xs"
          width="100%"
          css={css`
            flex: 1;
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="spacing-xxs"
            width="100%"
          >
            <Text
              variant="h3-semibold"
              css={css`
                background: ;
                background: ${isSpinning || spinCount === 0
                  ? 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(48, 119, 36, 1) 100%)'
                  : 'linear-gradient(180deg, #FFF 0%, #FFE397 100%)'};
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                text-align: center;
              `}
            >
              Spin to Win
            </Text>

            {!showResult && (isSpinning || spinCount === 0) && (
              <Box
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                padding="spacing-xxs spacing-xs"
                backgroundColor="surface-primary"
                borderRadius="radius-xl"
              >
                <Text variant="bs-bold" color="text-on-dark-bg">
                  1 FREE Spin/Day
                </Text>
              </Box>
            )}

            {showResult && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="spacing-xxs"
                padding="spacing-sm"
                backgroundColor="surface-brand"
                borderRadius="radius-lg"
                css={css`
                  animation: fadeIn 0.3s ease-in;
                  @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                  }
                `}
              >
                <Text variant="c-semibold" color="text-on-dark-bg">
                  You Won!
                </Text>
                <Text variant="h4-bold" color="text-on-dark-bg">
                  {wonPrize}
                </Text>
              </Box>
            )}
          </Box>
        </Box>


        <Box
          css={css`
            display: ${showResult ? 'none' : 'flex'};
            width: 100%;
          `}
        >
          <Spinboard
            ref={spinboardRef}
            onSpinComplete={handleSpinComplete}
            disabled={isSpinning}
          />
        </Box>

        <Button
          size="medium"
          variant="primary"
          onClick={handleSpinClick}
          disabled={isSpinning}
          css={css`
            width: 100%;
            opacity: ${isSpinning ? 0.6 : 1};
            cursor: ${isSpinning ? 'not-allowed' : 'pointer'};
          `}
        >
          {isSpinning ? 'Spinning...' : showResult ? 'Spin Again' : 'Spin Now'}
        </Button>
      </Box>
    </Box>
  );
};

export default SpinToWinCard;
