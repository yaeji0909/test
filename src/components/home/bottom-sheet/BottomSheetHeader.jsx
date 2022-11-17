import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import React from "react";
import media from "../../../lib/styles/media";
const BottomSheetHeader = ({ onClick }) => (
  <Wrapper>
    <div
      onClick={onClick}
      flex='0 0 auto'
      display='flex'
      alignitems='center'
      marginright={2}
      padding={2}
    >
      <GiHamburgerMenu style={{ color: "transparent" }} />
    </div>
    <Title>즐겨찾기</Title>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: "#ffffff";
  height: 9vh;
  ${media.xlarge} {
    height: 10vh;
  }
`;
const Title = styled.div`
  color: #3f4150;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

export default BottomSheetHeader;
