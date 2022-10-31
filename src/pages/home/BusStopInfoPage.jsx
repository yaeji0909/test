import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import BusStopInfo from "@components/home/BusStopInfo";
import MainResponsive from "@components/main/MainResponsive";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FiStar } from "react-icons/fi";

function BusStopInfoPage() {
  return (
    <>
      <Helmet>
        <title>BusStopInfoPage</title>
      </Helmet>
      <Inner>
        <MdOutlineArrowBackIosNew />
        <FiStar />
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
