import { Helmet } from "react-helmet-async";
import SearchInput from "../../components/search/SearchInput";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import { useCallback, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { searchBusStop } from "@api/BusServiceApi";
import busStop from "@static/images/bus-stop.png";
import SearchResult from "../../components/search/SearchResult";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const { data: busStopInfo = [], isSuccess } = useQuery(
    ["busArrivalInfo", searchKeyword],
    () => searchBusStop(searchKeyword),
    {
      enabled: !!searchKeyword,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      const searchResultArray = busStopInfo.map((stopInfo) => [
        stopInfo.name,
        stopInfo.no,
      ]);
      editBusStopData(searchResultArray);
    }
  }, [busStopInfo]);

  const onSearch = useCallback((keyword) => {
    console.log(keyword);
    setSearchKeyword(keyword);
  }, []);

  const editBusStopData = (searchResult) => {
    setSearchResult(searchResult);
  };

  return (
    <div>
      <Helmet>
        <title>search page</title>
      </Helmet>
      <SearchInputBox>
        <MdOutlineArrowBackIosNew onClick={() => navigate(-1)} />
        <SearchInput searchAsYouType onSearch={onSearch} />
        <MdCancel className='cancel-btn' onClick={() => setSearchKeyword("")} />
      </SearchInputBox>
      <SearchContentsBox>
        {searchKeyword ? (
          searchResult.map((el, index) => (
            <SearchResult
              item={el[0]}
              no={el[1]}
              query={searchKeyword}
              key={index}
            />
          ))
        ) : (
          <BeforeSearch>
            <img src={busStop} alt='bus-stop-img' />
          </BeforeSearch>
        )}
      </SearchContentsBox>
    </div>
  );
}
const SearchInputBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid #8c8d96;
  position: relative;
  svg {
    color: #8c8d96;
    font-size: 1.5rem;
  }
  .cancel-btn {
    color: #a6a6a6;
    font-size: 1.5rem;
    position: absolute;
    right: 3%;
  }
`;

const SearchContentsBox = styled.ul`
  width: 100%;
`;

const BeforeSearch = styled.div`
  position: absolute;
  left: 25%;
  top: 30%;
`;

export default SearchPage;
