import { css } from "styled-components"
import { Box, Text, Copy, Lozenge } from "../../../blocks"

type InviteCodeStatus = 'available' | 'claimed';

type InviteCode = {
  code: string;
  status: InviteCodeStatus;
}

type InviteCodeRowProps = {
  code: string;
  status: InviteCodeStatus;
  onCopy?: (code: string) => void;
}

const InviteCodeRow = ({ code, status, onCopy }: InviteCodeRowProps) => {
  const isAvailable = status === 'available';
  
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
            onClick={() => onCopy?.(code)}
          >
            <Copy size={16} color="icon-brand-medium" />
            <Text 
              variant="bs-semibold" 
              color="text-brand-medium"
            >
              Copy Code
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

type InviteCodesProps = {
  inviteCodes: InviteCode[];
  onCopyCode?: (code: string) => void;
}

export const InviteCodes = ({ inviteCodes, onCopyCode }: InviteCodesProps) => {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    onCopyCode?.(code);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-md"
      padding="spacing-md"
      borderRadius="radius-md"
      width="100%"
      css={css`
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: radial-gradient(50% 50% at 73% 50%, rgba(19, 18, 32, 1) 75%, rgba(41, 29, 57, 1) 100%);
        box-sizing: border-box;
        min-height: 300px;
      `}
    >
      {/* Header */}
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

      {/* Invite Code Rows */}
      <Box
        display="flex"
        flexDirection="column"
        gap="spacing-xs"
        css={css`flex: 1;`}
      >
        {inviteCodes.map((invite, index) => (
          <InviteCodeRow
            key={index}
            code={invite.code}
            status={invite.status}
            onCopy={handleCopy}
          />
        ))}
      </Box>
    </Box>
  );
};
