import React, { useCallback } from "react";
import SearchInput from "@components/search/SearchInput";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import palette from "@lib/styles/palette";

const StyledSearchInput = styled(SearchInput)`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  height: 3rem;
  z-index: 2;
  position: absolute;
  left: 6%;
`;

const Block = styled.div`
  .user-search-description {
    color: ${palette.gray7};
  }
  .hamburgerBtn {
    width: 1.2rem;
    height: 3rem;
    position: absolute;
    left: 9%;
    top: 5.3%;
    z-index: 3;
  }
`;

function LargeSearchInput({ history, initialKeyword, location }) {
  const onSearch = useCallback((keyword) => {
    console.log(keyword);
  }, []);

  return (
    <Block>
      <div className='user-search-description'>
        <GiHamburgerMenu className='hamburgerBtn' />
      </div>
      <StyledSearchInput
        onSearch={onSearch}
        initial={initialKeyword}
        large
        searchAsYouType
      />
    </Block>
  );
}

export default LargeSearchInput;
