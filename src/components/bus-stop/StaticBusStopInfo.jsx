import styled from "styled-components";
import { useQuery } from "react-query";
import { IoMdMap } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getBusStopInfo } from "@api/mapApi";
import { useState, useEffect } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import MainResponsive from "@components/main/MainResponsive";
import StaticBusInfo from "./StaticBusInfo";
import { useRecoilState } from "recoil";
import { clickedBusStop } from "@recoil/home";

const StaticBusStopInfo = () => {
  const navigate = useNavigate();
  const [busListData, setBusListData] = useState([]);
  const [clickedBusStation, setClickedBusStation] =
    useRecoilState(clickedBusStop);

  const editBusObj = (busListArray) => {
    const busList = [];
    for (let {
      routeid: id,
      routeno: no,
      startnodenm: start,
      endnodenm: end,
      routetp: ty,
    } of busListArray) {
      let busObj = {
        id,
        no: no.toString(),
        start,
        end,
        ty,
      };
      busList.push(busObj);
    }
    setBusListData(busList);
  };

  // 주변 정류소 클릭시
  const { data: busStopData, isSuccess } = useQuery(
    ["route", clickedBusStation.stopId],
    () => getBusStopInfo(clickedBusStation.stopId),
    {
      enabled: !!clickedBusStation,
    }
  );

  useEffect(() => {
    if (busStopData) {
      const busObjList = busStopData?.map((e) => e);
      editBusObj(busObjList);
    }
  }, []);

  return (
    <>
      <Header>
        <MdOutlineArrowBackIosNew onClick={() => navigate(-1)} />
        <FiStar />
      </Header>
      <BusStopInfoBox>
        <BusStopInfoTextBox>
          <BusStopInfoText>
            <p>{clickedBusStation.name}</p>
          </BusStopInfoText>
          <MapBtn onClick={() => navigate(-1)}>
            <IoMdMap />
          </MapBtn>
        </BusStopInfoTextBox>
        <Wrapper>
          {busListData !== [] && busListData.length === 0 ? (
            <StaticBusInfo
              busStop={busListData}
              clickedBusStation={clickedBusStation}
            />
          ) : (
            <>
              {busListData !== [] &&
                busListData.length > 0 &&
                busListData?.map((busStop) => (
                  <div key={`${busStop.id}`}>
                    <StaticBusInfo
                      busStop={busStop}
                      clickedBusStation={clickedBusStation}
                    />
                  </div>
                ))}
            </>
          )}
        </Wrapper>
      </BusStopInfoBox>
    </>
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

const Header = styled(MainResponsive)`
  padding: 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    font-size: 1.3rem;
  }
`;

export default StaticBusStopInfo;
