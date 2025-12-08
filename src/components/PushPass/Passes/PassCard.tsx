import { FC } from 'react';
import { css } from 'styled-components';
import { Box, Button, Text, Lock } from '../../../blocks';
import { useNavigate } from 'react-router-dom';
import OpenPassImage from '../../../../static/assets/website/pushpass/openpass.webp';
import OpenPassLockedImage from '../../../../static/assets/website/pushpass/openpasslocked.webp';

type PassCardProps = {
  isLocked: boolean;
  lockMessage?: string;
  backgroundImage?: string;
  id?: number;
};

const PassCard: FC<PassCardProps> = ({
  isLocked,
  lockMessage = 'Locked',
  id
}) => {
  const navigate = useNavigate();

  const handleNavigation = (id: number) => {
    navigate(`/rewards/pushpass/${id}`)
  }
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
                  ? `url(${OpenPassLockedImage}) center/cover`
                  : `url(${OpenPassImage}) center/cover`
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
                onClick={() => handleNavigation(id)}
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
                      color: #fff;
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
