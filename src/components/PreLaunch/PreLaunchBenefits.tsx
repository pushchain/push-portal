import { css } from "styled-components"
import { Box, Text } from "../../blocks"

type PreLaunchBenefitProps = {
  verificationSuccess: boolean;
  isLoading?: boolean;
}

export const PreLaunchBenefits = ({
  verificationSuccess,
}: PreLaunchBenefitProps) => {

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="spacing-md"
      width="100%"
      css={css`
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.40);
        background: ${verificationSuccess ? `linear-gradient(241deg, #DDDEFF 4.77%, #B5B8FF 72.79%)` : `linear-gradient(242deg, #FDFDDA 5.27%, #FEDFAA 90.2%)`};
        box-sizing: border-box;
        margin-top: 40px;
      `}
    >
      <Text
        variant="h3-semibold"
        css={css`
          background: linear-gradient(180deg, #000 77.68%, #85532C 89.06%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
      >
        {verificationSuccess ? "Keep an eye on your Inbox for next steps." : "Starting your Season 3 journey early matters!"}
      </Text>
      <Text variant="bm-regular" color="rgba(0, 0, 0, 0.75)">
        {verificationSuccess ? "We will be sending out instructions on how to participate in the next few weeks." : "Season 3 begins invite-only. Earn points, multipliers, and perpetual rewards before everyone else."}


      </Text>
    </Box>
  )
}
