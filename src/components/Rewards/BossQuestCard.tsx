import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text, Lock } from '../../blocks';

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
      minWidth="280px"
      borderRadius="radius-md"
      border="border-xs solid stroke-tertiary"
      padding="spacing-md"
      gap="spacing-sm"
      justifyContent="flex-end"
      position="relative"
      overflow="hidden"
      css={css`
        background: radial-gradient(
          50% 50% at 73% 50%,
          rgba(19, 18, 32, 1) 75%,
          rgba(41, 29, 57, 1) 100%
        );
        flex: 1;
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
          border="border-xs solid stroke-tertiary"
          css={css`
            background-color: rgba(66, 66, 102, 0.2);
          `}
        >
          <Text
            variant="h5-regular"
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
              <Box width="48px" height="48px">
                <img src={icon} alt="Quest icon" width="48" height="48" />
              </Box>
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
                      <Text
                        css={css`
                          background: linear-gradient(
                            180deg,
                            rgba(239, 132, 255, 1) 1%,
                            rgba(251, 202, 255, 1) 27%,
                            rgba(237, 102, 247, 1) 50%
                          );
                          -webkit-background-clip: text;
                          background-clip: text;
                          -webkit-text-fill-color: transparent;
                          -webkit-text-stroke: 1.81px #ffffff;
                          font-family: "Boba Mono-Regular", Helvetica;
                          font-size: 26.6px;
                          font-weight: 400;
                          text-overflow: ellipsis;
                          white-space: nowrap;
                        `}
                      >
                        RARE PASS
                      </Text>
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
                disabled
                css={css`
                  width: 100%;
                  border: 1px solid var(--stroke-tertiary);
                `}
              >
                <Box display="inline-flex" alignItems="center" justifyContent="center" gap="spacing-xxxs">
                  <Lock size={24} />
                  <Text variant="h5-regular" color="text-tertiary">
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
          left="0"
          top="148px"
          width="300px"
          height="8px"
        >
          <Box width="1px" height="1px" />
        </Box>
      )}
    </Box>
  );
};

export default BossQuestCard;
