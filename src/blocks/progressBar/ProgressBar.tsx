import type { FC, ReactNode } from "react";
import styled from "styled-components";
import type { ProgressBarProps } from "./ProgressBar.types";
import { getProgressWidthPercentage } from "./ProgressBar.utils";
import { getTextVariantStyles } from "../Blocks.utils";

const StyledProgressBarContainer = styled.div<{
  size: "small" | "large";
  progressIcon: ReactNode;
}>`
  background-color: var(--components-progress-bar-background-default);
  width: 100%;
  height: ${({ size }) => (size == "large" ? "12px" : "4px")};
  border-radius: var(--radius-xxs, 8px);
  position: relative;
  // margin-bottom: ${({ progressIcon }) => progressIcon && "30px"};
  box-sixing: border-box;
`;

const StyledProgressBar = styled.div<{ width: string; isComplete: boolean }>`
  border-radius: var(--radius-xxs, 8px);
  background-color: ${({ isComplete }) =>
    isComplete
      ? "var(--components-progress-bar-background-complete)"
      : "var(--components-progress-bar-background-progress)"};
  height: 100%;
  width: ${({ width }) => width};
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
  position: relative;
`;

const ProgressMarker = styled.div<{ position: string }>`
  position: absolute;
  left: ${({ position }) => position};
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;

const ProgressIcon = styled.div`
  position: relative;
`;

const ProgressText = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 12px;
  left: 50%;
  transform: translateX(-50%);
  ${() => getTextVariantStyles("bes-semibold", "text-primary")}
`;

const ProgressBar: FC<ProgressBarProps> = ({
  progress,
  max = 100,
  size,
  progressIcon,
  progressIconText,
  ...rest
}) => {
  const progressPercentage = getProgressWidthPercentage(progress, max);
  const isComplete = progressPercentage >= 100;
  const progressPosition = `${progressPercentage}%`;

  return (
    <StyledProgressBarContainer
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={progress}
      size={size}
      progressIcon={progressIcon}
      {...rest}
    >
      <StyledProgressBar
        width={`${progressPercentage}%`}
        isComplete={isComplete}
      />

      {progressIcon && (
        <ProgressMarker position={progressPosition}>
          <ProgressIcon>{progressIcon}</ProgressIcon>
          {progressIconText && <ProgressText>{progressIconText}</ProgressText>}
        </ProgressMarker>
      )}
    </StyledProgressBarContainer>
  );
};

ProgressBar.displayName = "ProgressBar";

export { ProgressBar };
