import { css } from 'styled-components';
import { useState } from 'react';
import {
  Box,
  Lozenge,
  Text,
  CompassRose,
  CastleTurret,
  StarFilled,
  PushPass,
  Ranking,
  Faucet,
  SquaresFour,
  DotsThree,
  CaretLeftCircle,
} from '../../blocks';
import type { IconProps } from '../../blocks/icons/Icons.types';

type MenuItem = {
  id: string; // Added unique id
  icon: React.ComponentType<IconProps>;
  label: string;
  badge?: {
    text: string;
    icon?: React.ComponentType<IconProps>;
  };
  onClick?: () => void;
};

export const Sidebar = () => {
  const [activeItemId, setActiveItemId] = useState<string>('discover');

  const topMenuItems: MenuItem[] = [
    {
      id: 'discover',
      icon: CompassRose,
      label: 'Discover',
    },
    {
      id: 'quests',
      icon: CastleTurret,
      label: 'Quests',
      badge: {
        text: 'NEW',
        icon: StarFilled,
      },
    },
    {
      id: 'push-pass',
      icon: PushPass,
      label: 'Push Pass',
    },
    {
      id: 'leaderboards',
      icon: Ranking,
      label: 'Leaderboards',
    },
  ];

  const bottomMenuItems: MenuItem[] = [
    {
      id: 'faucet',
      icon: Faucet,
      label: 'PC Token Faucet',
    },
    {
      id: 'ecosystem',
      icon: SquaresFour,
      label: 'Ecosystem Apps',
    },
  ];

  const getItemStyles = (isActive: boolean) => css`
    cursor: pointer;
    transition: all 0.2s ease;

    ${isActive
      ? css`
          backdrop-filter: blur(20px);
          box-shadow: inset 1.86px 1.73px 6px rgba(255, 255, 255, 0.15),
            inset 2.79px -8px 12px rgba(255, 255, 255, 0.15);
          background-color: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(171, 70, 248, 0.40);
        `
      : css`
          border: 1px solid transparent;
          &:hover {
            background-color: rgba(255, 255, 255, 0.05);
          }
        `}
  `;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      gap="spacing-xxs"
      width="284px"
      padding="spacing-sm"
    >
      <Box display="flex" flexDirection="column" gap="spacing-xxs">
        {topMenuItems.map((item) => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
            gap="spacing-xxs"
            padding={
              activeItemId === item.id
                ? 'spacing-xxs spacing-sm'
                : 'spacing-xxs spacing-sm'
            }
            borderRadius='radius-xs'
            css={getItemStyles(activeItemId === item.id)}
            onClick={() => {
              setActiveItemId(item.id);
              item.onClick?.();
            }}
          >
            <item.icon size={32} color="icon-brand-medium" />
            <Text
              variant={
                activeItemId === item.id ? 'h5-semibold' : 'h5-regular'
              }
              color="text-primary"
            >
              {item.label}
            </Text>
            {item.badge && (
              <Lozenge
                size="small"
                icon={item.badge.icon && <item.badge.icon size={10} />}
                css={css`
                  background-color: #f7cbff;
                  border-radius: 4px;
                  padding: 2px 6px;
                  margin-left: auto;
                `}
              >
                <Text
                  variant="c-bold"
                  css={css`
                    color: #aa30be;
                    font-size: 10px;
                    text-transform: uppercase;
                  `}
                >
                  {item.badge.text}
                </Text>
              </Lozenge>
            )}
          </Box>
        ))}
      </Box>

      {/* Bottom Section */}
      <Box display="flex" flexDirection="column" gap="spacing-xxs">
        {bottomMenuItems.map((item) => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
            gap="spacing-xxs"
            padding={
              activeItemId === item.id
                ? 'spacing-xxs spacing-sm'
                : 'spacing-xxs spacing-sm'
            }
            borderRadius='radius-xs'
            css={getItemStyles(activeItemId === item.id)}
            onClick={() => {
              setActiveItemId(item.id);
              item.onClick?.();
            }}
          >
            <item.icon size={32} color="icon-brand-medium" />
            <Text
              variant={
                activeItemId === item.id ? 'h5-semibold' : 'h5-regular'
              }
              color="text-primary"
            >
              {item.label}
            </Text>
          </Box>
        ))}

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="spacing-xxs"
          padding={
            activeItemId === 'more'
              ? 'spacing-xxs spacing-sm'
              : 'spacing-xxs spacing-sm'
          }
          borderRadius='radius-xs'
          css={getItemStyles(activeItemId === 'more')}
          onClick={() => setActiveItemId('more')}
        >
          <Box display="flex" alignItems="center" gap="spacing-xxs">
            <DotsThree size={24} color="icon-brand-medium" />
            <Text
              variant={activeItemId === 'more' ? 'h5-semibold' : 'h5-regular'}
              color="text-primary"
            >
              More
            </Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="21px"
            height="21px"
            borderRadius="radius-xxxs"
            css={css`
              background-color: #4f4072;
            `}
          >
            <CaretLeftCircle size={21} color="text-primary" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
