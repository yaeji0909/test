import { MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import busStopIcon from "@static/images/bus-stop-icon.png";

const EventMarker = ({ marker, markers }) => {
  const [isVisible, setIsVisible] = useState(false);

  const searchBusStopInfo = (clickedMarker) => {
    const marker = markers.filter(
      (marker) => marker.stopId === clickedMarker.stopId
    );
    const clickedBusStop = marker[0];
    navigate("/bus-stop", {
      state: {
        value: clickedBusStop,
      },
    });
  };

  const navigate = useNavigate();

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
        {isVisible && marker}
      </MapMarker>
    </>
  );
};

export default EventMarker;
