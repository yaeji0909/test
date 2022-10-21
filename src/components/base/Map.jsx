import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";
import busStopIcon from "@static/images/bus-stop-icon.png";
import { useRecoilState } from "recoil";
import { currentPos, positionMarkers, stops } from "@recoil/home";
import { useQuery } from "react-query";
import {
  getBusStopByLocation,
  getStopInfo,
  getBusArrivalInfo,
  getClickedBusInfo,
} from "@api/mapApi";

const MapContainer = () => {
  const [currentPosition, setCurrentPosition] = useRecoilState(currentPos);
  const [stop, setBusStop] = useRecoilState(stops);
  const [markers, setMarkers] = useRecoilState(positionMarkers);

  // 현 위치 조회
  const getCurrentPos = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition({
        center: {
          lat: position.coords.latitude, // 위도
          lng: position.coords.longitude, // 경도
        },
      });
    });
  };

  // response data를 마커를 그릴 수 있도록 수정
  const editDataToMarker = () => {
    let markers = [];
    if (stop) {
      const userPosition = {
        content: <div>here!</div>,
        latlng: {
          lat: currentPosition.center.lat,
          lng: currentPosition.center.lng,
        },
      };
      markers.push(userPosition);
      for (let {
        nodenm: name,
        gpslati: lat,
        gpslong: lng,
        nodeid: stopId,
      } of stop) {
        let markerObj = {
          // content: <div style={{ color: "tomato" }}>{name}</div>,
          name: { name },
          stopId: { stopId },
          latlng: { lat, lng },
        };
        markers.push(markerObj);
      }
    }

    return markers;
  };

  const { data: positionData } = useQuery("locations", getBusStopByLocation, {
    enabled: currentPosition.center.lat !== 33.452613,
  });

  const { data: stopData } = useQuery("route", getStopInfo, {
    enabled: !positionData,
  });
  const { data: arrivalData } = useQuery("busArrival", getBusArrivalInfo, {
    enabled: !stopData,
  });
  const { data: clickedBusInfo } = useQuery("busInfo", getClickedBusInfo, {
    enabled: !arrivalData,
  });

  useEffect(() => {
    getCurrentPos();
    setBusStop(positionData);
    setMarkers(editDataToMarker());
  }, [positionData, stop]);

  // 이벤트 등록이 된 마커 오버레이
  const EventMarkerContainer = ({ marker }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <>
        <MapMarker
          position={marker.latlng} // 마커를 표시할 위치
          onClick={() => console.log(marker)}
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

  return (
    <>
      <Map // 지도를 표시할 Container
        center={currentPosition.center}
        isPanto={currentPosition.isPanto}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100vh",
          zIndex: 1,
          position: "relative",
        }}
        level={4}
      >
        {markers.map((marker) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${marker.latlng.lat}-${marker.latlng.lng}`}
            position={marker.latlng}
            marker={marker}
          />
        ))}
      </Map>
    </>
  );
};
export default MapContainer;
