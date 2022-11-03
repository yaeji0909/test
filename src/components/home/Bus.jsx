import busIcon from "@static/svg/bus-icon.svg";
import bgImg from "@static/images/background-img.png";
import styled from "styled-components";

const Bus = ({ bus }) => {
  return (
    <Wrapper>
      <ArrivalInfoBox>
        <img src={bgImg} alt='' />
      </ArrivalInfoBox>
      <ImgBox>
        <img src={busIcon} alt='' />
      </ImgBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.5rem;
`;
const ArrivalInfoBox = styled.div``;
const ImgBox = styled.div``;
export default Bus;
