import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";
import busStopIcon from "../../static/images/bus-stop-icon.png";
import { useRecoilState } from "recoil";
import { currentPos, positionMarkers, stops } from "../../recoil/home";
import { useQuery } from "react-query";
import axios from "axios";

const MapContainer = () => {
  const [currentPosition, setCurrentPosition] = useRecoilState(currentPos);
  const [stop, setBusStop] = useRecoilState(stops);
  const [markers, setMarkers] = useRecoilState(positionMarkers);

  // 현 위치 조회
  const getCurrentPos = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
          });
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
  };

  // 현 위치를 기준으로 근처 500m이내의 정류소 조회
  const endPoint = "http://apis.data.go.kr/1613000/BusSttnInfoInqireService";

  const getLocations = async () => {
    try {
      const { data } = await axios.get(
        `${endPoint}/getCrdntPrxmtSttnList?serviceKey=${
          process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY
        }&gpsLati=${33.450701}&gpsLong=${126.570667}&numOfRows=10&pageNo=1&_type=json`
      );
      return data.response.body.items.item || [];
    } catch (err) {
      throw new Error(err.response.status);
    }
  };

  const getRouteInfo = async () => {
    const { data } = await axios.get(
      `${endPoint}/getSttnThrghRouteList?serviceKey=${
        process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY
      }&cityCode=${25}&nodeid=${"DJB8002011"}&numOfRows=10&pageNo=1&_type=json`
    );
    console.log(data);
    return data;
  };

  // response data를 마커를 그릴 수 있도록 수정
  const editMarkerData = () => {
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

  const { data: positionData } = useQuery("locations", getLocations, {
    enabled: currentPosition.center.lat !== 33.452613,
  });

  const { data: routeData } = useQuery("route", getRouteInfo, {
    enabled: !positionData,
  });

  console.log(routeData);
  useEffect(() => {
    getCurrentPos();
    setBusStop(positionData);
    setMarkers(editMarkerData());
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
