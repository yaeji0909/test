import styled from "styled-components";
import { getStopInfo, getBusArrivalInfo } from "@api/mapApi";
import { useRecoilState } from "recoil";
import { selectedStation } from "@recoil/home";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMap } from "react-icons/io";
import BusInfo from "@components/home/BusInfo";

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

  const { data: arrivalData } = useQuery(
    "busArrival",
    () => getBusArrivalInfo(clickedBusStop.stopId),
    {
      enabled: !!clickedBusStop,
    }
  );

  useEffect(() => {}, []);
  return (
    <BusStopInfoBox>
      <BusStopInfoTextBox>
        <BusStopInfoText>
          <p>{clickedBusStop ? clickedBusStop.name : ""}</p>
        </BusStopInfoText>
        <Link to='/'>
          <MapBtn>
            <IoMdMap />
          </MapBtn>
        </Link>
      </BusStopInfoTextBox>

      {busStopData.map((busStop) => (
        <BusListBox key={`${busStop.routeid}`}>
          {busStop.routetp === "간선버스" ? (
            <BusInfo color={"#59BE0A"} busStop={busStop} />
          ) : (
            <BusInfo color={"#1E7ADB"} busStop={busStop} />
          )}
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
`;
const BusStopInfoText = styled.div`
  font-size: 24px;
`;

const MapBtn = styled.div`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #e0e2e7;
  position: relative;
  svg {
    position: absolute;
    left: 20%;
    top: 20%;
  }
`;

const BusListBox = styled.div``;

export default BusStopInfo;
