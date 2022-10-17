import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState, useEffect, useCallback } from "react";
import busStopIcon from "../../static/images/bus-stop-icon.png";
import { useGetLocations } from "../../api/useGetLocations";
import { useRecoilState } from "recoil";
import { currentPos, positionMarkers, busStop } from "../../recoil/home";

const MapContainer = () => {
  const [currentPosition, setCurrentPosition] = useRecoilState(currentPos);
  const [markers, setMarkers] = useRecoilState(positionMarkers);
  const [stop, setBusStop] = useRecoilState(busStop);
  // 현 위치 조회
  const getCurrentPos = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setCurrentPosition((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setCurrentPosition((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, [setCurrentPosition]);

  useEffect(() => {
    getCurrentPos();
    // console.log(currentPosition.center);
  }, [getCurrentPos, currentPosition.center]);

  const EventMarkerContainer = ({ position, content }) => {
    // console.log(position);
    const {
      status,
      isSuccess,
      isError,
      isLoading,
      isFetching,
      data: positionData,
      error,
    } = useGetLocations();
    if (status === "success") {
      const initData = positionData;
      const marker = {
        latlng: {
          lat: "",
          lng: "",
        },
      };
      initData.forEach((pos) => {
        console.log(pos);
      });
    }
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={currentPosition.center} // 마커를 표시할 위치
        onClick={(marker) => map.panTo(marker.getPosition())}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
        image={{
          src: busStopIcon,
          size: {
            width: 16,
            height: 25,
          },
          offset: {
            x: 10,
            y: 10,
          },
        }}
      >
        {isVisible && content}
      </MapMarker>
    );
  };

  return (
    <>
      <Map // 지도를 표시할 Container
        center={currentPosition.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
      >
        {markers.map((value) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
            position={currentPosition.center}
            content={value.content}
          />
        ))}
      </Map>
    </>
  );
};
export default MapContainer;
