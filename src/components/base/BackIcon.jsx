import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const BackIcon = ({ props }) => {
  return (
    <>
      <BackIconBox>
        <MdOutlineArrowBackIosNew />
      </BackIconBox>
      <div>{props}</div>
    </>
  );
};
const BackIconBox = styled.div`
  cursor: pointer;
  svg {
    font-size: 1.5rem;
  }
`;

export default BackIcon;
