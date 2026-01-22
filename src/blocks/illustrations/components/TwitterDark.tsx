import React, { FC } from "react";
import { IllustrationWrapper } from "../IllustrationWrapper";
import { IllustrationProps } from "../Illustrations.types";

const TwitterDark: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="TwitterDark"
      illustration={
        <svg xmlns="http://www.w3.org/2000/svg" width={restProps?.width ?? "37"} height={restProps?.width ?? "37"} viewBox="0 0 37 37" fill="none" {...props}>
          <path d="M21.9516 15.6183L35.6828 0H32.4289L20.5061 13.5611L10.9834 0H0L14.4003 20.5068L0 36.885H3.25405L15.8449 22.564L25.9016 36.885H36.885L21.9516 15.6183ZM17.4947 20.6875L16.0356 18.6455L4.42653 2.39692H9.42457L18.7933 15.51L20.2523 17.552L32.4305 34.597H27.4324L17.4947 20.6875Z" fill="#17181B"/>
        </svg>
      }
      {...restProps}
    />
  );
};

export default TwitterDark;
