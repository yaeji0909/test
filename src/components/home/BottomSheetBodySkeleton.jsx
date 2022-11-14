import { useLayoutEffect, useRef } from "react";
import useStayScrolled from "react-stay-scrolled";
import styled, { css } from "styled-components";
import { BottomSheetBodyBox, Wrapper } from "./bottomSheetStyles";
import FavoriteList from "@components/favorites/FavoriteList";
import { useRecoilState } from "recoil";
import { favBusStopList } from "@recoil/favorite";

const BottomSheetBodySkeleton = () => {
  const [favoriteBusStopList, setFavoriteBusStopList] =
    useRecoilState(favBusStopList);
  const bottomBody = useRef(null);
  const skeleton = true;
  return (
    <Wrapper>
      <BottomSheetBodyBox ref={bottomBody}>
        {favoriteBusStopList
          ? favoriteBusStopList.map((list, index) => (
              <FavoriteListBox key={index}>
                <ListTitle>
                  <p>{list.name}</p>
                </ListTitle>
                <BusListBox name={list.name} onlyList></BusListBox>
              </FavoriteListBox>
            ))
          : ""}
      </BottomSheetBodyBox>
    </Wrapper>
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

export default BottomSheetBodySkeleton;
