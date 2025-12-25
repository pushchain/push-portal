import { FC } from "react";
import { IllustrationWrapper } from "../IllustrationWrapper";
import { IllustrationProps } from "../Illustrations.types";

const GlowStreaks: FC<IllustrationProps> = (allProps) => {
  const { svgProps: props, ...restProps } = allProps;

  return (
    <IllustrationWrapper
      componentName="GlowStreaks"
      illustration={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={restProps?.width ?? "600"}
          height={restProps?.height ?? "333"}
          viewBox="0 0 600 333"
          fill="#E58CF6"
          {...props}>
          <g opacity="0.8" filter="url(#filter0_f_34217_565)">
            <path d="M550.893 13.0267L48.7605 288.602L58.1994 429.791L550.893 13.0267Z" fill="#E58CF6"/>
          </g>
          <defs>
            <filter id="filter0_f_34217_565" x="3.8147e-06" y="-35.7338" width="599.654" height="514.285" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="24.3803" result="effect1_foregroundBlur_34217_565"/>
            </filter>
          </defs>
        </svg>
      }
      {...restProps}
    />
  );
};

export default GlowStreaks;

// import { FC } from "react";
// import { IllustrationWrapper } from "../IllustrationWrapper";
// import { IllustrationProps } from "../Illustrations.types";

// const GlowStreaks: FC<IllustrationProps> = (allProps) => {
//   const { svgProps: props, ...restProps } = allProps;
//   return (
//     <IllustrationWrapper
//       componentName="GlowStreaks"
//       illustration={
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width={restProps?.width ?? "600"}
//           height={restProps?.height ?? "333"}
//           viewBox="0 0 600 333"
//           fill="none"
//           {...props}>
//           <g opacity="0.3" filter="url(#filter0_f_34217_565)">
//             <path d="M550.893 13.0267L48.7605 288.602L58.1994 429.791L550.893 13.0267Z" fill="currentColor"/>
//           </g>
//           <defs>
//             <filter id="filter0_f_34217_565" x="3.8147e-06" y="-35.7338" width="599.654" height="514.285" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//               <feFlood flood-opacity="0" result="BackgroundImageFix"/>
//               <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
//               <feGaussianBlur stdDeviation="24.3803" result="effect1_foregroundBlur_34217_565"/>
//             </filter>
//           </defs>
//         </svg>
//       }
//       {...restProps}
//     />
//   );
// };

// export default GlowStreaks;
