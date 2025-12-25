import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const ArrowUpRight: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="ArrowUpRight"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="inherit" height="inherit" viewBox="0 0 13 11" fill="none" {...props}>
          <path d="M7.59091 10.3182L12.5 5.40909L7.59091 0.499998" stroke="#D548EC" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M0.500022 5.40909L12.2273 5.40909" stroke="#D548EC" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      }
      {...restProps}
    />
  );
};

export default ArrowUpRight;
