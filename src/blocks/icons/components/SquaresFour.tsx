import type { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import type { IconProps } from "../Icons.types";

const SquaresFour: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="SquaresFour"
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
            d="M13,6h-6c-0.5523,0 -1,0.448 -1,1v6c0,0.552 0.4477,1 1,1h6c0.5523,0 1,-0.448 1,-1v-6c0,-0.552 -0.4477,-1 -1,-1z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25,6h-6c-0.5523,0 -1,0.448 -1,1v6c0,0.552 0.4477,1 1,1h6c0.5523,0 1,-0.448 1,-1v-6c0,-0.552 -0.4477,-1 -1,-1z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13,18h-6c-0.5523,0 -1,0.448 -1,1v6c0,0.552 0.4477,1 1,1h6c0.5523,0 1,-0.448 1,-1v-6c0,-0.552 -0.4477,-1 -1,-1z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25,18h-6c-0.5523,0 -1,0.448 -1,1v6c0,0.552 0.4477,1 1,1h6c0.5523,0 1,-0.448 1,-1v-6c0,-0.552 -0.4477,-1 -1,-1z"
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

export default SquaresFour;
