import type { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import type { IconProps } from "../Icons.types";

const Ranking: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="Ranking"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M4,26v-13c0,-0.265 0.1054,-0.52 0.2929,-0.707c0.1875,-0.188 0.4419,-0.293 0.7071,-0.293h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11,26v-19c0,-0.265 0.1054,-0.52 0.2929,-0.707c0.1875,-0.188 0.4419,-0.293 0.7071,-0.293h8c0.2652,0 0.5196,0.105 0.7071,0.293c0.1875,0.187 0.2929,0.442 0.2929,0.707v19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28,26v-8c0,-0.265 -0.1054,-0.52 -0.2929,-0.707c-0.1875,-0.188 -0.4419,-0.293 -0.7071,-0.293h-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15,12.5l1.5,-0.5v5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2,26h28"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Ranking;