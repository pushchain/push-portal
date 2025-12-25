import { FC } from 'react';
import { css } from 'styled-components';
import { ArrowUpRight, Box, Button, ProgressBar, RewardsStarGradient, Text, XP } from '../../../blocks';

type Quest = {
  title: string;
  xp: number;
  progress?: number;
  maxProgress?: number;
  isCompleted: boolean;
  isDisabled: boolean;
};

type AppQuestCardProps = {
  appName: string;
  appUrl: string;
  description: string;
  resetTime: string;
  quests: Quest[];
  icon?: string;
  gradient?: string;
  titleGradient?: string;
  linkColor?: string;
  blurColor?: string;
};

const AppQuestCard: FC<AppQuestCardProps> = ({
  appName,
  appUrl,
  description,
  resetTime,
  quests,
  icon,
  gradient = 'linear-gradient(241deg, rgba(232, 221, 255, 1) 0%, rgba(207, 181, 255, 1) 100%)',
  titleGradient = 'linear-gradient(180deg, rgba(0, 0, 0, 1) 8%, rgba(107, 48, 178, 1) 100%)',
  linkColor = '#6a23d5',
  blurColor = '#a683e5',
}) => {
  const renderQuestItem = (quest: Quest, index: number) => {
    const showProgress = typeof quest.progress !== 'undefined' && typeof quest.maxProgress !== 'undefined';

    return (
      <Box
        key={index}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-xxs"
        padding="spacing-none spacing-md"
        width="100%"
        css={css`
          box-sizing: border-box;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="spacing-xxxs"
          padding={index === 0 ? "spacing-sm spacing-none" : "spacing-sm spacing-none"}
          alignSelf="stretch"
          css={css`
            border-top: ${index > 0 ? "1px solid #2D263D" : 'transparent'};
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            height={{initial: "24px", tb: "100%"}}
            alignItems="center"
            justifyContent="center"
            gap="spacing-xs"
            alignSelf="stretch"
          >
            <Box
              display="flex"
              flexDirection={{ initial: 'row', tb:'column'}}
              gap={{ tb: "spacing-xs", initial: 'spacing-none'}}
              alignItems={{initial: "center", tb: "flex-start"}}
              justifyContent="space-between"
              alignSelf="stretch"
              css={css`
                flex: 1;
              `}
            >
              <Text
                variant="bs-semibold"
                color="text-primary"
                css={css`
                  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  white-space: nowrap;
                `}
              >
                {quest.title}
              </Text>

              <Box
                display="inline-flex"
                alignItems="center"
                gap="spacing-lg"
                width={{tb: '100%'}}
                justifyContent={{ tb: 'space-between' }}

              >
                {showProgress ? (
                  <Box width="112px" height="8px">
                    <ProgressBar
                      progress={(20) || null}
                      max={100}
                      size="large"
                      progressIcon={<RewardsStarGradient size={35} />}
                    />
                  </Box>
                ) : (
                  <Box display="flex" alignItems="center" justifyContent="center" width="112px">
                    <Box display="inline-flex" alignItems="flex-start">
                      <Button
                        size="small"
                        variant="primary"
                        // disabled={quest.isDisabled}
                        css={css`
                          color: #fff;
                        `}
                      >
                        <Box
                          display="inline-flex"
                          alignItems="center"
                          justifyContent="center"
                          gap="spacing-xxxs"
                        >
                          <Text
                            css={css`
                              font-size: 12px;
                              font-weight: 500;
                              line-height: 16px;
                              white-space: nowrap;
                            `}
                          >
                            Claim
                          </Text>
                        </Box>
                      </Button>
                    </Box>
                  </Box>
                )}

                <Box
                  display="flex"
                  width="100px"
                  alignItems="center"
                  justifyContent="flex-end"
                  gap="spacing-md"
                >
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    gap="spacing-xxs"
                  >
                    <Box width="36px" height="14px">
                      <XP />
                    </Box>
                    <Text variant="bm-bold" color="text-primary">
                      {quest.xp}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" position="relative" width="100%">
      <Box
        display="flex"
        flexDirection="column"
        height="271px"
        alignItems="flex-start"
        gap="spacing-xs"
        padding="spacing-md"
        position="relative"
        alignSelf="stretch"
        borderRadius="radius-xl"
        border="border-xs solid stroke-tertiary"
        overflow="hidden"
        css={css`
          background: ${gradient};
          z-index: 1;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-end"
          gap="spacing-xs"
          position="relative"
          alignSelf="stretch"
          css={css`
            flex: 1;
          `}
        >
          <Box
            position="absolute"
            width="241px"
            height="241px"
            borderRadius="radius-round"
            css={css`
              background: ${blurColor};
              filter: blur(50px);
              top: 40px;
              left: -20px;
            `}
          />

          <Box
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            gap="spacing-xs"
            padding="spacing-xxs spacing-xs"
            position="relative"
            borderRadius="radius-xl"
            css={css`
              background: rgba(255, 255, 255, 0.20);
              border: 1px solid rgba(255, 255, 255, 0.50);
            `}
          >
            <Text
              variant="bes-bold"
              css={css`
                white-space: nowrap;
                color: rgba(0, 0, 0, 0.75);

              `}
            >
              {resetTime}
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-end"
            gap="spacing-xs"
            position="relative"
            alignSelf="stretch"
            css={css`
              flex: 1;
              `}
          >
            <Box
              display="flex"
              flexDirection="column"
              maxWidth="290px"
              alignItems="flex-start"
              gap="spacing-xxs"
            >
              <Box
                display="flex"
                alignItems="center"
                gap="spacing-xxs"
                alignSelf="stretch"
              >
                <Text
                  variant="h4-semibold"
                  css={css`
                    background: ${titleGradient};
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    white-space: nowrap;
                  `}
                >
                  {appName}
                </Text>

                <ArrowUpRight size={23} />
              </Box>

              <Text
                variant="bm-regular"
                css={css`
                  max-width: 100%;
                  color: #000;
                `}
              >
                Complete quests on{' '}
                <Text
                  as="span"
                  variant="bm-bold"
                  css={css`
                    color: ${linkColor};
                  `}
                >
                  {appUrl}
                </Text>
                {' '}and claim to level up and earn rewards
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        gap="spacing-xs"
        position="relative"
        alignSelf="stretch"
        css={css`
          margin-top: -29px;
          z-index: 0;
        `}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          padding="spacing-xxs spacing-none"
          position="relative"
          alignSelf="stretch"
          borderRadius="radius-none radius-none radius-lg radius-lg"
          border="none"
          gap="spacing-none"
          css={css`
            margin: -1px;
            background: rgba(0, 0, 0, 0.1);
            box-shadow:
              inset 1.86px 1.73px 6px rgba(255, 255, 255, 0.15),
              inset 2.79px -8px 12px rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            flex: 1;

            &::before {
              content: "";
              position: absolute;
              inset: 0;
              padding: 1px;
              border-radius: 0px 0px 32px 32px;
              background: conic-gradient(
                from 90deg at 100% 100%,
                rgba(171, 70, 248, 0.4) 12%,
                rgba(171, 70, 248, 0) 37%,
                rgba(171, 70, 248, 0.4) 62%,
                rgba(171, 70, 248, 0) 87%
              );
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              z-index: 1;
              pointer-events: none;
            }
          `}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            alignItems="flex-start"
            padding="spacing-lg spacing-none spacing-none spacing-none"
          >
            {quests.map((quest, index) => renderQuestItem(quest, index))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppQuestCard;
