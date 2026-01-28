import { useState } from "react";
import { css } from "styled-components"
import { Box, Text, Copy } from "../../../blocks"
import { useGetAllInvites } from "../../../queries";
import { useAuthHeaders } from "../../Rewards/hooks/useAuthHeaders";

type InviteCodeRowProps = {
  code: string;
  isUsed: boolean;
  copiedCode: string | null;
  onCopy: (code: string, e: React.MouseEvent) => void;
}

const InviteCodeRow = ({ code, isUsed, copiedCode, onCopy }: InviteCodeRowProps) => {
  const isAvailable = !isUsed;
  const isCopied = copiedCode === code;

  return (
    <Box
      display="flex"
      alignItems="center"
      gap="spacing-xs"
      width="100%"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="spacing-xs spacing-sm"
        borderRadius="radius-xs"
        css={css`
          flex: 1;
          background: rgba(0, 0, 0, 0.8);
        `}
      >
        <Text
          variant="bs-semibold"
          css={css`
            color: ${isAvailable ? '#fff' : 'rgba(255, 255, 255, 0.25)'};
          `}
        >
          {code}
        </Text>

        {isAvailable && (
          <Box
            display="flex"
            alignItems="center"
            gap="spacing-xxxs"
            cursor="pointer"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              onCopy(code, e);
            }}
            css={css`
              user-select: none;
              z-index: 1;
            `}
          >
            <Copy size={16} color={isCopied ? "icon-state-success-bold" : "icon-brand-medium"} />
            <Text
              variant="bs-semibold"
              color={isCopied ? "text-state-success-bold" : "text-brand-medium"}
            >
              {isCopied ? 'Copied' : 'Copy Code'}
            </Text>
          </Box>
        )}
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        css={css`
          min-width: 85px;
        `}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="spacing-xxxs spacing-xs"
          borderRadius="radius-xxxs"
          css={css`
            background: ${isAvailable ? '#f6caff' : '#000'};
          `}
        >
          <Text
            variant="os-bold"
            css={css`
              color: ${isAvailable ? '#aa2fbe' : 'rgba(255, 255, 255, 0.25)'};
              text-transform: uppercase;
              font-size: 10px;
            `}
          >
            {isAvailable ? 'Available' : 'Claimed'}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};


export const InviteCodes = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const { authHeaders } = useAuthHeaders();
  const { data: inviteCodeDetails } = useGetAllInvites(authHeaders);

  const handleCopy = async (code: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    await navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
      padding="spacing-md"
      borderRadius="radius-md"
      position="relative"
      width="100%"
      css={css`
        box-sizing: border-box;
        background: radial-gradient(109.87% 94.08% at 50% 5.92%, #131220 75.21%, #291D39 100%);
        min-height: 300px;

        &::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: rgba(255, 255, 255, 0.10);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}
    >
      <Box
        display="flex"
        alignItems="center"
        gap="spacing-xs"
        width="100%"
        css={css`
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          padding-bottom: var(--spacing-sm);
        `}
      >
        <Box css={css`flex: 1;`}>
          <Text
            variant="h5-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            Invite Code
          </Text>
        </Box>
        <Box css={css`min-width: 85px; text-align: center;`}>
          <Text
            variant="h5-semibold"
            css={css`color: rgba(255, 255, 255, 0.75);`}
          >
            Status
          </Text>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xs"
        css={css`flex: 1;`}
      >
        {inviteCodeDetails?.data?.invites?.map((invite, index) => (
          <InviteCodeRow
            key={index}
            code={invite.code}
            isUsed={invite.isUsed}
            copiedCode={copiedCode}
            onCopy={handleCopy}
          />
        ))}
      </Box>
    </Box>
  );
};
