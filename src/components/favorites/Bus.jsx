import busIcon from "@static/svg/bus-icon.svg";
import bgImg from "@static/images/background-img.png";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getBusStopInfo, getClickedBusInfo } from "@api/mapApi";
import Timer from "../home/utils/Timer";
const Bus = ({ list = [], bus = [] }) => {
  const { data: busStopData = [] } = useQuery(["route", list.station], () =>
    getBusStopInfo(list.station)
  );

  // 즐겨찾기 추가되있는 버스 도착 정보 조회
  const { data: busArrivalInfo = [] } = useQuery(
    ["busArrivalInfo", bus.id],
    () => getClickedBusInfo(list.station, bus.id),
    { enabled: !!bus && !!list }
  );

  const editSecondsToMinutes = (time = []) => {
    const result = time / 60;
    return result;
  };

  const result = editSecondsToMinutes(busArrivalInfo.arrtime);

  return (
    <Wrapper>
      <ArrivalInfoBox>
        <BusArrivalInfo>
          {bus.ty === "간선버스" ? (
            <span className='bus-num' style={{ color: "#59BE0A" }}>
              {bus.no}
            </span>
          ) : (
            <span className='bus-num' style={{ color: "#1E7ADB" }}>
              {bus.no}
            </span>
          )}
          {result ? (
            <span>
              <Timer mm={result} ss={0} />
            </span>
          ) : (
            <span>도착정보 없음</span>
          )}
        </BusArrivalInfo>
      </ArrivalInfoBox>
      <ImgBox>
        <img src={busIcon} alt='bus-icon' />
      </ImgBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
`;

const ArrivalInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
`;

const BusArrivalInfo = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  height: 7vh;
  background: url(${bgImg}) no-repeat;
  .bus-num {
    font-size: 1rem;
  }
  span {
    padding-top: 3px;
    text-align: center;
    font-size: 0.7rem;
    color: #8c8d96;
    letter-spacing: 1px;
  }
`;
const ImgBox = styled.div``;

export default Bus;
