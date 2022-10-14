import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";
import busStopIcon from "../../static/images/bus-stop-icon.png";
import { useQuery } from "react-query";
import axios from "axios";

const MapContainer = () => {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const getData = async () => {
    const { data } = await axios.get(
      `http://apis.data.go.kr/1613000/BusSttnInfoInqireService/getCrdntPrxmtSttnList?serviceKey=${
        process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY
      }&
      gpsLati=${33.450701}&gpsLong=${126.570667}&numOfRows=10&pageNo=1&_type=json`
    );
    return data;
  };

  const data = [
    {
      content: <div style={{ color: "#000" }}>a</div>,
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
  ];

  // 현 위치 조회
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  const EventMarkerContainer = ({ position, content }) => {
    const {
      data: locations,
      isLoading,
      isError,
      error,
    } = useQuery("locations", getData);

    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
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
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={3} // 지도의 확대 레벨
      >
        {data.map((value) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
            position={value.latlng}
            content={value.content}
          />
        ))}
      </Map>
    </>
  );
};
export default MapContainer;
