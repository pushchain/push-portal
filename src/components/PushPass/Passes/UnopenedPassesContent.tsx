import { FC } from 'react';
import { css } from 'styled-components';
import { Box, RarePassIcon, Text } from '../../../blocks';
import PassCard from './PassCard';
import { device } from '../../../config/globals';

type Pass = {
  id: number;
  isLocked: boolean;
  lockMessage?: string;
};

type UnopenedPassesContentProps = {
  passes: Pass[];
};

const UnopenedPassesContent: FC<UnopenedPassesContentProps> = ({ passes }) => {
  return (
    <Box
      width="100%"
      gap="spacing-md"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
    >

    <Box
      gap="spacing-xs"
      alignItems={{initial: "center", tb: "flex-start"}}
      css={css`
        display: flex;
        position: relative;
      `}
    >
      <RarePassIcon />

      <Box
        gap="spacing-none"
        width="100%"
        alignItems="flex-start"
        css={css`
          display: flex;
          flex-direction: column;
          position: relative;
          flex: 1;
          box-sizing: border-box;
        `}
      >
        <Box
          gap="spacing-xxxs"
          alignItems="center"
          display="flex"
          position='relative'
        >
          <Text
            variant="h3-semibold"
            css={css`
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
              background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(201, 104, 231, 1) 100%);
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
              white-space: nowrap;
            `}
          >
            Rare Pass
          </Text>
        </Box>

        <Text
          variant="bm-regular"
          color="text-secondary"
        >
          Collect and open as many passes as possible before the burn event. More Rare Pass = Higher Chance to score a Shiny
        </Text>
      </Box>
    </Box>

      <Box
        gap="spacing-md"
        width="100%"
        css={css`
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--spacing-lg);
          position: relative;

          @media ${device.tablet} {
              grid-template-columns: repeat(2, 1fr);
          }

          @media ${device.mobileL} {
              grid-template-columns: repeat(1, 1fr);
          }
        `}
      >
        {passes.map((pass) => (
          <PassCard
            key={pass.id}
            isLocked={pass.isLocked}
            lockMessage={pass.lockMessage}
            id={pass.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default UnopenedPassesContent;
