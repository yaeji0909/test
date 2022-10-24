import styled from "styled-components";
// import Sticky from "../common/Sticky";
import { mediaQuery } from "@lib/styles/media";

function BusStopList() {
  return (
    <Block>
      <ContentsBox>
        <Title></Title>
        <Contents>A</Contents>
        <Contents>B</Contents>
      </ContentsBox>
    </Block>
  );
}
const Title = styled.div`
  height: 5vh;
  border-bottom: 1px solid #3f4150;
`;
const Contents = styled.div`
  height: 20vh;
  1px solid #F7F8FA;
  box-shadow: 0px 4px 15px rgba(65, 97, 119, 0.2);
  border-radius: 10px;
`;

const ContentsBox = styled.div`
background-color="#fffff";
width:100vw;
height:60vh;
box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
`;

const Block = styled.div`
  z-index: 3;
  height: 30vh;
  width: 16rem;
  ${mediaQuery(1440)} {
    width: 12rem;
  }
`;

export default BusStopList;
