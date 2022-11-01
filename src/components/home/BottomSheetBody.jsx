import React, { useLayoutEffect, useRef } from "react";
import useStayScrolled from "react-stay-scrolled";
import styled from "styled-components";
import { BottomSheetBodyBox, Wrapper } from "./bottomSheetStyles";
import { MdOutlineRefresh } from "react-icons/md";
import exampleImg from "@static/images/favorites-example.png";

// const initialMessages = [message, message];

const BottomSheetBody = () => {
  const feedRef = useRef(null);
  const { stayScrolled, scrollBottom } = useStayScrolled(feedRef);

  useLayoutEffect(() => {
    scrollBottom();
  }, [scrollBottom]);

  //   useLayoutEffect(() => {
  //     stayScrolled();
  //   }, [length, stayScrolled]);
  const contents = [1, 2, 3, 4, 5, 6];
  return (
    <Wrapper>
      <BottomSheetBodyBox ref={feedRef}>
        {contents ? (
          contents.map((content, index) => (
            <Contents key={index}>{content}</Contents>
          ))
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

const Contents = styled.div`
  height: 19vh;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0px 4px 15px rgba(65, 97, 119, 0.2);
  border-radius: 10px;
`;

const ExampleImgBox = styled.div`
  width: 100%;
  padding: 6rem;
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
