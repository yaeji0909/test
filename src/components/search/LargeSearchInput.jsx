import { useCallback } from "react";
import SearchInput from "@components/search/SearchInput";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import palette from "@lib/styles/palette";
import { Link } from "react-router-dom";

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
    top: 3.2%;
    z-index: 3;
  }
`;

const LargeSearchInput = ({ history, initialKeyword }) => {
  const onSearch = useCallback((keyword) => {
    console.log(keyword);
  }, []);

  return (
    <Block>
      <div className='user-search-description'>
        <GiHamburgerMenu className='hamburgerBtn' />
      </div>
      <Link to='/search'>
        <StyledSearchInput
          onSearch={onSearch}
          initial={initialKeyword}
          large
          searchAsYouType
        />
      </Link>
    </Block>
  );
};

export default LargeSearchInput;
