import { css } from "styled-components"
import { Box, Text, Button } from "../../../blocks"
import { device } from "../../../config/globals"

type SquadHeaderProps = {
  onInviteMembers?: () => void;
}

// S3 Squad Icon component
const SquadIcon = () => (
  <Box
    css={css`
      position: relative;
      width: 36px;
      height: 47px;
      border-radius: 8px;
      background: linear-gradient(180deg, rgba(210, 103, 252, 1) 0%, rgba(137, 111, 255, 1) 48%, rgba(113, 240, 177, 1) 94%);
      flex-shrink: 0;
    `}
  >
    <Box
      css={css`
        position: absolute;
        top: 3px;
        left: 3px;
        width: 30px;
        height: 41px;
        background: #000;
        border-radius: 6px;
      `}
    />
    <Box
      css={css`
        position: absolute;
        top: 6px;
        left: 3px;
        width: 30px;
        height: 39px;
        border-radius: 5px;
        background: linear-gradient(180deg, rgba(210, 103, 252, 1) 0%, rgba(137, 111, 255, 1) 48%, rgba(113, 240, 177, 1) 94%);
      `}
    />
    <Box
      css={css`
        position: absolute;
        top: 24px;
        left: 8px;
        width: 19px;
        height: 23px;
        background: linear-gradient(180deg, rgba(169, 255, 238, 0.6) 0%, rgba(255, 255, 255, 0) 100%);
      `}
    />
    {/* Placeholder for vector icon */}
    <Box
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Text variant="bs-bold" color="text-primary" css={css`font-size: 10px;`}>S3</Text>
    </Box>
  </Box>
);

export const SquadHeader = ({ onInviteMembers }: SquadHeaderProps) => {
  return (
    <Box
      display="flex"
      flexDirection={{ initial: "row", ml: "column" }}
      alignItems={{ initial: "center", ml: "flex-start" }}
      gap="spacing-xs"
      width="100%"
    >
      <SquadIcon />
      
      <Box
        display="flex"
        flexDirection="column"
        css={css`flex: 1;`}
      >
        <Text
          variant="h3-semibold"
          css={css`
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            background: linear-gradient(180deg, rgba(255, 255, 255, 1) 50%, rgba(201, 104, 231, 1) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          S3 Squad
        </Text>
        <Text 
          variant="bm-regular"
          css={css`color: rgba(255, 255, 255, 0.75);`}
        >
          Join or create squads with up to 10 players and unlock special boosts.
        </Text>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        css={css`
          @media ${device.mobileL} {
            width: 100%;
          }
        `}
      >
        <Button
          variant="outline"
          size="medium"
          onClick={onInviteMembers}
          css={css`
            border-color: rgba(255, 255, 255, 0.75);
            min-width: 100px;
            
            @media ${device.mobileL} {
              width: 100%;
            }
          `}
        >
          Invite Members
        </Button>
      </Box>
    </Box>
  );
};
