import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import BusStopInfo from "@components/home/BusStopInfo";
import MainResponsive from "@components/main/MainResponsive";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { useLocation } from "react-router-dom";

function BusStopInfoPage() {
  const location = useLocation();

  return (
    <Wrapper>
      <Helmet>
        <title>BusStopInfoPage</title>
      </Helmet>
      <Inner>
        <MdOutlineArrowBackIosNew />
        <FiStar />
      </Inner>
      {/* 즐겨찾기 유무에 따른 분기처리 */}
      {location.state.list ? (
        location.state.list.map((el, index) => (
          <BusStopInfo loc={el} key={index} />
        ))
      ) : (
        <BusStopInfo />
      )}
    </Wrapper>
  );
}

const Inner = styled(MainResponsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div``;
export default BusStopInfoPage;
