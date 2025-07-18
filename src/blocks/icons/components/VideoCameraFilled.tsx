import { FC } from "react";
import { IconWrapper } from "../IconWrapper";
import { IconProps } from "../Icons.types";

const VideoCameraFilled: FC<IconProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;
  return (
    <IconWrapper
      componentName="VideoCameraFilled"
      icon={
        <svg
          width="inherit"
          height="inherit"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g clipPath="url(#clip0_304_22837)">
            <path
              d="M24 9V23C24 23.5304 23.7893 24.0391 23.4142 24.4142C23.0391 24.7893 22.5304 25 22 25H4C3.46957 25 2.96086 24.7893 2.58579 24.4142C2.21071 24.0391 2 23.5304 2 23V9C2 8.46957 2.21071 7.96086 2.58579 7.58579C2.96086 7.21071 3.46957 7 4 7H22C22.5304 7 23.0391 7.21071 23.4142 7.58579C23.7893 7.96086 24 8.46957 24 9ZM31.25 9.03125C31.1089 8.99673 30.9621 8.99247 30.8193 9.01875C30.6765 9.04504 30.5408 9.10127 30.4212 9.18375L26.2225 11.9825C26.154 12.0282 26.0979 12.0901 26.059 12.1627C26.0202 12.2353 25.9999 12.3164 26 12.3988V19.6012C25.9999 19.6836 26.0202 19.7647 26.059 19.8373C26.0979 19.9099 26.154 19.9718 26.2225 20.0175L30.445 22.8325C30.603 22.9379 30.7879 22.9962 30.9778 23.0004C31.1677 23.0046 31.3549 22.9546 31.5175 22.8563C31.6679 22.7606 31.7912 22.628 31.8757 22.4711C31.9602 22.3142 32.003 22.1382 32 21.96V10C32.0001 9.77822 31.9265 9.56269 31.7907 9.38732C31.655 9.21195 31.4647 9.0867 31.25 9.03125Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_304_22837">
              <rect width="32" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default VideoCameraFilled;
