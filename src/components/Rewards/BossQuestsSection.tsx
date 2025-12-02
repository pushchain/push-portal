import { css } from 'styled-components';
import { Box, Text } from '../../blocks';
import BossQuestCard from './BossQuestCard';

const BossQuestsSection = () => {
  return (
    <Box
      display="inline-flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="spacing-xs"
      padding="spacing-md"
      borderRadius="radius-xl"
      border="none"
      position="relative"
      css={css`
        background-color: rgba(0, 0, 0, 0.1);
        &::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 32px;
          padding: 1px;
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
          pointer-events: none;
          z-index: 1;
        }
      `}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="spacing-md"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="spacing-xs"
        >
          <Box width="48px" height="48px">
            <img src="" alt="Boss Quest" width="48" height="48" />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="spacing-none"
            css={css`
              flex: 1;
            `}
          >
            <Box>
              <Text
                variant="h3-semibold"
                css={css`
                  background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 1) 50%,
                    rgba(201, 104, 231, 1) 100%
                  );
                  -webkit-background-clip: text;
                  background-clip: text;
                  -webkit-text-fill-color: transparent;
                  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  white-space: nowrap;
                `}
              >
                Boss Quests
              </Text>
            </Box>

            <Text variant="bm-regular" color="text-secondary">
              Bag the rarest rewards in Push Chain Testnet Donut by completing boss quests
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          alignItems="flex-start"
          alignSelf="stretch"
          gap="spacing-sm"
          height="473px"
        >
          <BossQuestCard
            title="Create content and tag @PushChain on X"
            description="Post a meme, thread or video about Push Chain"
            resetTime="Resets in 6D 23H"
            unlocks={{ rarePass: true }}
            isLocked={false}
            ctaText="10x Weekly winners on @PushChain"
          />

          <BossQuestCard
            title="Complete and Claim 25 App Quests"
            description="Earn a Rare Pass by completing 25 quests on any apps"
            resetTime="Resets in 29D 23H"
            progress={0}
            maxProgress={25}
            unlocks={{ rarePass: true, xp: 250 }}
            isLocked={true}
            ctaText="Locked"
          />

          <BossQuestCard
            title="Obtain & Scratch a total of 5 Rare Passes"
            description="Earn a Rare Pass by scratching 5 Rare Passes during Season 3"
            resetTime="Resets in 29D 23H"
            progress={0}
            maxProgress={5}
            unlocks={{ rarePass: true }}
            isLocked={true}
            ctaText="Locked"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BossQuestsSection;
