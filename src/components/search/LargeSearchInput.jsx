import { useCallback } from "react";
import SearchInput from "@components/search/SearchInput";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import palette from "@lib/styles/palette";
import { Link, useNavigate } from "react-router-dom";

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
    top: 5.5%;
    z-index: 3;
  }
`;

const LargeSearchInput = ({ history, initialKeyword }) => {
  const navigate = useNavigate();

  const onSearch = useCallback((keyword) => {
    console.log(keyword);
  }, []);

  // const onKeyPress = useCallback((e) => {
  //   if (e.key === "Enter") {
  //     navigate(`/search`, {
  //       state: {
  //         key: searchKeyword,
  //       },
  //     });
  //   }
  // });

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
