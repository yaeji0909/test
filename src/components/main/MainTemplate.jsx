import styled from "styled-components";

function MainTemplate({ children }) {
  return (
    <>
      <Block>{children}</Block>
    </>
  );
}

const Block = styled.div``;

export default MainTemplate;
