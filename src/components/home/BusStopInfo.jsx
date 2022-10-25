import styled from "styled-components";
import { getStopInfo } from "@api/mapApi";
import { useRecoilState } from "recoil";
import { selectedStation } from "@recoil/home";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { IoMdMap } from "react-icons/io";
import BusInfo from "@components/home/BusInfo";
import { useNavigate } from "react-router-dom";

function BusStopInfo() {
  const [clickedBusStop, setClickedStation] = useRecoilState(selectedStation);

  const { data: busStopData = [], isSuccess } = useQuery(
    "route",
    () => getStopInfo(clickedBusStop.stopId),
    {
      enabled: !!clickedBusStop,
    }
  );
  if (isSuccess) {
    console.log(busStopData);
  }

  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <BusStopInfoBox>
      <BusStopInfoTextBox>
        <BusStopInfoText>
          <p>{clickedBusStop ? clickedBusStop.name : ""}</p>
          <p>{clickedBusStop ? clickedBusStop.startnodenm : ""}</p>
          <p>{clickedBusStop ? clickedBusStop.endnodenm : ""}</p>
        </BusStopInfoText>
        <MapBtn onClick={() => navigate(-1)}>
          <IoMdMap />
        </MapBtn>
      </BusStopInfoTextBox>
      {busStopData.map((busStop) => (
        <BusListBox key={`${busStop.routeid}`}>
          <BusInfo busStop={busStop} />
        </BusListBox>
      ))}
    </BusStopInfoBox>
  );
}

const BusStopInfoBox = styled.div`
  width: 100%;
`;

const BusStopInfoTextBox = styled.div`
  display: flex;
  justify-contents: center;
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

const BusListBox = styled.div``;

export default BusStopInfo;
