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
      { squadName: squadName.trim() },
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
      acceptButtonProps={{
        children: isPending ? "Creating..." : "Create",
        onClick: handleCreate,
        disabled: isPending,
      }}
      cancelButtonProps={{
        children: "Cancel",
        onClick: handleClose,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-md"
        width="100%"
        height="100%"
        css={css`
            border-radius: var(--radius-lg, 32px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            background: linear-gradient(180deg, #000 0%, #4C2A6B 100%);
        `}
      >
        <Text variant="h4-semibold">Create Squad</Text>
        <Text
          variant="bs-regular"
          css={css`color: var(--text-secondary);`}
        >
          Create a new squad and invite up to 10 players to unlock special boosts.
        </Text>
        <TextInput
          label="Squad Name"
          placeholder="Enter squad name"
          value={squadName}
          onChange={(e) => setSquadName(e.target.value)}
          error={!!error}
          errorMessage={error}
          required
        />
      </Box>
    </Modal>
  );
};
