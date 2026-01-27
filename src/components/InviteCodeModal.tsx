import { useState } from "react";
import { css } from "styled-components";
import { usePushChainClient, usePushWalletContext } from "@pushchain/ui-kit";

import { Box, Link, Modal, Text, TextInput } from "../blocks";
import ModalBg from "../../static/assets/website/shared/modal-bg.webp";
import { useCreateSeasonThreeUser, useGetSeasonThreeUserByWallet } from "../queries";
import { useSignMessageWithEthereum } from "./Rewards/hooks/useSignMessage";
import { walletToFullCAIP10 } from "../helpers/web3helper";


type InviteCodeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const InviteCodeModal = ({ isOpen, onClose }: InviteCodeModalProps) => {
  const { universalAccount } = usePushWalletContext();
  const { pushChainClient } = usePushChainClient();
  const [inviteCode, setInviteCode] = useState("");
  const [error, setError] = useState("");
  const { mutate: createUser, isPending } = useCreateSeasonThreeUser();

  const caip10WalletAddress = walletToFullCAIP10(
    universalAccount?.address as string,
    universalAccount?.chain,
  );

  const {
    refetch
  } = useGetSeasonThreeUserByWallet({
    walletAddress: caip10WalletAddress,
  });

  const ueaAccount = pushChainClient?.universal?.account;
  const { signMessage } = useSignMessageWithEthereum();



  const handleSubmit = async () => {
    if (!inviteCode.trim()) {
      setError("Invite code is required");
      return;
    }

    const { signature, messageToSend: signedMessage } = await signMessage();

    createUser(
      {
        userWallet: caip10WalletAddress,
        userUEAWallet: `eip155:42101:${ ueaAccount }`,
        phase: "HYPE",
        data: signedMessage,
        inviteCodeUsed: inviteCode,
        verificationProof: signature
      },
      {
        onSuccess: (response) => {
          console.log(response)
          refetch();
          onClose();

        },
        onError: (error: any) => {
          console.log("Error in creating activity", error);
          setError(error?.response?.data.error)
        },
      },
    );
  };

  const handleClose = () => {
    setInviteCode("");
    setError("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      showCloseButton={false}
      size="small"
      css={css`
        border-radius: var(--radius-lg, 32px);
        outline: none;
        background: url(${ModalBg}) no-repeat center center;
        background-size: cover;

        & > div:last-child {
          width: 100%;
          margin-bottom: 16px;
        }
      `}
      acceptButtonProps={{
        children: "Get Started",
        onClick: handleSubmit,
        block: true,
        disabled: isPending
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
         Invite Code
        </Text>
        <TextInput
          placeholder="Enter your code"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          error={!!error}
          errorMessage={error}
          backgroundColor={"rgba(0, 0, 0, 0.25)"}
        />
      </Box>

      <Box
        margin="spacing-sm spacing-none spacing-none spacing-none"
        width="100%">
        <Text textAlign="center" variant="bes-semibold">
          Season 3: Exclusive Access.
        </Text>
        <Text textAlign="center" variant="bes-semibold">
          Check
          <Link
            to="https://x.com/pushchain"
            textProps={{ variant: "bes-semibold", color: "#C742DD" }}
          >
            {' '}X{' '}
          </Link> and
          <Link
            to="https://discord.com/invite/pushchain"
            textProps={{ variant: "bes-semibold", color: "#C742DD" }}
          >
            {' '}Discord{' '}
          </Link> for invites.
        </Text>
      </Box>
    </Modal>
  );
};
