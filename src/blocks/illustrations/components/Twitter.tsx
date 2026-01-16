import React, { FC } from "react";
import { IllustrationWrapper } from "../IllustrationWrapper";
import { IllustrationProps } from "../Illustrations.types";

const Twitter: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="Twitter"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? "24"}
          height={restProps?.height ?? "24"}
          viewBox="0 0 38 38"
          fill="none"
          {...props}
        >
          <path
            d="M22.7591 16.1758L36.4904 0.557524H33.2365L21.3137 14.1186L11.7909 0.557524H0.807556L15.2078 21.0643L0.807556 37.4425H4.06161L16.6524 23.1215L26.7092 37.4425H37.6925L22.7591 16.1758ZM18.3022 21.245L16.8432 19.203L5.23409 2.95444H10.2321L19.6008 16.0675L21.0599 18.1096L33.238 35.1546H28.24L18.3022 21.245Z"
            fill="#F5F6F8"
          />
        </svg>
      }
      {...restProps}
    />
  );
};

export default Twitter;
