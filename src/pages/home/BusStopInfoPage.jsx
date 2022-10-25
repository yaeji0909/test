import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import BackIcon from "../../components/base/BackIcon";
import BusStopInfo from "@components/home/BusStopInfo";
import starIcon from "@static/svg/star-icon.svg";
import MainResponsive from "@components/main/MainResponsive";
import { useNavigate } from "react-router-dom";

function BusStopInfoPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>BusStopInfoPage</title>
      </Helmet>
      <Inner>
        <BackIcon onClick={() => navigate(-1)} />
        <img src={starIcon} alt={"starBtn"} />
      </Inner>
      <BusStopInfo />
    </>
  );
}

const Inner = styled(MainResponsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default BusStopInfoPage;
