import { useState } from "react";
import { css } from "styled-components";
import { Box, Modal, Text, TextInput } from "../../../blocks";
import { useCreateSquad } from "../../../queries/hooks";

type CreateSquadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateSquadModal = ({ isOpen, onClose }: CreateSquadModalProps) => {
  const [squadName, setSquadName] = useState("");
  const [error, setError] = useState("");

  const { mutate: createSquad, isPending } = useCreateSquad();

  const handleCreate = () => {
    if (!squadName.trim()) {
      setError("Squad name is required");
      return;
    }

    setError("");
    createSquad(
      { name: squadName.trim() },
      {
        onSuccess: () => {
          setSquadName("");
          onClose();
        },
        onError: (err: any) => {
          setError(err?.response?.data?.message || "Failed to create squad");
        },
      }
    );
  };

  const handleClose = () => {
    setSquadName("");
    setError("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      size="small"
      css={css`
        border-radius: var(--radius-lg, 32px);
        outline: none;
        background: linear-gradient(180deg, #000 0%, #4C2A6B 100%);

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: rgba(255, 255, 255, 0.25);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
      `}
      acceptButtonProps={{
        children: isPending ? "Creating..." : "Create Squad",
        onClick: handleCreate,
        disabled: isPending,
      }}
      cancelButtonProps={null}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
        width="100%"
      >
        <Text
          variant="h2-semibold"
          textAlign="center"
          css={css`
            background: linear-gradient(180deg, #FFF 0%, #FFE397 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            `}
        >
            Create Squad
        </Text>
        <TextInput
          label="Squad Name"
          placeholder="Enter squad name"
          value={squadName}
          onChange={(e) => setSquadName(e.target.value)}
          error={!!error}
          errorMessage={error}
        />

        <Text
          variant="bs-semibold"
          textAlign="center"
          css={css`
              color: var(--text-secondary);
        `}
        >
          Squads are permanent. You will be unable to join other squads after creating your own.
        </Text>
      </Box>
    </Modal>
  );
};
