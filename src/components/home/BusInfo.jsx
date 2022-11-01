import styled from "styled-components";
import { getClickedBusInfo } from "@api/mapApi";
import { useQuery } from "react-query";
import { useEffect } from "react";
import Timer from "./utils/Timer";

const BusInfo = ({ busStop, clickedBusStop }) => {
  const { data: busArrivalInfo = [] } = useQuery(
    ["busArrivalInfo", busStop.routeid],
    () => getClickedBusInfo(clickedBusStop.stopId, busStop.routeid),
    {
      enabled: !!busStop.routeid,
    }
  );
  // const { data: busRouteData = [] } = useQuery(
  //   ["busRouteInfo", 1],
  //   () => getBusRouteInfo(busStop.routeid),
  //   {
  //     enabled: !!busStop.routeid,
  //   }
  // );

  const editSecondsToMinutes = (time = []) => {
    const result = time / 60;
    return result;
  };

  const result = editSecondsToMinutes(busArrivalInfo.arrtime);

  useEffect(() => {}, [busStop]);
  console.log(busStop, "busStop");

  return (
    <Wrapper>
      {console.log(busStop, "busStop")}
      {busStop.routetp === "간선버스" ? (
        <>
          <BusInfoBox>
            <BusBadge style={{ backgroundColor: "#59BE0A" }}>
              <span>간선</span>
            </BusBadge>
            <BusList style={{ color: "#59BE0A" }}>{busStop.routeno}</BusList>
            <BusArrivalInfo>
              {result ? <Timer mm={result} ss={0} /> : <div>도착정보 없음</div>}
            </BusArrivalInfo>
          </BusInfoBox>
        </>
      ) : (
        <>
          <BusInfoBox>
            <BusBadge style={{ backgroundColor: "#1E7ADB" }}>
              <span>급행</span>
            </BusBadge>
            <BusList style={{ color: "#1E7ADB" }}>{busStop.routeno}</BusList>
            <BusArrivalInfo>
              {result ? <Timer mm={result} ss={0} /> : <div>도착정보 없음</div>}
            </BusArrivalInfo>
          </BusInfoBox>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const BusInfoBox = styled.div`
  padding: 1.7rem;
  display: flex;
  border-bottom: 1px solid #e0e2e7;
  overflow-y: scroll;
`;

const BusBadge = styled.div`
  text-align: center;
  font-weight: 300;
  width: 2.8rem;
  height: 1.2rem;
  font-size: 0.8rem;
  margin-top: 0.35rem;
  border-radius: 0.2rem;
  color: #ffffff;
`;
const BusList = styled.li`
  font-size: 1.2rem;
  margin: 0 1rem;
`;

const BusArrivalInfo = styled.div``;
export default BusInfo;
