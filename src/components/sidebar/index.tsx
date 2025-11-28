import { css } from 'styled-components';
import { useState, useEffect } from 'react';
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
  Cross,
} from '../../blocks';
import type { IconProps } from '../../blocks/icons/Icons.types';
import { device } from '../../config/globals';
import useMediaQuery from '../../hooks/useMediaQuery';

type MenuItem = {
  id: string;
  icon: React.ComponentType<IconProps>;
  label: string;
  badge?: {
    text: string;
    icon?: React.ComponentType<IconProps>;
  };
  onClick?: () => void;
};

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const [activeItemId, setActiveItemId] = useState<string>('discover');
  const isLaptop = useMediaQuery(device.laptopL);

  useEffect(() => {
    if (isOpen && isLaptop) {
      const handleClickOutside = (e: MouseEvent) => {
        const sidebar = document.getElementById('sidebar');
        if (sidebar && !sidebar.contains(e.target as Node)) {
          onClose?.();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, isLaptop, onClose]);

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

  const handleItemClick = (itemId: string, onClick?: () => void) => {
    setActiveItemId(itemId);
    onClick?.();
    if (isLaptop) {
      onClose?.();
    }
  };

  return (
    <>
      {isLaptop && isOpen && (
        <Box
          css={css`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
          `}
          onClick={onClose}
        />
      )}

      <Box
        id="sidebar"
        display="flex"
        flexDirection="column"
        width="284px"
        padding="spacing-sm"
        css={css`
          height: 100%;
          position: relative;
          box-sizing: border-box;

          @media ${device.laptopL} {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            background-color: #1a1a1a;
            transform: translateX(${isOpen ? '0' : '-100%'});
            transition: transform 0.3s ease-in-out;
            z-index: 1000;
            overflow-y: auto;
          }
        `}
      >
        {isLaptop && (
          <Box
            display="flex"
            justifyContent="flex-end"
            padding="spacing-none spacing-none spacing-xs spacing-none"
            cursor="pointer"
            onClick={onClose}
          >
            <Cross size={24} color="icon-primary" />
          </Box>
        )}

        <Box display="flex" flexDirection="column" gap="spacing-xxs">
          {topMenuItems.map((item) => (
            <Box
              key={item.id}
              display="flex"
              alignItems="center"
              gap="spacing-xxs"
              padding="spacing-xxs spacing-sm"
              borderRadius="radius-xs"
              css={getItemStyles(activeItemId === item.id)}
              onClick={() => handleItemClick(item.id, item.onClick)}
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

        <Box css={css`flex: 1;`} />

        <Box display="flex" flexDirection="column" gap="spacing-xxs">
          {bottomMenuItems.map((item) => (
            <Box
              key={item.id}
              display="flex"
              alignItems="center"
              gap="spacing-xxs"
              padding="spacing-xxs spacing-sm"
              borderRadius="radius-xs"
              css={getItemStyles(activeItemId === item.id)}
              onClick={() => handleItemClick(item.id, item.onClick)}
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
            padding="spacing-xxs spacing-sm"
            borderRadius="radius-xs"
            css={getItemStyles(activeItemId === 'more')}
            onClick={() => handleItemClick('more')}
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
    </>
  );
};
