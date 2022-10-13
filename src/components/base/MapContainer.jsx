import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState, useEffect } from "react";
import busStopIcon from "../../static/images/bus-stop-icon.png";

const MapContainer = () => {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
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
        {!state.isLoading && (
          <MapMarker
            position={state.center}
            image={{
              src: busStopIcon,
              size: {
                width: 26,
                height: 38,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 27,
                  y: 69,
                },
              },
            }}
            clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
            onMouseOver={
              // 마커에 마우스오버 이벤트를 등록합니다
              // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
              () => setIsOpen(true)
            }
            onMouseOut={
              // 마커에 마우스아웃 이벤트를 등록합니다
              // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
              () => setIsOpen(false)
            }
          >
            {/* MapMarker의 자식을 넣어줌으로 해당 자식이 InfoWindow로 만들어지게 합니다 */}
            {/* 인포윈도우에 표출될 내용으로 HTML 문자열이나 React Component가 가능합니다 */}
            {isOpen && (
              <div style={{ padding: "5px", color: "#000" }}>정류장이름</div>
            )}
          </MapMarker>
        )}
      </Map>
    </>
  );
};
export default MapContainer;
