import type { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import type { IconProps } from "../Icons.types";

const StarFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="StarFilled"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M10,5c0.001,0.1466 -0.043,0.2899 -0.127,0.4099c-0.084,0.1201 -0.204,0.211 -0.342,0.2601l-2.833,1.0306l-1.03,2.8334c-0.05,0.137 -0.142,0.255 -0.262,0.338c-0.119,0.083 -0.262,0.128 -0.408,0.128c-0.145,0 -0.288,-0.045 -0.407,-0.128c-0.12,-0.083 -0.212,-0.201 -0.262,-0.338l-1.03,-2.8339l-2.833,-1.0301c-0.137,-0.0507 -0.255,-0.1421 -0.338,-0.2619c-0.083,-0.1198 -0.128,-0.2622 -0.128,-0.4081c0,-0.1459 0.045,-0.2883 0.128,-0.4081c0.083,-0.1198 0.201,-0.2112 0.338,-0.2619l2.833,-1.0301l1.03,-2.8339c0.05,-0.1368 0.142,-0.2547 0.262,-0.338c0.119,-0.0833 0.262,-0.128 0.407,-0.128c0.146,0 0.289,0.0447 0.408,0.128c0.12,0.0833 0.212,0.2012 0.262,0.338l1.031,2.8339l2.832,1.0301c0.138,0.0491 0.258,0.14 0.342,0.2601c0.084,0.12 0.128,0.2633 0.127,0.4099z"
            fill="currentColor"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default StarFilled;