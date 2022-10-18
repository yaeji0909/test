import styled from "styled-components";
import Sticky from "../common/Sticky";
import { mediaQuery } from "@lib/styles/media";

function HomeSidebar({ props }) {
  return (
    <Sticky top={118}>
      <Block></Block>
    </Sticky>
  );
}

const Block = styled.div`
  width: 16rem;
  ${mediaQuery(1440)} {
    width: 12rem;
  }
`;

export default HomeSidebar;
