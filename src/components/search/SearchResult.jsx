import styled from "styled-components";
import { FiStar } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { addFavoriteList } from "@api/favoriteApi";
import { getBusStopInfo } from "@api/mapApi";
// import { useRecoilState } from "recoil";
// import { selectedCity } from "../../recoil/home";

const SearchResult = ({ resultList, query }) => {
  const [clickToggle, setClickToggle] = useState(false);
  const [clickedBusStop, setClickedBusStop] = useState([]);
  // const [city, setCity] = useRecoilState(selectedCity);

  const putMutation = useMutation(() => {
    addFavoriteList(resultList.city, resultList.id);
  });

  const { data: busListInSelectedBusStop = [] } = useQuery(
    ["route", clickedBusStop],
    () => getBusStopInfo(clickedBusStop),
    {
      enabled: !!clickedBusStop !== [],
    }
  );

  const clickHandler = () => {
    setClickToggle(!clickToggle);
  };

  const addBusStopInFavList = (e) => {
    if (clickToggle) {
      setClickedBusStop(resultList);
    } else {
      setClickedBusStop([]);
    }
    // setTimeout(() => {
    // putMutation.mutate(resultList.city, resultList.id);
    // }, 5000);
  };

  useEffect(() => {
    console.log(clickToggle);
    if (clickToggle) {
      addBusStopInFavList();
      console.log(clickedBusStop);
    } else return;
  }, [clickToggle]);

  return resultList?.name.includes(query) || resultList?.no.includes(query) ? (
    <SearchContentsList onClick={clickHandler}>
      <List>
        {resultList?.name.includes(query) ? (
          <>
            {resultList.name.split(query)[0]}
            <span style={{ color: "#3186C4" }}>{query}</span>
            {resultList.name.split(query)[1]}
            <br />
            <span style={{ color: "#8c8d96" }}>{resultList.no}</span>
          </>
        ) : (
          <>
            <span>{resultList.name}</span>
            <br />
            {resultList.no.split(query)[0]}
            <span style={{ color: "#3186C4" }}>{query}</span>
            {resultList.no.split(query)[1]}
          </>
        )}
      </List>
      <ImgBox>
        {clickToggle ? (
          <FiStar alt={"starBtn"} color='#f2e528' fill='#f2e528' />
        ) : (
          <FiStar alt={"starBtn"} />
        )}
      </ImgBox>
    </SearchContentsList>
  ) : (
    ""
  );
};

const List = styled.li`
  padding: 1.2rem;
  .stop-num {
    display: block;
    color: #8c8d96;
  }
`;

const ImgBox = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
  color: #b2b3b9;
`;

const SearchContentsList = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e2e7;
`;

export default SearchResult;
