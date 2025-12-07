import { useState } from 'react';
import { css } from 'styled-components';
import { Box } from '../../blocks';
import PushPassHeroBanner from './HeroBanner/PushPassHeroBanner';
import PushPassTabs from './Tabs/PushPassTabs';
import UnopenedPassesContent from './Passes/UnopenedPassesContent';
import MyCollectionContent from './Passes/MyCollectionContent';

type TabType = 'unopened' | 'collection';

const PushPass = () => {
  const [activeTab, setActiveTab] = useState<TabType>('unopened');

  const passes = [
    { id: 1, isLocked: false },
    { id: 2, isLocked: true, lockMessage: 'Spin to Unlock' },
    { id: 3, isLocked: true, lockMessage: 'Unlocks at Lv. 15' },
    { id: 4, isLocked: true, lockMessage: 'Unlocks at Lv. 25' },
    { id: 5, isLocked: true, lockMessage: 'Unlocks at Lv. 40' },
    { id: 6, isLocked: true, lockMessage: 'Unlocks at Lv. 50' },
    { id: 7, isLocked: true, lockMessage: 'Complete Boss Quest' },
    { id: 8, isLocked: true, lockMessage: 'Complete Boss Quest' },
  ];

  return (
    <Box
      width="100%"
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
      `}
    >
      <Box
        alignSelf="stretch"
        width="100%"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: relative;
          gap: 100px;
          z-index: 1;
        `}
      >
        <PushPassHeroBanner />
      </Box>

      <Box
        width="100%"
        borderRadius="radius-none radius-none radius-xl radius-xl"
        css={css`
          position: relative;
          margin-top: -28px;
          z-index: 0;
          box-shadow:
            inset 1.86px 1.73px 6px rgba(255, 255, 255, 0.15),
            inset 2.79px -8px 12px rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-sizing: border-box;
        `}
      >
        <Box
          gap="spacing-xxs"
          padding="spacing-xxl spacing-md spacing-md spacing-md"
          borderRadius="radius-none radius-none radius-xl radius-xl"
          width="100%"
          css={css`
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            position: relative;
            margin: -1px;
            background: rgba(0, 0, 0, 0.1);
            border: none;
            box-sizing: border-box;

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
            gap="spacing-lg"
            alignSelf="stretch"
            css={css`
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              position: relative;
            `}
          >
            <PushPassTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === 'unopened' && <UnopenedPassesContent passes={passes} />}
            {activeTab === 'collection' && <MyCollectionContent />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PushPass;
