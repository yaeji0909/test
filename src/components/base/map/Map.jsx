import { useEffect, useRef, useState } from "react";
import { Map } from "react-kakao-maps-sdk";
import EventMarker from "./EventMarker";
import styled, { css } from "styled-components";
import { useQuery } from "react-query";
import { getBusStopByLocation } from "@api/mapApi";
import { MdOutlineMyLocation } from "react-icons/md";
import { MapMarker } from "react-kakao-maps-sdk";
import userIcon from "@static/svg/user-position-icon.svg";

const MapContainer = () => {
  const [mapState, setMapState] = useState({
    center: { lat: 33.452613, lng: 126.570888 },
    isPanto: true,
  });
  const [station, setStation] = useState([]);
  const [markers, setMarkers] = useState([]);

  const map = useRef();
  // 현 위치 조회
  const getCurrentPos = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("get position");
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

  // response data를 마커객체로 수정
  const editDataToMarker = () => {
    if (station) {
      for (let {
        nodenm: name,
        gpslati: lat,
        gpslong: lng,
        nodeid: stopId,
      } of station) {
        let markerObj = {
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

  useEffect(() => {
    getCurrentPos();
    setStation(positionData);
    setMarkers(editDataToMarker());
  }, [positionData, station]);

  return (
    <>
      <Map
        center={mapState.center}
        isPanto={mapState.isPanto}
        ref={map}
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
            markers={markers}
          />
        ))}
        <MapMarker
          position={{
            lat: mapState.center.lat,
            lng: mapState.center.lng,
          }}
          image={{
            src: userIcon,
            size: {
              width: 90,
              height: 90,
            },
            options: {
              offset: {
                x: 10,
                y: 10,
              },
            },
          }}
        ></MapMarker>
        <LocationBtn onClick={() => getCurrentPos}>
          <MdOutlineMyLocation />
        </LocationBtn>
      </Map>
    </>
  );
};

const LocationBtn = styled.div`
  border-radius: 50%;
  background-color: #ffffff;
  color: #006ffd;
  z-index: 1;
  position: absolute;
  bottom: 12%;
  display: flex;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  right: 5%;
  width: 3rem;
  height: 3rem;
  svg {
    font-size: 1.6rem;
  }
  ${(props) =>
    props.refreshToggle &&
    css`
      color: #ffffff;
      background-color: #006ffd;
    `}
`;

export default MapContainer;
