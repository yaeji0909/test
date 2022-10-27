import styled from "styled-components";

const SearchContents = ({ keyword }) => {
  return <SearchContentsList>{keyword}</SearchContentsList>;
};

const SearchContentsList = styled.li`
  border-bottom: 1px solid #e0e2e7;
  padding: 1.5rem 1rem;
`;

export default SearchContents;
