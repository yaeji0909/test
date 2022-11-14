import * as React from "react";
import styled, { css } from "styled-components";
import palette from "@lib/styles/palette";
import media from "../../lib/styles/media";

const ButtonBlock = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #b2b3b9;
    color: #ffffff;
  }
  border-radius: 4px;
  ${(props) =>
    props.inline &&
    css`
      & + & {
        margin-left: 0.5rem;
      }
    `}

  ${(props) =>
    props.responsive &&
    css`
      ${media.small} {
        height: 1.5rem;
        padding-left: 0.9375rem;
        padding-right: 0.9375rem;
        font-size: 0.75rem;
      }
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      height: 2rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      font-size: 1rem;
    `}

    ${(props) =>
    props.size === "large" &&
    css`
      height: 2.5rem;
      padding-left: 1.125rem;
      padding-right: 1.125rem;
      & + & {
        margin-left: 0.875rem;
      }
      font-size: 1.125rem;
    `}

    &:disabled {
    cursor: not-allowed;
    background: ${palette.gary6};
    color: ${palette.gray0};
    &:hover {
      background: ${palette.gary6};
      color: ${palette.gray0};
    }
  }
`;

const Button = ({
  children,
  ref,
  color = "teal",
  inline,
  size = "medium",
  responsive = false,
  ...rest
}) => {
  const htmlProps = rest;
  return (
    <ButtonBlock
      color={color}
      inline={inline}
      size={size}
      responsive={responsive}
      {...htmlProps}
      onClick={(e) => {
        if (htmlProps.onClick) {
          htmlProps.onClick(e);
        }
        e.target.blur();
      }}
    >
      {children}
    </ButtonBlock>
  );
};

export default Button;
