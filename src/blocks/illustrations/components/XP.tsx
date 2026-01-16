import React, { FC } from "react";
import { IllustrationWrapper } from "../IllustrationWrapper";
import { IllustrationProps } from "../Illustrations.types";

const XP: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IllustrationWrapper
      componentName="XP"
      illustration={
        <svg xmlns="http://www.w3.org/2000/svg" width={restProps?.width ?? "36"} height={restProps?.height ?? "14"} viewBox="0 0 36 14" fill="none" {...props}>
          <path d="M16.129 4.2C16.129 4.9875 15.513 5.6 14.7849 5.6C14.0289 5.6 13.4408 6.24167 13.4408 7C13.4408 7.7875 14.0289 8.4 14.7849 8.4C15.513 8.4 16.129 9.04167 16.129 9.8V12.6C16.129 13.3875 15.513 14 14.7849 14H12.0967C11.3407 14 10.7527 13.3875 10.7527 12.6V9.8C10.7527 9.04167 10.1366 8.4 9.40858 8.4H6.72041C5.96437 8.4 5.37633 9.04167 5.37633 9.8V12.6C5.37633 13.3875 4.76029 14 4.03225 14H1.34408C0.588036 14 0 13.3875 0 12.6V9.8C0 9.04167 0.588036 8.4 1.34408 8.4C2.07213 8.4 2.68816 7.7875 2.68816 7C2.68816 6.24167 2.07213 5.6 1.34408 5.6C0.588036 5.6 0 4.9875 0 4.2V1.4C0 0.641666 0.588036 0 1.34408 0H4.03225C4.76029 0 5.37633 0.641666 5.37633 1.4V4.2C5.37633 4.9875 5.96437 5.6 6.72041 5.6H9.40858C10.1366 5.6 10.7527 4.9875 10.7527 4.2V1.4C10.7527 0.641666 11.3407 0 12.0967 0H14.7849C15.513 0 16.129 0.641666 16.129 1.4V4.2Z" fill="url(#paint0_linear_35729_3170)"/>
          <path d="M22.5592 1.4C22.5592 0.641666 23.1472 0 23.9033 0H34.6559C35.384 0 36 0.641666 36 1.4V7C36 7.7875 35.384 8.4 34.6559 8.4H26.5914C25.8354 8.4 25.2473 9.04167 25.2473 9.8V12.6C25.2473 13.3875 24.6313 14 23.9033 14H21.2151C20.459 14 19.871 13.3875 19.871 12.6V4.2C19.871 3.44167 20.459 2.8 21.2151 2.8C21.9431 2.8 22.5592 2.1875 22.5592 1.4ZM31.9678 5.6C32.6958 5.6 33.3118 4.9875 33.3118 4.2C33.3118 3.44167 32.6958 2.8 31.9678 2.8H26.5914C25.8354 2.8 25.2473 3.44167 25.2473 4.2C25.2473 4.9875 25.8354 5.6 26.5914 5.6H31.9678Z" fill="url(#paint1_linear_35729_3170)"/>
          <defs>
            <linearGradient id="paint0_linear_35729_3170" x1="18" y1="0" x2="18" y2="14" gradientUnits="userSpaceOnUse">
              <stop offset="0.0144231" stop-color="#EF84FF"/>
              <stop offset="0.274038" stop-color="#FBCAFF"/>
              <stop offset="0.504808" stop-color="#ED66F7"/>
            </linearGradient>
            <linearGradient id="paint1_linear_35729_3170" x1="18" y1="0" x2="18" y2="14" gradientUnits="userSpaceOnUse">
              <stop offset="0.0144231" stop-color="#EF84FF"/>
              <stop offset="0.274038" stop-color="#FBCAFF"/>
              <stop offset="0.504808" stop-color="#ED66F7"/>
            </linearGradient>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default XP;
