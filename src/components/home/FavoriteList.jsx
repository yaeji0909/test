import busBadge from "@static/svg/bus-badge.svg";
import styled from "styled-components";
import Bus from "./Bus";
import busStopIcon from "@static/svg/bus-stop-icon.svg";
import BusInfo from "./BusInfo";
import { useState } from "react";
import BusStopInfo from "./BusStopInfo";
import { useNavigate } from "react-router-dom";

const FavoriteList = ({ favoriteList }) => {
  const navigate = useNavigate();

  const clickToggle = (e) => {
    // const filteredList = favoriteList.filter(
    //   (city) => city.name === e.currentTarget.name
    // );
    navigate("/bus-stop", {
      state: {
        list: favoriteList,
      },
    });
  };
  return (
    <>
      {favoriteList.map((list, index) => (
        <Wrapper key={index}>
          <ListTitleBox>
            <img src={busBadge} alt='' />
            <p>{list.name}</p>
          </ListTitleBox>
          <AddBusButton onClick={clickToggle} name={list.name}>
            +버스
          </AddBusButton>
          <ListSubTitle></ListSubTitle>
          <BusListBox>
            <img src={busStopIcon} alt='' className='bus-stop' />
            {list.bus.map((bus, index) => (
              <div key={index}>
                <Bus bus={bus} />
                {/* <BusInfo stationId={list.station} busId={bus.id} /> */}
              </div>
            ))}
          </BusListBox>
          <Rectangle></Rectangle>
        </Wrapper>
      ))}
    </>
  );
};
const Wrapper = styled.div`
  height: 20vh;
  margin: 0.4rem;
  box-shadow: 0px 4px 15px rgba(65, 97, 119, 0.2);
  border-radius: 10px;
  position: relative;
  padding: 1.2rem 0;
`;

const ListTitleBox = styled.div`
  height: 3vh;
  margin: 0.2rem 0.5rem;
  display: flex;
  font-weight: 500;
  font-size: 18px;
`;
const AddBusButton = styled.button`
  position: absolute;
  right: 5%;
  top: 8%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid #e0e2e7;
  border-radius: 3px;
  color: #b2b3b9;
  padding: 0.4rem;
  z-index: 3;
`;
const ListSubTitle = styled.div``;

const BusListBox = styled.div`
  display: flex;
  algin-items: center;
  position: relative;
  padding: 0 0.5rem;
  .bus-stop {
    left: 0%;
    bottom: 0%;
    position: absolute;
  }
`;

const Rectangle = styled.div`
  background-color: #e0e0e0;
  width: 100%;
  height: 0.4vh;
  position: absolute;
`;
export default FavoriteList;
