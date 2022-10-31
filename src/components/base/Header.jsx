import MainResponsive from "../main/MainResponsive";
import styled from "styled-components";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <Block>
      <MdOutlineArrowBackIosNew
        className='arrow-btn'
        onClick={() => navigate(0)}
      />
      <Inner>{title}</Inner>
    </Block>
  );
};

const Block = styled.div`
  width: 100%;
  height: 4rem;
  position: relative;
  border-bottom: 1px solid #b2b3b9;
  .arrow-btn {
    font-size: 1.4rem;
    position: absolute;
    left: 2%;
    top: 35%;
    color: #8c8d96;
  }
`;
const Inner = styled(MainResponsive)`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  width: 100%;
  font-size: 1.2rem;
`;

export default Header;
