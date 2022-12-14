import styled from "styled-components";
import { useQuery } from "react-query";
import { IoMdMap } from "react-icons/io";
import BusInfo from "@components/bus-stop/BusInfo";
import { useNavigate } from "react-router-dom";
import { getBusStopInfo } from "@api/mapApi";
import CheckBox from "@components/common/CheckBox";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { addFavoriteList, deleteFavoriteList } from "@api/favoriteApi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { filteredBusStop } from "@recoil/favorites";
import MainResponsive from "@components/main/MainResponsive";

const BusStopInfo = ({ list = [], type = [] }) => {
  const navigate = useNavigate();
  const [selectedBusList, setSelectedBusList] = useState([]);
  const [busListData, setBusListData] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [filteredBusStation, setFilteredBusStation] =
    useRecoilState(filteredBusStop);

  // 즐겨찾기에서 접근시 실행되는 쿼리
  const { data: busListInFavorite = [] } = useQuery(
    ["route", list.station || filteredBusStation.station],
    () => getBusStopInfo(list.station || filteredBusStation.station),
    {
      enabled: !!list,
    }
  );

  // put / delete mutation query
  const putMutation = useMutation(() => {
    addFavoriteList(
      list.city || filteredBusStation.city,
      list.station || filteredBusStation.station,
      selectedBusList
    );
  });

  const deleteMutation = useMutation(() => {
    deleteFavoriteList();
  });

  useEffect(() => {
    if (busListInFavorite !== []) {
      const busListInFav = busListInFavorite?.map((el) => el);
      editBusObj(busListInFav);
    }
  }, [busListInFavorite]);

  const checkedItemHandler = (target, isChecked) => {
    if (isChecked) {
      checkedItems.add(target);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(target)) {
      checkedItems.delete(target);
      setCheckedItems(checkedItems);
    }
  };

  const addBusInFavList = () => {
    let busList = [];
    checkedItems.forEach((el) => busList.push(el.id));
    setSelectedBusList(busList);
    if (selectedBusList !== []) {
      setTimeout(() => {
        putMutation.mutate(
          list.city || filteredBusStation.city,
          list.station || filteredBusStation.station,
          selectedBusList
        );
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

  return (
    <>
      <Header>
        <MdOutlineArrowBackIosNew onClick={() => navigate(-1)} />
        <FiStar />
      </Header>
      <BusStopInfoBox>
        <BusStopInfoTextBox>
          <BusStopInfoText>
            <p>{list.name || filteredBusStation.name}</p>
          </BusStopInfoText>
          <MapBtn onClick={() => navigate(-1)}>
            <IoMdMap />
          </MapBtn>
        </BusStopInfoTextBox>
        <Wrapper>
          <>
            {busListData &&
              busListData?.map((bus, index) => (
                <FavListBox key={index}>
                  <BusInfo
                    busStop={list.station || filteredBusStation.station}
                    list={bus}
                    type={type === "FAVORITE_LIST" ? type : ""}
                  />
                  <CheckBoxContents>
                    <CheckBox
                      type={type === "FAVORITE_LIST" ? type : ""}
                      bus={bus}
                      checkedItemHandler={checkedItemHandler}
                      alreadySelectedBusList={
                        list.bus || filteredBusStation.bus
                      }
                      addBusInFavList={addBusInFavList}
                    />
                  </CheckBoxContents>
                </FavListBox>
              ))}
          </>
        </Wrapper>
      </BusStopInfoBox>
    </>
  );
};

const BusStopInfoBox = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
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
const CheckBoxContents = styled.div``;
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
