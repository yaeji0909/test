import styled from "styled-components";
import { useQuery } from "react-query";
import { IoMdMap } from "react-icons/io";
import BusInfo from "@components/home/bus-stop/BusInfo";
import { useNavigate, useLocation } from "react-router-dom";
import { getBusStopInfo } from "@api/mapApi";
import CheckBox from "@components/common/CheckBox";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { addFavoriteList, deleteFavoriteList } from "@api/favoriteApi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import MainResponsive from "@components/main/MainResponsive";

const BusStopInfo = ({ list = [], type = [] }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [busListData, setBusListData] = useState([]);
  const [selectedBusList, setSelectedBusList] = useState([]);

  // 주변정류장-마커클릭시 실행되는 쿼리
  const { data: busStopData = [] } = useQuery(
    ["route", location.state.selectedBusStop?.stopId],
    () => getBusStopInfo(location.state.selectedBusStop.stopId),
    {
      enabled: !!location.state.selectedBusStop,
    }
  );
  // 즐겨찾기에서 접근시 실행되는 쿼리
  const { data: busListInFavorite = [] } = useQuery(
    ["route", list.station],
    () => getBusStopInfo(list.station),
    {
      enabled: !!list,
    }
  );
  const clickedBusStop = location.state.selectedBusStop;

  // put / delete mutation query
  const putMutation = useMutation(() => {
    addFavoriteList(list.city, list.station, selectedBusList);
  });

  const deleteMutation = useMutation(() => {
    deleteFavoriteList();
  });

  const checkedItemHandler = (target, isChecked) => {
    if (isChecked) {
      checkedItems.add(target);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(target)) {
      checkedItems.delete(target);
      setCheckedItems(checkedItems);
    }

    let busList = [];
    checkedItems.forEach((e) => busList.push(e.id));
    setSelectedBusList(busList);
    if (selectedBusList !== []) {
      setTimeout(() => {
        putMutation.mutate(list.city, list.station, selectedBusList);
      }, 5000);
    }
  };

  const editBusObj = (busObjInListArray) => {
    const busList = [];
    for (let {
      routeid: id,
      routeno: no,
      startnodenm: start,
      endnodenm: end,
      routetp: ty,
    } of busObjInListArray) {
      let busObj = {
        id,
        no: no.toString(),
        start,
        end,
        ty,
      };
      busList.push(busObj);
      setBusListData(busList);
    }
  };

  useEffect(() => {
    const busListInFavData = busListInFavorite.map((e) => e);
    const busObjList = busStopData.map((e) => e);
    editBusObj(busListInFavData);
    editBusObj(busObjList);
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
          {clickedBusStop && busListData ? (
            <>
              {/* response가 1개일 경우 객체로 오고, 여러개일 경우 배열형태로 와서 하단과 같이 처리함 */}
              {busListData.length === 0 && (
                <BusInfo list={busListData} busStop={clickedBusStop} />
              )}
              {busListData.length > 0 &&
                busListData.map((list) => (
                  <div key={`${list.no}`}>
                    <BusInfo list={list} busStop={clickedBusStop} />
                  </div>
                ))}
            </>
          ) : (
            <>
              {busListData &&
                busListData?.map((bus, index) => (
                  <FavListBox key={index}>
                    {type === "BusInfo" ? (
                      <>
                        <BusInfo
                          busStop={list.station}
                          list={bus}
                          type={type}
                        />
                      </>
                    ) : (
                      <>
                        {console.log(list)}

                        <BusInfo busStop={list.station} list={bus} />
                        <CheckBoxContents>
                          <CheckBox
                            bus={bus}
                            checkedItemHandler={checkedItemHandler}
                            alreadySelectedBusList={list.bus}
                          />
                        </CheckBoxContents>
                        {console.log(checkedItems)}
                      </>
                    )}
                  </FavListBox>
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

export default BusStopInfo;
