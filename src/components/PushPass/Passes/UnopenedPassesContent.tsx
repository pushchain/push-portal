import { FC } from 'react';
import { css } from 'styled-components';
import { Box, RarePassIcon, Text } from '../../../blocks';
import PassCard from './PassCard';

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
      width="1058px"
      gap="spacing-md"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      `}
    >

    <Box
      gap="spacing-xs"
      alignSelf="stretch"
      css={css`
        display: flex;
        align-items: center;
        position: relative;
      `}
    >
      <RarePassIcon />

      <Box
        gap="spacing-none"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          flex: 1;
        `}
      >
        <Box
          gap="spacing-xxxs"
          alignSelf="stretch"
          css={css`
            display: flex;
            align-items: center;
            position: relative;
          `}
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
          css={css`
            align-self: stretch;
          `}
        >
          Collect and open as many passes as possible before the burn event. More Rare Pass = Higher Chance to score a Shiny
        </Text>
      </Box>
    </Box>

      <Box
        gap="spacing-lg"
        alignSelf="stretch"
        css={css`
          display: flex;
          align-items: flex-start;
          position: relative;
        `}
      >
        {passes.slice(0, 4).map((pass) => (
          <PassCard
            key={pass.id}
            isLocked={pass.isLocked}
            lockMessage={pass.lockMessage}
            id={pass.id}
          />
        ))}
      </Box>

      <Box
        gap="spacing-lg"
        alignSelf="stretch"
        css={css`
          display: flex;
          align-items: flex-start;
          position: relative;
        `}
      >
        {passes.slice(4, 8).map((pass) => (
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
