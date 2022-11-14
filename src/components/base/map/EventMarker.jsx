import { MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import busStopIcon from "@static/images/bus-stop-icon.png";
import { useRecoilState } from "recoil";
import { clickedBusStop } from "@recoil/home";
const EventMarker = ({ marker, markers }) => {
  const navigate = useNavigate();
  const [selectedBusStop, setSelectedBusStop] = useRecoilState(clickedBusStop);

  const searchBusStopInfo = (clickedMarker) => {
    const marker = markers.filter(
      (marker) => marker.stopId === clickedMarker.stopId
    );
    setSelectedBusStop(marker[0]);

    navigate("/bus-stop", {
      // state: {
      //   selectedBusStop: clickedBusStop,
      // },
    });
  };

  return (
    <MapMarker
      position={marker.latlng} // 마커를 표시할 위치
      onClick={() => searchBusStopInfo(marker)}
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
    />
  );
};

export default EventMarker;
