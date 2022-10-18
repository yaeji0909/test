import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState, useEffect, useCallback } from "react";
import busStopIcon from "@static/images/bus-stop-icon.png";
import { useRecoilState } from "recoil";
import { currentPos, positionMarkers, busStop } from "@recoil/home";
import { useQuery } from "react-query";
import axios from "axios";

const MapContainer = () => {
  const [currentPosition, setCurrentPosition] = useRecoilState(currentPos);
  const [markers, setMarkers] = useRecoilState(positionMarkers);
  const [stop, setBusStop] = useRecoilState(busStop);

  const getCurrentPos = useCallback(() => {
    // 현 위치 조회
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
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다.
      setCurrentPosition((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, [setCurrentPosition]);

  useEffect(() => {
    getCurrentPos();
  }, [getCurrentPos, currentPosition.center]);

  // const getLocations = async () => {
  //   // 현 위치를 기준으로 근처 500m이내의 정류소를 조회합니다.
  //   try {
  //     const { data } = await axios.get(
  //       `http://apis.data.go.kr/1613000/BusSttnInfoInqireService/getCrdntPrxmtSttnList?serviceKey=${process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY}&gpsLati=${currentPosition.center.lat}&gpsLong=${currentPosition.center.lng}&numOfRows=10&pageNo=1&_type=json`
  //     );
  //     return data.response.body.items.item;
  //   } catch (err) {
  //     throw new Error(err.response.status);
  //   }
  // };

  const getLocations = async () => {
    // 현 위치를 기준으로 근처 500m이내의 정류소를 조회합니다.
    try {
      const { data } = await axios.get(
        `http://apis.data.go.kr/1613000/BusSttnInfoInqireService/getCrdntPrxmtSttnList?serviceKey=${
          process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY
        }&gpsLati=${33.450701}&gpsLong=${126.570667}&numOfRows=10&pageNo=1&_type=json`
      );
      return data.response.body.items.item;
    } catch (err) {
      throw new Error(err.response.status);
    }
  };

  const useGetLocations = () => {
    return useQuery("locations", getLocations);
  };

  const EventMarkerContainer = ({ position, content }) => {
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