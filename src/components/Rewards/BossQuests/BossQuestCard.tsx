import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text, Lock, ProgressBar, RewardsStarGradient, RarePass, XP } from '../../../blocks';

type BossQuestCardProps = {
  title: string;
  description: string;
  resetTime: string;
  progress?: number;
  maxProgress?: number;
  unlocks: {
    rarePass?: boolean;
    xp?: number;
  };
  isLocked: boolean;
  ctaText: string;
  icon?: string;
  onClaim?: () => void;
};

const BossQuestCard: FC<BossQuestCardProps> = ({
  title,
  description,
  resetTime,
  progress = 0,
  maxProgress = 0,
  unlocks,
  isLocked,
  ctaText,
  icon,
  onClaim,
}) => {
  const showProgress = maxProgress > 0;

  return (
    <Box
      display="flex"
      flexDirection="column"
      width={{ initial: 'auto', tb: '100%' }}
      minWidth={{ initial: '280px', tb: 'auto' }}
      borderRadius="radius-md"
      padding="spacing-md"
      gap="spacing-sm"
      justifyContent="flex-end"
      position="relative"
      overflow="hidden"
      height={{ initial: '-webkit-fill-available', tb: 'auto' }}
      minHeight={{ initial: '473px', tb: '400px' }}
      css={css`
        border: 1px solid rgba(255, 255, 255, 0.10);
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);
        flex: 1;
        box-sizing: border-box;
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignSelf="stretch"
        css={css`
          flex: 1;
        `}
      >
        <Box
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          alignSelf="flex-end"
          padding="spacing-xxs spacing-xs"
          borderRadius="radius-lg"
          css={css`
            background: rgba(66, 67, 103, 0.20);
            border: 1px solid rgba(255, 255, 255, 0.10);
          `}
        >
          <Text
            variant="bes-bold"
            css={css`
              color: #e5c4ef;
              text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
              text-align: center;
            `}
          >
            {resetTime}
          </Text>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          alignSelf="stretch"
          gap="spacing-lg"
          justifyContent="flex-end"
          css={css`
            flex: 1;
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            alignSelf="stretch"
            gap="spacing-xl"
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              alignSelf="stretch"
              gap="spacing-xs"
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                alignSelf="stretch"
                gap="spacing-xxs"
                justifyContent="center"
              >
                <Text
                  variant="h4-semibold"
                  css={css`
                    background: linear-gradient(
                      180deg,
                      rgba(255, 255, 255, 1) 66%,
                      rgba(210, 83, 233, 1) 100%
                    );
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-align: center;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  {title}
                </Text>

                <Text
                  variant="bm-regular"
                  css={css`
                    color: rgba(255, 255, 255, 0.75);
                    text-align: center;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  {description}
                </Text>
              </Box>
            </Box>

            {icon && (
              <ProgressBar
                progress={(0) || null}
                max={100}
                size="large"
                progressIcon={<RewardsStarGradient size={35} />}
              />
            )}

            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              alignSelf="stretch"
              gap="spacing-xxs"
            >
              <Text
                variant="ol-bold"
                css={css`
                  color: rgba(255, 255, 255, 0.75);
                  text-align: center;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                UNLOCKS
              </Text>

              <Box
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                gap="spacing-lg"
              >
                {unlocks.rarePass && (
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="spacing-xs"
                  >
                    <Box
                      display="inline-flex"
                      alignItems="center"
                      gap="spacing-xxs"
                    >

                      <RarePass />
                    </Box>
                  </Box>
                )}

                {unlocks.xp && (
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    gap="spacing-xxs"
                    height="14px"
                  >
                    <XP />

                    <Text variant="bm-bold" color="text-primary">
                      {unlocks.xp}
                    </Text>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="flex-start"
            alignSelf="stretch"
          >
            {isLocked ? (
              <Button
                size="small"
                variant="tertiary"
                css={css`
                  width: 100%;
                  border: 1px solid var(--stroke-tertiary);
                  background: none;
                `}
              >
                <Box display="inline-flex" alignItems="center" justifyContent="center" gap="spacing-xxxs">
                  <Lock size={24} color="icon-tertiary" />
                  <Text color="text-tertiary"
                    css={css`
                        font-family: "FK Grotesk Neue-Medium", Helvetica;
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 16px;
                        white-space: nowrap;
                    `}>
                    Locked
                  </Text>
                </Box>
              </Button>
            ) : (
              <Button
                size="small"
                variant="tertiary"
                onClick={onClaim}
                css={css`
                  width: 100%;
                  border: 1px solid #774d84;
                  background: none;
                `}
              >
                <Text
                  css={css`
                    font-family: "FK Grotesk Neue-Medium", Helvetica;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 16px;
                    white-space: nowrap;
                  `}
                >
                  <Text as="span" color="text-primary">{ctaText.split(' on ')[0]} on </Text>
                  <Text as="span" css={css`color: #c742dd;`}>{ctaText.split(' on ')[1] || ''}</Text>
                </Text>
              </Button>
            )}
          </Box>
        </Box>
      </Box>

      {showProgress && (
        <Box
          position="absolute"
          width="300px"
          height="8px"
          css={css`
              left: 0;
              top: 148px;
            `
          }
        >
          <Box width="1px" height="1px" />
        </Box>
      )}
    </Box>
  );
};

export default BossQuestCard;
