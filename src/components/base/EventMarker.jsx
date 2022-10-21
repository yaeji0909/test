import { MapMarker } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";
import busStopIcon from "@static/images/bus-stop-icon.png";
import { useQuery } from "react-query";
import { getStopInfo } from "@api/mapApi";
import { useRecoilState } from "recoil";
import { positionMarkers, selectedStation } from "@recoil/home";

// 이벤트 등록이 된 마커 오버레이
const EventMarker = ({ marker }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [markers, setMarkers] = useRecoilState(positionMarkers);
  const [clickedStation, setClickedStation] = useRecoilState(selectedStation);

  const { data: busStopData = [], isSuccess } = useQuery("route", () =>
    getStopInfo(clickedStation)
  );

  const searchBusStopInfo = (clickedMarker) => {
    setClickedStation(
      markers.filter((marker) => marker.stopId === clickedMarker.stopId)
    );
    console.log(clickedStation);
    console.log(busStopData);
  };

  if (isSuccess) {
    // console.log(stopData);
    // getBusStopInfo();
    // searchBusStopInfo();
  }

  useEffect(() => {
    // getClickedStopInfo();
  }, []);

  return (
    <>
      <MapMarker
        position={marker.latlng} // 마커를 표시할 위치
        onClick={() => searchBusStopInfo(marker)}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
        image={{
          src: busStopIcon,
          size: {
            width: 22,
            height: 30,
          },
          options: {
            offset: {
              x: 12,
              y: 43,
            },
          },
        }}
      >
        {isVisible && marker.content}
      </MapMarker>
    </>
  );
};

export default EventMarker;
