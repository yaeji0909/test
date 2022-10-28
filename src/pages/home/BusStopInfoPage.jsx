import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import BusStopInfo from "@components/home/BusStopInfo";
import starIcon from "@static/svg/star-icon.svg";
import MainResponsive from "@components/main/MainResponsive";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function BusStopInfoPage() {
  return (
    <>
      <Helmet>
        <title>BusStopInfoPage</title>
      </Helmet>
      <Inner>
        <MdOutlineArrowBackIosNew />
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
