// import * as React from "react";
// import styled, { css } from "styled-components";
// import { buttonColorMap } from "../../lib/styles/palette";
// import media from "../../lib/styles/media";
// import { themedPalette } from "../../lib/styles/themes";

// const ButtonBlock = styled.button`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: bold;
//   cursor: pointer;
//   outline: none;
//   border: none;
//   color: white;
//   background: ${(props) => buttonColorMap[props.color].background};
//   color: ${(props) => buttonColorMap[props.color].color};
//   &:hover,
//   &:focus {
//     background: ${(props) => buttonColorMap[props.color].hoverBackground};
//   }
//   border-radius: 4px;
//   padding-top: 0;
//   padding-bottom: 0;
//   ${(props) =>
//     props.inline &&
//     css`
//       & + & {
//         margin-left: 0.5rem;
//       }
//     `}

//   ${(props) =>
//     props.responsive &&
//     css`
//       ${media.small} {
//         height: 1.5rem;
//         padding-left: 0.9375rem;
//         padding-right: 0.9375rem;
//         font-size: 0.75rem;
//       }
//     `}

//   ${(props) =>
//     props.size === "medium" &&
//     css`
//       height: 2rem;
//       padding-left: 1.25rem;
//       padding-right: 1.25rem;
//       font-size: 1rem;
//     `}

//     ${(props) =>
//     props.size === "large" &&
//     css`
//       height: 2.5rem;
//       padding-left: 1.125rem;
//       padding-right: 1.125rem;
//       & + & {
//         margin-left: 0.875rem;
//       }
//       font-size: 1.125rem;
//     `}

//     &:disabled {
//     cursor: not-allowed;
//     background: ${themedPalette.bg_element4};
//     color: ${themedPalette.text3};
//     &:hover {
//       background: ${themedPalette.bg_element4};
//       color: ${themedPalette.text3};
//     }
//   }
// `;

// const Button = ({
//   children,
//   ref,
//   color = "teal",
//   inline,
//   size = "medium",
//   responsive = false,
//   ...rest
// }) => {
//   const htmlProps = rest;
//   return (
//     <ButtonBlock
//       color={color}
//       inline={inline}
//       size={size}
//       responsive={responsive}
//       {...htmlProps}
//       onClick={(e) => {
//         if (htmlProps.onClick) {
//           htmlProps.onClick(e);
//         }
//         e.target.blur();
//       }}
//     >
//       {children}
//     </ButtonBlock>
//   );
// };

// export default Button;
