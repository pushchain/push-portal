import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Text } from '../../../blocks';

type TabType = 'unopened' | 'collection';

type PushPassTabsProps = {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
};

const PushPassTabs: FC<PushPassTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <Box
      gap="spacing-xs"
      alignSelf="stretch"
      css={css`
        display: flex;
        align-items: center;
        position: relative;
        border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      `}
    >
      <Box
        padding="spacing-none spacing-sm spacing-sm spacing-sm"
        cursor="pointer"
        onClick={() => onTabChange('unopened')}
        css={css`
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          border-bottom: ${activeTab === 'unopened' ? '2px solid var(--stroke-brand-medium)' : 'none'};
        `}
      >
        <Box
          gap="spacing-xs"
          css={css`
            display: inline-flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <Text variant="h5-semibold" color="text-secondary">
            Unopened Passes
          </Text>
        </Box>
      </Box>

      <Box
        padding="spacing-none spacing-sm spacing-sm spacing-sm"
        alignSelf="stretch"
        cursor="pointer"
        onClick={() => onTabChange('collection')}
        css={css`
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          position: relative;
          border-bottom: ${activeTab === 'collection' ? '2px solid var(--stroke-brand-medium)' : 'none'};
        `}
      >
        <Box
          gap="spacing-xs"
          css={css`
            display: inline-flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <Text variant="h5-semibold" color="text-secondary">
            My Collection
          </Text>
        </Box>
      </Box>

      <Box
        padding="spacing-none spacing-sm spacing-sm spacing-sm"
        alignSelf="stretch"
        css={css`
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        `}
      >
        <Box width="99px" height="23px" />
      </Box>
    </Box>
  );
};

export default PushPassTabs;
