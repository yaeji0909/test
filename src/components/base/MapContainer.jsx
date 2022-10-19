import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { useState, useEffect, useCallback } from "react";
// import busStopIcon from "../../static/images/bus-stop-icon.png";
import { useRecoilState } from "recoil";
import { currentPos, positionMarkers, stops } from "../../recoil/home";
import { useQuery } from "react-query";
import axios from "axios";

const MapContainer = () => {
  const [currentPosition, setCurrentPosition] = useRecoilState(currentPos);
  const [stop, setBusStop] = useRecoilState(stops);
  const [markers, setMarkers] = useRecoilState(positionMarkers);

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

  const {
    status,
    isSuccess,
    isLoading,
    isError,
    isFetching,
    data: positionData,
    error,
  } = useQuery("locations", getLocations);

  const getCurrentPos = () => {
    // 현 위치 조회
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
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
      console.log("getCurrentPos Done!");
      console.log(currentPosition, "currentPosition");
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다.
      setCurrentPosition((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  };

  const editMarkerData = () => {
    let markers = [];
    console.log(currentPosition);
    const userPosition = {
      content: <div>here!</div>,
      latlng: {
        lat: 33.450701,
        lng: 126.570667,
      },
    };
    markers.push(userPosition);
    for (let { nodenm: name, gpslati: lat, gpslong: lng } of stop) {
      let markerObj = {
        content: <div>{name}</div>,
        latlng: { lat, lng },
      };
      markers.push(markerObj);
      // console.log(`${nodenm} ${gpslong} ${gpslati}`);
    }
    console.log(stop);
    console.log(markers);
    console.log("editMarkerData Done!");
    return markers;
  };

  useEffect(() => {
    getLocations();
    getCurrentPos();
    setBusStop(positionData);
    setMarkers(editMarkerData());
    console.log("mount Finish!");
  }, []);

  const EventMarkerContainer = ({ position, content }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <>
        {isSuccess ? (
          <MapMarker
            position={position} // 마커를 표시할 위치
            onClick={(marker) => map.panTo(marker.getPosition())}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
            image={{
              size: {
                width: 5,
                height: 5,
              },
              offset: {
                x: 10,
                y: 10,
              },
            }}
          >
            {/* {content} */}
            {isVisible && content}
          </MapMarker>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  };

  return (
    <>
      {isSuccess ? (
        <Map // 지도를 표시할 Container
          center={{
            lat: "33.450701",
            lng: "126.570667",
          }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "450px",
          }}
          level={3} // 지도의 확대 레벨
        >
          {markers.map((marker) => (
            <EventMarkerContainer
              key={`EventMarkerContainer-${marker.latlng.lat}-${marker.latlng.lng}`}
              position={marker.latlng}
              content={marker.content}
            />
          ))}
        </Map>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
export default MapContainer;
