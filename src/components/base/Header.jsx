import MainResponsive from "../main/MainResponsive";
import BackIcon from "../../components/base/BackIcon";
import styled from "styled-components";
import starIcon from "@static/svg/star-icon.svg";

const Header = ({ title, img }) => {
  return (
    <Block>
      <Inner>
        <BackIcon />
        <img src={starIcon} alt={"starBtn"} />
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
  align-items: center;
  justify-content: space-between;
`;

export default Header;
