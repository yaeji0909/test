import { useCallback } from "react";
import SearchInput from "@components/search/SearchInput";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSearchInput = styled(SearchInput)`
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  height: 3rem;
  z-index: 2;
  position: absolute;
  left: 6%;
  .hamburgerBtn {
    fill: #191a20;
    position: absolute;
    width: 1.2rem;
    height: 2rem;
    left: 5%;
    top: 12%;
    z-index: 3;
  }
`;

const LargeSearchInput = ({ history, initialKeyword }) => {
  const onSearch = useCallback((keyword) => {
    console.log(keyword);
  }, []);

  return (
    <>
      <Link to='/search'>
        <StyledSearchInput
          onSearch={onSearch}
          initial={initialKeyword}
          large
          searchAsYouType
        />
      </Link>
    </>
  );
};

export default LargeSearchInput;
