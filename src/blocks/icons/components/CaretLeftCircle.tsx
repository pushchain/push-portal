import type { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import type { IconProps } from "../Icons.types";

const CaretLeftCircle: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CaretLeftCircle"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M6.75,0c-3.728,0 -6.75,3.022 -6.75,6.75v7.5c0,3.728 3.022,6.75 6.75,6.75h7.5c3.728,0 6.75,-3.022 6.75,-6.75v-7.5c0,-3.728 -3.022,-6.75 -6.75,-6.75zM12.044,5.213c0.376,-0.324 0.936,-0.272 1.25,0.117c0.314,0.389 0.263,0.967 -0.113,1.291l-4.341,3.736c-0.086,0.075 -0.086,0.211 0,0.286l4.341,3.736c0.376,0.324 0.427,0.902 0.113,1.291c-0.314,0.389 -0.874,0.441 -1.25,0.117l-4.341,-3.735c-0.938,-0.808 -0.938,-2.296 0,-3.104z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default CaretLeftCircle;
