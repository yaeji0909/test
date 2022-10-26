import { Helmet } from "react-helmet-async";
import Header from "../../components/base/Header";
// import { useLocation } from "react-router-dom";
import LargeSearchInput from "@components/search/LargeSearchInput";
import SearchInput from "../../components/search/SearchInput";

function SearchPage() {
  // const location = useLocation();
  // const state = location.state;
  // 검색키워드

  return (
    <>
      <Helmet>
        <title>SearchPage</title>
      </Helmet>
      <SearchInput />
    </>
  );
}

export default SearchPage;
