import styled from "styled-components";
import { useQuery } from "react-query";
import { IoMdMap } from "react-icons/io";
import BusInfo from "@components/home/BusInfo";
import { useNavigate, useLocation } from "react-router-dom";
import { getStopInfo } from "@api/mapApi";
import { useState } from "react";

const BusStopInfo = ({ loc }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedList, setSelectedList] = useState([]);

  // 지도에서 해당 페이지 이동시 실행되는 쿼리
  const { data: busStopData = [] } = useQuery(
    ["route", location.state.value],
    () => getStopInfo(location.state.value.stopId),
    {
      enabled: !!location.state.value,
    }
  );

  // 즐겨찾기에서 해당 페이지 이동시 실행되는 쿼리
  const { data: busStopDataSecond = [] } = useQuery(
    ["route", location.state.list],
    () => getStopInfo(location.state.list[0].station),
    {
      enabled: !!location.state.list,
    }
  );

  let busStops = Array.from(busStopData);

  return (
    <BusStopInfoBox>
      <BusStopInfoTextBox>
        <BusStopInfoText>
          {loc ? (
            <p>{loc.name}</p>
          ) : (
            <p>{location.state.value ? location.state.value.name : ""}</p>
          )}
        </BusStopInfoText>
        <MapBtn onClick={() => navigate(-1)}>
          <IoMdMap />
        </MapBtn>
      </BusStopInfoTextBox>
      <Wrapper>
        {loc ? (
          <>
            {busStopDataSecond.map((bus, index) => (
              <BusInfo clickedBusStop={loc.station} key={index} busStop={bus} />
            ))}
          </>
        ) : (
          <>
            {/* response가 1개일 경우 객체로 오고, 여러개일 경우 배열형태로 와서 하단과 같이 처리함 */}
            {busStops.length === 0 && (
              <BusInfo
                setSelectedList={setSelectedList}
                busStop={busStopData}
                clickedBusStop={location.state.value}
              />
            )}
            {busStops.length > 0 &&
              busStops.map((busStop) => (
                <div key={`${busStop.routeid}`}>
                  <BusInfo
                    busStop={busStop}
                    clickedBusStop={location.state.value}
                  />
                </div>
              ))}
          </>
        )}
      </Wrapper>
    </BusStopInfoBox>
  );
};

const BusStopInfoBox = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  height: 80vh;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
    height: 15%;
  }
`;

const BusStopInfoTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 4px -3px rgba(0, 0, 0, 0.15);
  padding: 2rem 0;
`;
const BusStopInfoText = styled.div`
  font-size: 24px;
`;

const MapBtn = styled.div`
  margin-top: 1rem;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #e0e2e7;
  position: relative;
  svg {
    font-size: 0.8rem;
    position: absolute;
    left: 22%;
    top: 20%;
  }
`;

export default BusStopInfo;
