import { Helmet } from "react-helmet-async";
// import { useLocation } from "react-router-dom";
import SearchInput from "../../components/search/SearchInput";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew, MdSavedSearch } from "react-icons/md";
// import { MdCancel } from "react-icons/md";
import SearchContents from "../../components/search/SearchContents";
import { useCallback, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { searchBusStop } from "@api/BusServiceApi";
import busStop from "@static/images/bus-stop.png";
import HighlightKeyword from "../../components/search/HighlightKeyword";

function SearchPage() {
  // const location = useLocation();
  // const state = location.state;
  // 검색키워드

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const { data: busStopInfo = [], isSuccess } = useQuery(
    ["busArrivalInfo", 1],
    () => searchBusStop(searchKeyword),
    {
      enabled: !!searchKeyword,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      const searchR = busStopInfo.map((stopInfo) => stopInfo.name);
      editBusStopData(searchR);
      // setSearchResult(busStopInfo);
      // console.log(busStopInfo);
    }
  }, [busStopInfo]);

  const onSearch = useCallback((keyword) => {
    console.log(keyword);
    setSearchKeyword(keyword);
  }, []);

  const editBusStopData = (searchResult) => {
    setSearchResult(searchResult);
  };

  const Highlight = ({ text }, { query }) => {
    if (query !== "" && text.includes(query)) {
      console.log("func");
      const parts = text.split(new RegExp(`(${query})`, "gi"));

      return (
        <>
          {parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
              <span style={{ color: "tomato" }} key={index}>
                {part}
              </span>
            ) : (
              part
            )
          )}
        </>
      );
    }

    return text;
  };

  return (
    <SearchBox>
      <Helmet>
        <title>SearchPage</title>
      </Helmet>
      <SearchInputBox>
        <MdOutlineArrowBackIosNew className=' ' />
        <SearchInput searchAsYouType onSearch={onSearch} />
        {/* {searchResult} */}
        {/* <MdCancel /> */}
      </SearchInputBox>
      <SearchContentsBox>
        {searchKeyword ? (
          <Highlight text={searchResult} query={searchKeyword}></Highlight>
        ) : (
          // searchResult.map((keyword, index) => (
          //   <SearchContents keyword={keyword} key={index} />
          // ))
          <BeforeSearch>
            <img src={busStop} alt='bus-stop-img' />
          </BeforeSearch>
        )}
      </SearchContentsBox>
    </SearchBox>
  );
}

const SearchBox = styled.div`
  width: 100%;
`;
const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  width: 100%;
  border-bottom: 1px solid #8c8d96;
  svg {
    font-size: 1.5rem;
  }
`;

const SearchContentsBox = styled.ul`
  width: 100%;
`;

const BeforeSearch = styled.div`
  padding: 15rem 6rem;
`;

export default SearchPage;
