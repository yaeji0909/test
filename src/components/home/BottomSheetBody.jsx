import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useStayScrolled from "react-stay-scrolled";
// import useInterval from "@components/home/hooks/useInterval";
import styled from "styled-components";
import { BottomSheetBodyBox, Wrapper } from "./bottomSheetStyles";

// const initialMessages = [message, message];

const BottomSheetBody = () => {
  const chatFeedRef = useRef(null);
  const { stayScrolled, scrollBottom } = useStayScrolled(chatFeedRef);
  //   const [feed, setFeed] = useState(initialMessages);
  //   const length = feed?.length;

  //   useInterval(() => {
  //     setFeed((prevMessages) => prevMessages.concat([message]));
  //   }, 500);

  useLayoutEffect(() => {
    scrollBottom();
  }, [scrollBottom]);

  //   useLayoutEffect(() => {
  //     stayScrolled();
  //   }, [length, stayScrolled]);

  return (
    <Wrapper>
      <BottomSheetBodyBox ref={chatFeedRef}>
        <Contents>A</Contents>
        <Contents>B</Contents>
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

export default BottomSheetBody;
