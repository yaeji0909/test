import busBadge from "@static/svg/bus-badge.svg";
import styled, { css } from "styled-components";
import Bus from "./Bus";
import busStopIcon from "@static/svg/bus-stop-icon.svg";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Button from "../common/Button";
import zIndexes from "@lib/styles/zIndexes";

const FavoriteList = ({ favoriteList }) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    const filteredList = favoriteList.filter(
      (city) => city.name === e.currentTarget.getAttribute("name")
    );
    navigate("/bus-edit", {
      state: {
        list: filteredList,
      },
    });
    console.log("filteredList", filteredList);
  };

  const moveToBusInfoPage = (e) => {
    const filteredList = favoriteList.filter(
      (city) => city.name === e.currentTarget.getAttribute("name")
    );
    navigate("/bus-edit", {
      state: {
        list: filteredList,
        type: "FAVORITE_LIST",
      },
    });
  };

  return (
    <>
      {favoriteList?.map((list, index) => (
        <Fragment key={index}>
          {list.bus ? (
            <FavoriteListBox>
              <ListTitle>
                <img src={busBadge} alt='bus-badge' />
                <p>{list.name}</p>
              </ListTitle>
              <>
                <>
                  <AddBusButton onClick={clickHandler} name={list.name}>
                    + 버스
                  </AddBusButton>
                  <ListSubTitle></ListSubTitle>
                  <BusListBox
                    name={list.name}
                    onClick={moveToBusInfoPage}
                    onlyList
                  >
                    <img src={busStopIcon} alt='' className='bus-stop' />
                    {list.bus?.map((el, index) => (
                      <Bus list={list} bus={el} key={index} />
                    ))}
                  </BusListBox>
                  <Rectangle></Rectangle>
                </>
              </>
            </FavoriteListBox>
          ) : (
            <FavoriteListBox onlyBusStop>
              <ListTitle onlyBusStop>
                <img src={busBadge} alt='bus-badge' />
                <p>{list.name}</p>
              </ListTitle>
              <AddBusButton onClick={clickHandler} name={list.name} blue>
                + 버스
              </AddBusButton>
            </FavoriteListBox>
          )}
        </Fragment>
      ))}
    </>
  );
};
const FavoriteListBox = styled.div`
  height: 20vh;
  margin: 0.4rem;
  box-shadow: 0px 4px 15px rgba(65, 97, 119, 0.2);
  border-radius: 10px;
  position: relative;
  padding: 1.2rem 0;
  ${(props) =>
    props.onlyBusStop &&
    css`
      height: 10vh;
    `}
`;

const ListTitle = styled.div`
  height: 3vh;
  margin: 0.2rem 0.5rem;
  display: flex;
  font-weight: 600;
  font-size: 18px;
  p {
    padding-left: 5px;
  }
  ${(props) =>
    props.onlyBusStop &&
    css`
      margin: 0.5rem;
    `}
`;
const AddBusButton = styled(Button)`
  position: absolute;
  right: 5%;
  top: 8%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border: 1px solid #e0e2e7;
  border-radius: 3px;
  color: #b2b3b9;
  padding: 0.5rem;
  z-index: ${zIndexes.BottomTab};
  font-weight: 300;
  font-size: 14px;
  ${(props) =>
    props.blue &&
    css`
      top: 30%;
      border: none;
      color: #ffffff;
      background: #006ffd;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
    `}
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
