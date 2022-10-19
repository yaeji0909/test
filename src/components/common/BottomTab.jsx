import styled from "styled-components";
// import Sticky from "../common/Sticky";
import { mediaQuery } from "@lib/styles/media";

function BottomTab({ props }) {
  return (
    // <Sticky top={118}>
    <Block>rdimtvoerhdu</Block>
    // </Sticky>
  );
}

const Block = styled.div`
  width: 16rem;
  height: 50vh;
  background-color: #ffffff;
  z-index: 5;
  ${mediaQuery(1440)} {
    width: 12rem;
  }
`;

export default BottomTab;
