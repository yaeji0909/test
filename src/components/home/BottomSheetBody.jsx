import React, { useLayoutEffect, useRef } from "react";
import useStayScrolled from "react-stay-scrolled";
import styled from "styled-components";
import { BottomSheetBodyBox, Wrapper } from "./bottomSheetStyles";
import { MdOutlineRefresh } from "react-icons/md";
import exampleImg from "@static/images/favorites-example.png";
import FavoriteList from "./FavoriteList";
// const initialMessages = [message, message];
import {
  getFavoriteList,
  addFavoriteList,
  deleteFavoriteList,
} from "@api/favoriteApi";
import { useQuery } from "react-query";
import { useEffect } from "react";

const BottomSheetBody = () => {
  const feedRef = useRef(null);
  const { stayScrolled, scrollBottom } = useStayScrolled(feedRef);

  useLayoutEffect(() => {
    scrollBottom();
  }, [scrollBottom]);

  //   useLayoutEffect(() => {
  //     stayScrolled();
  //   }, [length, stayScrolled]);

  const { data: favoriteList = [], isSuccess } = useQuery(
    ["favoriteList", 1],
    () => getFavoriteList()
  );
  if (isSuccess) {
    console.log(favoriteList);
  }

  return (
    <Wrapper>
      <BottomSheetBodyBox ref={feedRef}>
        {favoriteList ? (
          <FavoriteList favoriteList={favoriteList} />
        ) : (
          <ExampleImgBox>
            <img src={exampleImg} alt='example-img' />
            <p>
              다음 버스 도착시간까지 알고 싶다면
              <br />
              즐겨찾기를 추가해보세요
            </p>
          </ExampleImgBox>
        )}
        <ButtonBox>
          {/* <HiOutlineArrowUp className='to-top-btn' /> */}
          <MdOutlineRefresh className='refresh-btn' />
        </ButtonBox>
        {/* {feed.map((u, index) => (
          <p key={index}>{u.text}</p>
        ))} */}
      </BottomSheetBodyBox>
    </Wrapper>
  );
};

const ExampleImgBox = styled.div`
  width: 100%;
  padding: 5rem;
  p {
    font-size: 12px;
    color: #8c8d96;
    font-weight: 300;
    text-align: center;
  }
`;

const ButtonBox = styled.div`
  right: 5%;
  bottom: 12%;
  position: absolute;
  svg {
    border-radius: 50%;
    font-size: 3rem;
    padding: 0.8rem;
    display: flex;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
  }
  .to-top-btn {
    background-color: #ffffff;
    color: #8c8d96;
    border: 1px solid #8c8d96;
  }
  .refresh-btn {
    margin-top: 0.5rem;
    background-color: #8c8d96;
    color: #ffffff;
  }
`;

export default BottomSheetBody;
