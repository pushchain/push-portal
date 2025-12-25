import type { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import type { IconProps } from "../Icons.types";

const ArrowDown: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ArrowDown"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M9.6947,2.935l0.611,14.129"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7967,11.077l-5.492,5.988l-5.987,-5.492"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default ArrowDown;