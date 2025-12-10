import { css } from "styled-components"
import { Back, Box, Button, Text } from "../../blocks"
import { Image } from "../../css/SharedStyling"
import OpenPassImage from "../../../static/assets/website/pushpass/OpenPass.webp"
import { useNavigate } from "react-router-dom"
import { device } from "../../config/globals"


export const PushPassItem = () => {
  const navigate = useNavigate();
  return(
    <Box
      padding="spacing-md"
      borderRadius="radius-md"
      width="100%"
      css={css`
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;

        border: 1px solid rgba(171, 70, 248, 0.40);
        background: rgba(0, 0, 0, 0.10);
        background-blend-mode: plus-lighter;
        box-shadow: 2.788px -8px 12px 0 rgba(255, 255, 255, 0.15) inset, 1.858px 1.732px 6px 0 rgba(255, 255, 255, 0.15) inset;
        backdrop-filter: blur(10px);
        box-sizing: border-box;
      `}
    >
        <Button
          variant="outline"
          onClick={()=> navigate('/rewards/pushpass')}
          css={css`
            border: none;
            &:hover:{
                border: none;
            }

            @media ${device.tablet} {
                padding: 0px;
                min-width: auto;
            }
          `}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-xxs"
        >
          <Back
            css={css`
              color: #C742DD;
            `} />
          <Text
            variant="bm-bold"
            css={css`
              color: #C742DD;
            `}>Back</Text>
        </Box>
      </Button>


      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Text variant="h2-semibold"
          css={css`
            background: linear-gradient(180deg, #FFF 49.73%, #C968E7 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            `}>Open & Claim your Rare Pass</Text>
        <Text
          variant="bm-regular"
          css={css`
            color: rgba(255, 255, 255, 0.75);
          `}>Crack open your rare pass to see what’s inside. </Text>
      </Box>


      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        gap="spacing-xl"
        css={css`
          margin: 40px 0px 120px 0px;
        `}
      >
        <Image src={OpenPassImage} alt="Open Pass" width={227} />

        <Button variant="primary">Open Pass</Button>
      </Box>


    </Box>
  )
}
