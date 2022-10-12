import React from "react";
import styled from "styled-components";

function HomeLayout({ main }) {
  return (
    <Block>
      <Main>{main}</Main>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  margin-top: 2rem;
`;
const Main = styled.main`
  flex: 1;
`;

export default HomeLayout;
