import type { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import type { IconProps } from "../Icons.types";

const CompassRose: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CompassRose"
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
            d="M16,1l-3,12l3,3l3,-3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16,31l-3,-12l3,-3l3,3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19,13l12,3l-12,3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13,13l-12,3l12,3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.0462,14.9888c0.2361,-2.5573 1.3594,-4.9514 3.1753,-6.7673c1.8159,-1.8159 4.21,-2.9392 6.7673,-3.1753"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9888,26.9537c-2.5573,-0.236 -4.9514,-1.3593 -6.7673,-3.1752c-1.8159,-1.816 -2.9392,-4.21 -3.1753,-6.7673"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.9538,17.0112c-0.2361,2.5573 -1.3594,4.9513 -3.1753,6.7673c-1.8159,1.8159 -4.21,2.9392 -6.7673,3.1752"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.0112,5.0462c2.5573,0.2361 4.9514,1.3594 6.7673,3.1753c1.8159,1.8159 2.9392,4.21 3.1753,6.7673"
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

export default CompassRose;
