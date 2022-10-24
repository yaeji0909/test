import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const BackIcon = ({ title }) => {
  return (
    <>
      <BackIconBox>
        <MdOutlineArrowBackIosNew className=' ' />
      </BackIconBox>
      <div>{title}</div>
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
