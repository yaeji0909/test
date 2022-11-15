import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import React from "react";

const BottomSheetHeader = ({ customAction, onClick }) => (
  <div
    onClick={onClick}
    padding={2}
    display='flex'
    flex='0 0 auto'
    alignitems='center'
    style={{ backgroundColor: "white", height: "8vh" }}
  >
    <div flex='0 0 auto' display='flex' alignitems='center' marginright={2}>
      <GiHamburgerMenu style={{ color: "transparent" }} />
    </div>
    <Title>즐겨찾기</Title>
  </div>
);
const Title = styled.div`
  color: #3f4150;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

export default BottomSheetHeader;