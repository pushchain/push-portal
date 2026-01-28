import { css } from "styled-components"
import { usePushWalletContext } from "@pushchain/ui-kit"
import { useNavigate } from "react-router-dom"

import { device } from "../../config/globals"
import {
  useGetCharacterInfo,
  useGenerateCharacter,
  useReshuffleCharacter,
  useMintCharacter
} from "../../queries"

import OpenPassImage from "../../../static/assets/website/pushpass/OpenPass.webp"
import { Back, Box, Button, Spinner, Text } from "../../blocks"
import { Image } from "../../css/SharedStyling"

type PassState = 'loading' | 'unopened' | 'opened' | 'minted';

const getPassState = (
  isLoading: boolean,
  data?: { eligible: boolean; assigned: boolean; characterId: string | null }
): PassState => {
  if (isLoading) return 'loading';
  if (!data?.assigned) return 'unopened';
  if (data?.characterId) return 'opened';
  return 'unopened';
};

export const PushPassItem = () => {
  const navigate = useNavigate();
  const { universalAccount } = usePushWalletContext();

  const { data: characterInfo, isLoading } = useGetCharacterInfo({
    walletAddress: universalAccount?.address
  });

  const generateCharacter = useGenerateCharacter();
  const reshuffleCharacter = useReshuffleCharacter();
  const mintCharacter = useMintCharacter();

  const passState = getPassState(isLoading, characterInfo);
  const isMinted = characterInfo?.characterId && characterInfo?.assigned;

  const handleOpenPass = () => {
    if (!universalAccount?.address) return;
    generateCharacter.mutate({ walletAddress: universalAccount.address });
  };

  const handleReshuffle = () => {
    if (!universalAccount?.address) return;
    reshuffleCharacter.mutate({ walletAddress: universalAccount.address });
  };

  const handleMint = () => {
    if (!universalAccount?.address) return;
    mintCharacter.mutate({ walletAddress: universalAccount.address });
  };

  const isActionLoading = generateCharacter.isPending || reshuffleCharacter.isPending || mintCharacter.isPending;

  return (
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
      `}
    >
      <Button
        variant="outline"
        onClick={() => navigate('/rewards/pushpass')}
        css={css`
          border: none;
          &:hover {
            border: none;
          }
          @media ${device.tablet} {
            padding: 0px;
            min-width: auto;
          }
        `}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="spacing-xxs"
        >
          <Back
            css={css`
              color: #C742DD;
            `}
          />
          <Text
            variant="bm-bold"
            css={css`
              color: #C742DD;
            `}
          >
            Back
          </Text>
        </Box>
      </Button>

      {passState === 'loading' && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          css={css`
            margin: 80px 0px;
          `}
        >
          <Spinner size="large" />
        </Box>
      )}

      {passState === 'unopened' && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Text
              variant="h2-semibold"
              css={css`
                background: linear-gradient(180deg, #FFF 49.73%, #C968E7 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              `}
            >
              Open & Claim your Rare Pass
            </Text>
            <Text
              variant="bm-regular"
              css={css`
                color: rgba(255, 255, 255, 0.75);
              `}
            >
              Crack open your rare pass to see what's inside.
            </Text>
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

            <Button
              variant="primary"
              onClick={handleOpenPass}
              disabled={isActionLoading || !characterInfo?.eligible}
            >
              {generateCharacter.isPending ? <Spinner size="small" /> : 'Open Pass'}
            </Button>

            {!characterInfo?.eligible && (
              <Text
                variant="bs-regular"
                css={css`
                  color: rgba(255, 255, 255, 0.5);
                `}
              >
                You are not eligible to open this pass yet.
              </Text>
            )}

            {generateCharacter.isError && (
              <Text
                variant="bs-regular"
                css={css`
                  color: #FF6B6B;
                `}
              >
                Failed to open pass. Please try again.
              </Text>
            )}
          </Box>
        </>
      )}

      {passState === 'opened' && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Text
              variant="h2-semibold"
              css={css`
                background: linear-gradient(180deg, #FFF 49.73%, #C968E7 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              `}
            >
              {isMinted ? 'Your Rare Pass' : 'Your Character'}
            </Text>
            <Text
              variant="bm-regular"
              css={css`
                color: rgba(255, 255, 255, 0.75);
              `}
            >
              {isMinted
                ? 'This pass has been minted and locked forever.'
                : 'Reshuffle for new traits or mint to lock it forever.'}
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
            gap="spacing-md"
            css={css`
              margin: 40px 0px 60px 0px;
            `}
          >
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="spacing-sm"
              padding="spacing-md"
              borderRadius="radius-md"
              css={css`
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(171, 70, 248, 0.3);
              `}
            >
              <Text
                variant="bs-semibold"
                css={css`
                  color: rgba(255, 255, 255, 0.6);
                `}
              >
                Character ID
              </Text>
              <Text
                variant="h4-semibold"
                css={css`
                  color: #C742DD;
                  font-family: monospace;
                `}
              >
                {characterInfo?.characterId}
              </Text>
            </Box>

            {!isMinted && (
              <Box
                display="flex"
                flexDirection="row"
                gap="spacing-md"
                css={css`
                  margin-top: 24px;
                `}
              >
                <Button
                  variant="outline"
                  onClick={handleReshuffle}
                  disabled={isActionLoading}
                  css={css`
                    min-width: 140px;
                  `}
                >
                  {reshuffleCharacter.isPending ? <Spinner size="small" /> : 'Reshuffle'}
                </Button>

                <Button
                  variant="primary"
                  onClick={handleMint}
                  disabled={isActionLoading}
                  css={css`
                    min-width: 140px;
                  `}
                >
                  {mintCharacter.isPending ? <Spinner size="small" /> : 'Mint Pass'}
                </Button>
              </Box>
            )}

            {(reshuffleCharacter.isError || mintCharacter.isError) && (
              <Text
                variant="bs-regular"
                css={css`
                  color: #FF6B6B;
                `}
              >
                {reshuffleCharacter.isError ? 'Failed to reshuffle.' : 'Failed to mint.'} Please try again.
              </Text>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};
