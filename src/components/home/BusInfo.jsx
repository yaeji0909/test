import styled from "styled-components";
import CheckBox from "../common/CheckBox";
import { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { getClickedBusInfo } from "@api/mapApi";
import { addFavoriteList } from "@api/favoriteApi";
import Timer from "../home/utils/Timer";
import { useRecoilState } from "recoil";
import { addFavorite } from "@recoil/favorite";
const BusInfo = ({ list = [], busStop = [] }) => {
  const [clickToggle, setClickToggle] = useState(false);
  const [selectedBus, setSelectedBus] = useRecoilState(addFavorite);

  const { data: busArrivalInfo = [] } = useQuery(
    ["busArrivalInfo", list.routeid],
    () => getClickedBusInfo(busStop.stopId, list.routeid),
    { enabled: !!busStop.stopId && !!list.routeid }
  );

  // const { isSuccess, isError } = useMutation(
  //   addFavoriteList(selectedBus.routeid),
  //   { enabled: !selectedBus === [] }
  // );

  const selectBus = (x) => {
    setSelectedBus(x);
    console.log(selectedBus);
  };

  const editSecondsToMinutes = (time = []) => {
    const result = time / 60;
    return result;
  };

  const result = editSecondsToMinutes(busArrivalInfo.arrtime);

  return (
    <Wrapper>
      <BusInfoBox>
        <LeftBox>
          {list.routetp === "간선버스" ? (
            <>
              <BusBadge style={{ backgroundColor: "#59BE0A" }}>
                <span>간선</span>
              </BusBadge>
              <BusList style={{ color: "#59BE0A" }}>{list.routeno}</BusList>
            </>
          ) : (
            <>
              <BusBadge style={{ backgroundColor: "#1E7ADB" }}>
                <span>급행</span>
              </BusBadge>
              <BusList style={{ color: "#1E7ADB" }}>{list.routeno}</BusList>
            </>
          )}
        </LeftBox>
        {typeof busStop === "string" ? (
          <CheckBox data={list} selectBus={selectBus} />
        ) : (
          <Timer mm={result} ss={0} />
        )}
      </BusInfoBox>
    </Wrapper>
  );
};

const BusInfoBox = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e2e7;
  width: 100%;
`;
const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;
const BusBadge = styled.div`
  text-align: center;
  font-weight: 300;
  width: 2.8rem;
  height: 1.2rem;
  font-size: 0.8rem;
  border-radius: 0.2rem;
  color: #ffffff;
`;
const BusList = styled.li`
  font-size: 1.2rem;
  margin: 0 1rem;
`;
const Wrapper = styled.div``;

export default BusInfo;
