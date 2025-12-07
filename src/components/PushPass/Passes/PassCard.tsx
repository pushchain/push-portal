import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text, Lock } from '../../../blocks';

type PassCardProps = {
  isLocked: boolean;
  lockMessage?: string;
  backgroundImage?: string;
  onOpen?: () => void;
};

const PassCard: FC<PassCardProps> = ({
  isLocked,
  lockMessage = 'Locked',
  onOpen,
}) => {
  return (
    <Box
      height="379px"
      borderRadius="radius-xs"
      overflow="hidden"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        flex: 1;
        background: ${isLocked
                  ? `url(${'/static/assets/website/pushpass/openpasslocked.webp'}) center/cover`
                  : `url(${'/static/assets/website/pushpass/openpass.webp'}) center/cover`
                };
      `}
    >
      <Box
        height="379px"
        gap="spacing-xxs"
        alignSelf="stretch"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        `}
      >
        {isLocked ? (
          <>
            <Box width="32px" height="32px">
              <Lock size={32} color="icon-primary" />
            </Box>
            <Text
              variant="bs-bold"
              color="text-primary"
              css={css`
                text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
                text-align: center;
                align-self: stretch;
              `}
            >
              {lockMessage}
            </Text>
          </>
        ) : (
          <Box
            height="48px"
            gap="spacing-xs"
            css={css`
              display: inline-flex;
              flex-direction: column;
              align-items: flex-start;
            `}
          >
            <Box
              css={css`
                display: inline-flex;
                align-items: flex-start;
              `}
            >
              <Button
                size="medium"
                variant="primary"
                onClick={onOpen}
                css={css`
                  min-width: 100px;
                  height: 48px;
                  background: #d548ec;
                  box-shadow: 0px 4px 18.9px rgba(0, 0, 0, 0.5);
                `}
              >
                <Box
                  gap="spacing-xxxs"
                  css={css`
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <Text
                    css={css`
                      font-size: 16px;
                      font-weight: 500;
                      line-height: 16px;
                      white-space: nowrap;
                      color: var(--1-color-semantic-components-button-primary-text-default);
                    `}
                  >
                    Open Pass
                  </Text>
                </Box>
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PassCard;
