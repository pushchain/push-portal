import type { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import type { IconProps } from "../Icons.types";

const DotsThree: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="DotsThree"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 24 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M19,2.5c0,1.381 1.1193,2.5 2.5,2.5c1.3807,0 2.5,-1.119 2.5,-2.5c0,-1.381 -1.1193,-2.5 -2.5,-2.5c-1.3807,0 -2.5,1.119 -2.5,2.5z"
            fill="currentColor"
          />
          <path
            d="M9.5,2.5c0,1.381 1.1193,2.5 2.5,2.5c1.3807,0 2.5,-1.119 2.5,-2.5c0,-1.381 -1.1193,-2.5 -2.5,-2.5c-1.3807,0 -2.5,1.119 -2.5,2.5z"
            fill="currentColor"
          />
          <path
            d="M0,2.5c0,1.381 1.1193,2.5 2.5,2.5c1.3807,0 2.5,-1.119 2.5,-2.5c0,-1.381 -1.1193,-2.5 -2.5,-2.5c-1.3807,0 -2.5,1.119 -2.5,2.5z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default DotsThree;