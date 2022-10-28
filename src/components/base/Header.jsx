import MainResponsive from "../main/MainResponsive";
import styled from "styled-components";
import starIcon from "@static/svg/star-icon.svg";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Header = ({ title }) => {
  return (
    <Block>
      <Inner>
        <MdOutlineArrowBackIosNew />
        <div className='title'>{title}</div>
        {/* <img src={starIcon} alt={"starBtn"} /> */}
      </Inner>
    </Block>
  );
};

const Block = styled.div`
  height: 4rem;
`;
const Inner = styled(MainResponsive)`
  height: 100%;
  display: flex;
  font-weight: 500;
  align-items: center;
  .title {
    padding-left: 40%;
    font-size: 1.2rem;
  }
  svg {
    font-size: 1.5rem;
  }
`;

export default Header;
