import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import BusStopInfo from "@components/home/BusStopInfo";
import MainResponsive from "@components/main/MainResponsive";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

function BusStopInfoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <>
      <Helmet>
        <title>BusStopInfoPage</title>
      </Helmet>
      <Inner>
        <MdOutlineArrowBackIosNew onClick={clickHandler} />
        <FiStar />
      </Inner>
      {location.state.list ? (
        // 즐겨찾기 유무에 따른 페이지 이동
        location.state.type ? (
          // 즐겨찾기탭에서 버스 정류장 페이지로 이동
          location.state.list.map((el, index) => (
            <BusStopInfo list={el} key={index} type={location.state.type} />
          ))
        ) : (
          // 즐겨찾기에서 버스 추가 페이지로 이동
          location.state.list.map((el, index) => (
            <BusStopInfo list={el} key={index} />
          ))
        )
      ) : (
        <BusStopInfo />
      )}
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
