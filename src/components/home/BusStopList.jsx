import styled from "styled-components";
// import Sticky from "../common/Sticky";
import { mediaQuery } from "@lib/styles/media";

function BusStopList() {
  return (
    <Block>
      <ContentsBox>
        <Title>즐겨찾기</Title>
        <Contents>A</Contents>
        <Contents>B</Contents>
      </ContentsBox>
    </Block>
  );
}

const Block = styled.div`
  z-index: 3;
  position: absolute;
  bottom: -7%;
  width: 94.5%;
`;

const ContentsBox = styled.div`
  border: 3px solid #ffffff;
  border-radius: 30px;
  background-color: #ffffff;
  height: 66vh;
  padding: 1rem 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
`;

const Contents = styled.div`
  height: 20vh;
  margin: 0.8rem;
  box-shadow: 0px 4px 15px rgba(65, 97, 119, 0.2);
  border-radius: 10px;
`;

const Title = styled.div`
  height: 5vh;
  padding: 0 1rem;
  color: #3f4150;
  font-size: 20px;
  font-weight: 700;
`;

export default BusStopList;
