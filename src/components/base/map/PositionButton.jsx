import { MdOutlineMyLocation } from "react-icons/md";
import styled, { css } from "styled-components";

const PositionButton = ({ onToggle }) => {
  return (
    <Button>
      <MdOutlineMyLocation />
    </Button>
  );
};

const Button = styled.button`
  border-radius: 50%;
  background-color: #ffffff;
  color: #006ffd;
  z-index: 1;
  position: absolute;
  bottom: 12%;
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
  ${(props) =>
    props.onToggle &&
    css`
      color: #ffffff;
      background-color: #006ffd;
    `}
`;
export default PositionButton;
