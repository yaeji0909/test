import PageTemplate from "../base/PageTemplate";
import Responsive from "./Responsive";
import styled from "styled-components";
import media from "@lib/styles/media";

const SearchTemplate = styled(Responsive)`
  margin-top: 3.5rem;
  ${media.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 2rem;
  }
  ${media.small} {
    margin-top: 0.5rem;
  }
`;

SearchTemplate = ({ children }) => {
  return (
    <PageTemplate>
      <SearchTemplate>{children}</SearchTemplate>
    </PageTemplate>
  );
};

export default SearchTemplate;
