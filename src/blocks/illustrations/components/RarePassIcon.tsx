import React, { FC } from "react";
import { IllustrationWrapper } from "../IllustrationWrapper";
import { IllustrationProps } from "../Illustrations.types";

const RarePassIcon: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="RarePassIcon"
      illustration={
        <svg xmlns="http://www.w3.org/2000/svg" width={restProps?.width ?? "36"} height={restProps?.width ?? "47"} viewBox="0 0 36 47" fill="none" {...props}>
          <rect width="36" height="47" rx="8" fill="url(#paint0_linear_36029_3403)"/>
          <rect x="3" y="3" width="30" height="41" rx="6" fill="black"/>
          <rect x="3" y="6" width="30" height="39" rx="5" fill="url(#paint1_linear_36029_3403)"/>
          <rect x="8" y="24" width="19" height="23" fill="url(#paint2_linear_36029_3403)" fill-opacity="0.6"/>
          <path d="M26.3896 22.6531C26.3896 22.6531 25.7889 22.4526 24.9544 22.1748C22.076 21.2153 19.7847 18.924 18.8253 16.0458C18.5473 15.2111 18.3469 14.6103 18.3469 14.6103C18.2253 14.2458 17.8841 14 17.4999 14C17.1157 14 16.7746 14.2459 16.6529 14.6104C16.6529 14.6104 16.4526 15.2111 16.1747 16.0455C15.2153 18.9239 12.924 21.2153 10.0457 22.1747C9.21107 22.4526 8.6103 22.6531 8.6103 22.6531C8.24583 22.7746 8 23.1158 8 23.5001C8 23.8843 8.24589 24.2254 8.61036 24.347C8.61036 24.347 9.21113 24.5474 10.0455 24.8252C12.9239 25.7847 15.2153 28.076 16.1747 30.9542C16.4526 31.7889 16.6529 32.3896 16.6529 32.3896C16.7746 32.7541 17.1156 33 17.4999 33C17.8841 33 18.2254 32.7542 18.3469 32.3897C18.3469 32.3897 18.5474 31.7889 18.8253 30.9545C19.7847 28.0761 22.076 25.7847 24.9542 24.8253C25.7889 24.5474 26.3896 24.347 26.3896 24.347C26.7541 24.2254 27 23.8843 27 23.5001C27 23.1158 26.7541 22.7746 26.3896 22.6531Z" fill="white"/>
          <defs>
            <linearGradient id="paint0_linear_36029_3403" x1="18" y1="0" x2="18" y2="47" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D267FC"/>
              <stop offset="0.48" stop-color="#896FFF"/>
              <stop offset="0.945" stop-color="#71F0B1"/>
            </linearGradient>
            <linearGradient id="paint1_linear_36029_3403" x1="18" y1="1.31013e-07" x2="18" y2="47" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D267FC"/>
              <stop offset="0.48" stop-color="#896FFF"/>
              <stop offset="0.945" stop-color="#71F0B1"/>
            </linearGradient>
            <linearGradient id="paint2_linear_36029_3403" x1="17.5" y1="24" x2="17.5" y2="47" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A9FFEE"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default RarePassIcon;
