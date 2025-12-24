import { css } from "styled-components"
import { Box, LockFilled, Text } from "../../blocks"

export const PreLaunchDivider = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      gap="spacing-xs"
      width="100%"
      css={css`
        margin: 60px 0px;

        &:before,
        &:after {
          content: "";
          flex: 1 1;
          border-bottom: 1px solid #4F4072;
          margin: auto;
        }
        &:before {
          margin-right: var(--spacing-sm);
        }
        &:after {
          margin-left: var(--spacing-sm);
        }
      `}
    >
      <LockFilled size={28}  />
      <Text variant="h4-semibold" color="#FFFFFF" css={css`white-space: nowrap;`}>
        Season 3 Launches Soon
      </Text>
    </Box>
  )
}
