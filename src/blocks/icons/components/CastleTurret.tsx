import type { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import type { IconProps } from "../Icons.types";

const CastleTurret: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="CastleTurret"
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
            d="M24,28v-14l1.7075,-1.7075c0.1872,-0.1874 0.2924,-0.4414 0.2925,-0.7062v-5.5863c0,-0.2652 -0.1054,-0.5196 -0.2929,-0.7071c-0.1875,-0.1875 -0.4419,-0.2929 -0.7071,-0.2929h-3v4h-4v-4h-4v4h-4v-4h-3c-0.2652,0 -0.5196,0.1054 -0.7071,0.2929c-0.1875,0.1875 -0.2929,0.4419 -0.2929,0.7071v5.5863c0.0001,0.2648 0.1053,0.5188 0.2925,0.7062l1.7075,1.7075v14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13,28v-7c0,-0.796 0.3161,-1.5587 0.8787,-2.1213c0.5626,-0.5626 1.3257,-0.8787 2.1213,-0.8787c0.7956,0 1.5587,0.3161 2.1213,0.8787c0.5626,0.5626 0.8787,1.3253 0.8787,2.1213v7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5,28h22"
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

export default CastleTurret;