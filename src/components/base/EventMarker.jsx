import { MapMarker } from "react-kakao-maps-sdk";
import { useCallback, useState, useEffect } from "react";
import busStopIcon from "@static/images/bus-stop-icon.png";
import { useQuery } from "react-query";
import { getStopInfo } from "@api/mapApi";

// 이벤트 등록이 된 마커 오버레이
const EventMarker = ({ marker }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [clickedMarker, setClickedMarker] = useState([]);
  const { data: stopData = [], isSuccess } = useQuery("route", getStopInfo);

  const getBusStopInfo = () => {
    console.log(stopData);
  };

  const getClickedStopInfo = () => {
    console.log(clickedMarker.stopId);
  };

  // const searchBusStopInfo = () => {
  //   for (let key in stopData) {
  //     console.log(key.routeid, "routeid");
  //     console.log(clickedMarker.stopId, "stopId");

  //     key.routeid === clickedMarker.stopId
  //       ? console.log("correct!")
  //       : console.log("nope");
  //   }
  // };

  if (isSuccess) {
    getBusStopInfo();
    // searchBusStopInfo();
  }

  useEffect(() => {
    getClickedStopInfo();
  }, []);

  return (
    <>
      <MapMarker
        position={marker.latlng} // 마커를 표시할 위치
        onClick={() => setClickedMarker(marker)}
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
