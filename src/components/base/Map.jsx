import { Map } from "react-kakao-maps-sdk";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentMapState, positionMarkers, stops } from "@recoil/home";
import { useQuery } from "react-query";
import EventMarker from "./EventMarker";
import {
  getBusStopByLocation,
  getBusArrivalInfo,
  getClickedBusInfo,
} from "@api/mapApi";

const MapContainer = () => {
  const [mapState, setMapState] = useRecoilState(currentMapState);
  const [stop, setBusStop] = useRecoilState(stops);
  const [markers, setMarkers] = useRecoilState(positionMarkers);

  // 현 위치 조회
  const getCurrentPos = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMapState({
        // center: {
        //   lat: position.coords.latitude, // 위도
        //   lng: position.coords.longitude, // 경도
        // },
        center: {
          lat: "33.450701", // 위도
          lng: "126.570667", // 경도
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
          lat: mapState.center.lat,
          lng: mapState.center.lng,
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
          name,
          stopId,
          latlng: { lat, lng },
        };
        markers.push(markerObj);
      }
    }

    return markers;
  };

  const { data: positionData } = useQuery("locations", getBusStopByLocation, {
    enabled: mapState.center.lat !== 33.452613,
  });
  const { data: arrivalData } = useQuery("busArrival", getBusArrivalInfo);
  const { data: clickedBusInfo } = useQuery("busInfo", getClickedBusInfo, {
    enabled: !arrivalData,
  });

  useEffect(() => {
    console.log("mapState", mapState);
    getCurrentPos();
    setBusStop(positionData);
    setMarkers(editDataToMarker());
  }, [positionData, stop]);

  return (
    <>
      <Map // 지도를 표시할 Container
        center={mapState.center}
        isPanto={mapState.isPanto}
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
          <EventMarker
            key={`EventMarker-${marker.latlng.lat}-${marker.latlng.lng}`}
            position={marker.latlng}
            marker={marker}
          />
        ))}
      </Map>
    </>
  );
};
export default MapContainer;
