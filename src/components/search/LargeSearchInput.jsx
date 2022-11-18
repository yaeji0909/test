import { useCallback } from "react";
import SearchInput from "@components/search/SearchInput";
import styled from "styled-components";
import zIndexes from "@lib/styles/zIndexes";
import { Link } from "react-router-dom";

const StyledSearchInput = styled(SearchInput)`
  margin-top: 2rem;
  width: 88vw;
  margin-bottom: 0.5rem;
  height: 3rem;
  z-index: ${zIndexes.FloatButton};
  position: absolute;
  left: 6%;
  .hamburgerBtn {
    fill: #191a20;
    position: absolute;
    width: 1.2rem;
    height: 2rem;
    left: 4%;
    top: 12%;
    z-index: ${zIndexes.FloatButton};
  }
`;

const LargeSearchInput = ({ initialKeyword }) => {
  const onSearch = useCallback((keyword) => {}, []);

  return (
    <>
      <Link to='/search'>
        <StyledSearchInput onSearch={onSearch} initial={initialKeyword} large />
      </Link>
    </>
  );
};

export default LargeSearchInput;
