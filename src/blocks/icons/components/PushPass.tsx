import type { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import type { IconProps } from "../Icons.types";

const PushPass: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="PushPass"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 28 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M12,27.2929c0.6298,0.465 1.3981,0.73 2.2218,0.706l10.1414,-0.292c2.0633,-0.06 3.6908,-1.898 3.6354,-4.106v-16.048c-0.0555,-2.208 -1.7737,-3.951 -3.8372,-3.891h-3.8583h-1.8031"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <rect
            x="1.2255"
            y="5.6469"
            width="17.0219"
            height="23.939"
            rx="3"
            transform="rotate(-15.0558, 1.2255, 5.6469)"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default PushPass;