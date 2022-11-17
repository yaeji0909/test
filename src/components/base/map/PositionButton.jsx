import { MdOutlineMyLocation } from "react-icons/md";
import styled from "styled-components";
const PositionButton = ({ toggleHandler, toggle }) => {
  const clickHandler = (e) => {
    toggleHandler(e);
  };

  return (
    <Wrapper>
      <Button onClick={clickHandler} className={toggle ? "true" : null}>
        <MdOutlineMyLocation />
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div``;
const Button = styled.button`
  border-radius: 50%;
  background-color: #ffffff;
  color: #006ffd;
  z-index: 2;
  position: absolute;
  bottom: 15%;
  display: flex;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  right: 5%;
  width: 3rem;
  height: 3rem;
  svg {
    font-size: 1.6rem;
  }
  &.true {
    color: #ffffff;
    background-color: #006ffd;
  }
`;
export default PositionButton;
