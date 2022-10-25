import styled from "styled-components";

function BottomTab({ props }) {
  return (
    // <Sticky top={118}>
    <Block>BottomTab</Block>
    // </Sticky>
  );
}

const Block = styled.div`
  width: 95%;
  height: 7vh;
  background-color: #ffffff;
  z-index: 5;
  position: absolute;
  bottom: 0%;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
`;

export default BottomTab;
