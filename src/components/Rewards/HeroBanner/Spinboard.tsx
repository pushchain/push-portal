import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { css } from 'styled-components';
import { gsap } from 'gsap';
import { Box } from '../../../blocks';
import spinboardImage from '/static/assets/website/rewards/spinboard.webp';
import stopperImage from '/static/assets/website/rewards/stopper.webp';

interface SpinboardProps {
  onSpinComplete?: (prizeIndex: number) => void;
  disabled?: boolean;
}

export interface SpinboardHandle {
  spin: () => void;
}

const Spinboard = forwardRef<SpinboardHandle, SpinboardProps>(({ onSpinComplete, disabled = false }, ref) => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  useImperativeHandle(ref, () => ({
    spin: handleSpin,
  }));

  const handleSpin = () => {
    if (isSpinning || disabled || !wheelRef.current) return;

    setIsSpinning(true);

    const segmentWeights = [30, 15, 18, 0.5, 12, 2, 10, 8, 0.5, 4];

    const totalWeight = segmentWeights.reduce((sum, weight) => sum + weight, 0);
    let random = Math.random() * totalWeight;
    let prizeIndex = 0;

    for (let i = 0; i < segmentWeights.length; i++) {
      random -= segmentWeights[i];
      if (random <= 0) {
        prizeIndex = i;
        break;
      }
    }

    const segmentAngle = 360 / 10;

    const minRotations = 5;
    const maxRotations = 7;
    const randomRotations = Math.floor(Math.random() * (maxRotations - minRotations + 1)) + minRotations;

    const currentRotation = gsap.getProperty(wheelRef.current, 'rotation') as number || 0;
    const currentNormalized = currentRotation % 360;

    const targetSegmentAngle = -prizeIndex * segmentAngle;
    const totalRotation = randomRotations * 360 + (targetSegmentAngle - currentNormalized);

    gsap.to(wheelRef.current, {
      rotation: `+=${totalRotation}`,
      duration: 4,
      ease: 'power3.out',
      onComplete: () => {
        setIsSpinning(false);
        onSpinComplete?.(prizeIndex);
      },
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="spacing-none"
      position="relative"
      width="100%"
      css={css`
        user-select: none;
      `}
    >
      <Box
        position="relative"
        width="40px"
        height="40px"
        css={css`
          z-index: 2;
          margin-bottom: -20px;
        `}
      >
        <img
          src={stopperImage}
          alt="Stopper"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))',
          }}
        />
      </Box>

      {/* Spinning Wheel */}
      <Box
        ref={wheelRef}
        position="relative"
        width="200px"
        height="200px"
        css={css`
          z-index: 1;
        `}
      >
        <img
          src={spinboardImage}
          alt="Spin Board"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.15))',
          }}
        />
      </Box>
    </Box>
  );
});

Spinboard.displayName = 'Spinboard';

export default Spinboard;
