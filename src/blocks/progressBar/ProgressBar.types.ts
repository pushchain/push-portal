import { ReactNode } from "react";
import { TransformedHTMLAttributes } from "blocks/Blocks.types";
import { FlattenSimpleInterpolation } from "styled-components";

export type ProgressBarProps = {
  /* Additional prop from styled components to apply custom css to ProgressBar */
  css?: FlattenSimpleInterpolation;
  /* Progress value */
  progress: number;
  /* Max value */
  max?: number;
  /* Progress bar size*/
  size?: "small" | "large";
  /* Add Progress Icon*/
  progressIcon?: ReactNode;
  /* Add Progress Icon Text*/
  progressIconText?: string;
} & TransformedHTMLAttributes<HTMLDivElement>;
