import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import BusStopInfo from "@components/home/BusStopInfo";

import { useLocation } from "react-router-dom";

function BusStopInfoPage() {
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>BusStopInfoPage</title>
      </Helmet>

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

export default BusStopInfoPage;
