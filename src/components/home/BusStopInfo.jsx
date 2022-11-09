import styled from "styled-components";
import { useQuery } from "react-query";
import { IoMdMap } from "react-icons/io";
import BusInfo from "@components/home/BusInfo";
import { useNavigate, useLocation } from "react-router-dom";
import { getStopInfo } from "@api/mapApi";
import CheckBox from "../common/CheckBox";
import { useState } from "react";

const BusStopInfo = ({ list, type = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [checkedItems, setCheckedItems] = useState(new Set());

  // 주변정류장-마커클릭시 실행되는 쿼리
  const { data: busStopData = [] } = useQuery(
    ["route", location.state.selectedBusStop],
    () => getStopInfo(location.state.selectedBusStop.stopId),
    {
      enabled: !!location.state.selectedBusStop,
    }
  );

  // 즐겨찾기에서 접근시 실행되는 쿼리
  const { data: busListInFavorite = [] } = useQuery(
    ["route", list],
    () => getStopInfo(list.station),
    {
      enabled: !!list,
    }
  );

  const busList = Array.from(busStopData);
  const clickedBusStop = location.state.selectedBusStop;

  const checkedItemHandler = (target, isChecked) => {
    if (isChecked) {
      checkedItems.add(target);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(target)) {
      checkedItems.delete(target);
      setCheckedItems(checkedItems);
    }
    console.log(checkedItems);
  };

  return (
    <BusStopInfoBox>
      <BusStopInfoTextBox>
        <BusStopInfoText>
          {clickedBusStop ? (
            <p>{clickedBusStop ? clickedBusStop.name : ""}</p>
          ) : (
            <p>{list.name}</p>
          )}
        </BusStopInfoText>
        <MapBtn onClick={() => navigate(-1)}>
          <IoMdMap />
        </MapBtn>
      </BusStopInfoTextBox>
      <Wrapper>
        {clickedBusStop ? (
          <>
            {/* response가 1개일 경우 객체로 오고, 여러개일 경우 배열형태로 와서 하단과 같이 처리함 */}
            {busList.length === 0 && (
              <BusInfo list={busStopData} busStop={clickedBusStop} />
            )}
            {busList.length > 0 &&
              busList.map((list) => (
                <div key={`${list.routeid}`}>
                  <BusInfo list={list} busStop={clickedBusStop} />
                </div>
              ))}
          </>
        ) : (
          <>
            {busListInFavorite.map((bus, index) => (
              <FavListBox key={index}>
                {type === "BusInfo" ? (
                  <BusInfo busStop={list.station} list={bus} type={type} />
                ) : (
                  <>
                    <BusInfo busStop={list.station} list={bus} />
                    <CheckBoxContents>
                      <CheckBox
                        bus={bus}
                        checkedItemHandler={checkedItemHandler}
                        busListInFavList={list.bus}
                      />
                    </CheckBoxContents>
                  </>
                )}
              </FavListBox>
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
const CheckBoxContents = styled.div`
  position: absolute;
  right: 5%;
  top: 35%;
`;
const FavListBox = styled.div`
  position: relative;
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
