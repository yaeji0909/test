import styled, { css } from "styled-components";
import React, { useRef, useMemo, useEffect } from "react";
import themedPalette from "@lib/styles/themes";
import media from "@lib/styles/media";
import palette from "@lib/styles/palette";
import useToggle from "@lib/hooks/useToggle";
import useInput from "@lib/hooks/useInput";
import { debounce } from "throttle-debounce";
import { GiHamburgerMenu } from "react-icons/gi";

const SearchInputBlock = styled.div`
  display: flex;
  height: 2.25rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  align-items: center;
  transition: all 0.125s ease-in;
  cursor: text;
  border-radius: 0.5rem;
  svg {
    transition: all 0.125s ease-in;
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    fill: ${palette.gray5};
    flex-shrink: 0;
  }
  input {
    transition: all 0.125s ease-in;
    font-size: 1rem;
    flex: 1;
    display: block;
    line-height: 1rem;
    height: 1.5rem;
    padding: 0;
    border: none;
    outline: 0;
    background: transparent;
    color: #191a20;
    min-width: 0;
    &::placeholder {
      color: ${themedPalette.text3};
    }
  }

  ${(props) =>
    props.focus &&
    css`
      svg {
        fill: ${palette.gray9};
      }
      input {
        color: ${themedPalette.text1};
      }
    `}

  ${(props) =>
    props.large &&
    css`
      height: 2rem;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
      border: 1px solid ${themedPalette.border3};
      padding: 0 1.5rem;
      background: #ffffff;
      input {
        padding-left: 2rem;
        font-size: 1.5rem;
        line-height: 2rem;
        height: auto;
        background: transparent;
      }

      ${media.small} {
        height: 2.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        svg {
          width: 1rem;
          height: 1rem;
          margin-right: 0.75rem;
        }
        input {
          position: relative;
          flex: 1;
          font-size: 1.125rem;
          line-height: 1.5;
          height: auto;
          color: transparent;
          &:focus {
            outline: none;
          }
        }
      }
    `}
`;

const SearchInput = ({
  className,
  onSearch,
  initial,
  large,
  searchAsYouType,
}) => {
  const [focus, toggleFocus] = useToggle(false);
  const [value, onChange] = useInput(initial);
  const mounted = useRef(false);
  const inputRef = useRef(null);

  const debouncedSearch = useMemo(() => {
    return debounce(300, (keyword) => {
      onSearch(keyword);
    });
  }, [onSearch]);

  const onClick = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(value);
    }
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (searchAsYouType) {
      debouncedSearch(value);
    }
  }, [debouncedSearch, searchAsYouType, value]);

  return (
    <SearchInputBlock
      className={className}
      focus={focus}
      onClick={onClick}
      large={large}
    >
      <input
        style={{ fontWeight: "300" }}
        placeholder='???????????? ??????????????????'
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        ref={inputRef}
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={value}
        autoFocus
      />
      {large && <GiHamburgerMenu className='hamburgerBtn' />}
    </SearchInputBlock>
  );
};

SearchInput.defaultProps = {
  initial: "",
};

export default SearchInput;
