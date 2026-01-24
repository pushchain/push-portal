import { useState } from "react"
import { css } from "styled-components"
import { Box, Text, Button, RarePassIcon } from "../../../blocks"
import { device } from "../../../config/globals"
import { CreateSquadModal } from "./CreateSquadModal"

type SquadHeaderProps = {
  onInviteMembers?: () => void;
}


export const SquadHeader = ({ onInviteMembers }: SquadHeaderProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <Box
        display="flex"
        flexDirection={{ initial: "row", ml: "column" }}
        alignItems={{ initial: "center", ml: "flex-start" }}
        gap="spacing-xs"
        width="100%"
      >
        <RarePassIcon />

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
            onClick={() => setIsCreateModalOpen(true)}
            css={css`
              border-color: rgba(255, 255, 255, 0.75);
              min-width: 100px;

              @media ${device.mobileL} {
                width: 100%;
              }
            `}
          >
            Create Squad
          </Button>
        </Box>
      </Box>

      <CreateSquadModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
};
