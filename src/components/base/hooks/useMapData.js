// import { useQuery } from "react-query";
// import axios from "axios";
// import { useState, useEffect, useCallback } from "react";
// import { useRecoilState } from "recoil";
// import { currentPos, positionMarkers, stops } from "../../recoil/home";

// export default function useMap() {
//   const [currentPosition, setCurrentPosition] = useRecoilState(currentPos);
//   const [stop, setBusStop] = useRecoilState(stops);
//   const [markers, setMarkers] = useRecoilState(positionMarkers);

//   const getLocations = async () => {
//     try {
//       const { data } = await axios.get(
//         `http://apis.data.go.kr/1613000/BusSttnInfoInqireService/getCrdntPrxmtSttnList?serviceKey=${
//           process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY
//         }&gpsLati=${33.450701}&gpsLong=${126.570667}&numOfRows=10&pageNo=1&_type=json`
//       );
//       // return data;
//       return data.response.body.items.item;
//     } catch (err) {
//       throw new Error(err.response.status);
//     }
//   };

//   const useGetLocations = () => {
//     return useQuery("locations", getLocations);
//   };

//   const getCurrentPos = () => {
//     // 현 위치 조회
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCurrentPosition({
//             center: {
//               lat: position.coords.latitude, // 위도
//               lng: position.coords.longitude, // 경도
//             },
//             isLoading: false,
//           });
//         },
//         (err) => {
//           setCurrentPosition((prev) => ({
//             ...prev,
//             errMsg: err.message,
//             isLoading: false,
//           }));
//         }
//       );
//       console.log(currentPosition, "currentPosition");
//     } else {
//       // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다.
//       setCurrentPosition((prev) => ({
//         ...prev,
//         errMsg: "geolocation을 사용할수 없어요..",
//         isLoading: false,
//       }));
//     }
//   };

//   const editMarkerData = () => {
//     let markers = [];
//     if (stop) {
//       const userPosition = {
//         content: <div>here!</div>,
//         latlng: {
//           // lat: currentPosition.center.lat,
//           // lng: currentPosition.center.lng,
//         },
//       };
//       markers.push(userPosition);
//       for (let { nodenm: name, gpslati: lat, gpslong: lng } of stop) {
//         let markerObj = {
//           content: <div style={{ color: "tomato" }}>{name}</div>,
//           latlng: { lat, lng },
//         };
//         markers.push(markerObj);
//         // console.log(`${nodenm} ${gpslong} ${gpslati}`);
//       }
//     }
//     console.log("markers", markers);
//     return markers;
//   };

//   useEffect(() => {
//     getCurrentPos();
//     setBusStop(positionData);
//     setMarkers(editMarkerData());
//   }, [positionData, stop]);

//   const map = useMap();
//   const [isVisible, setIsVisible] = useState(false);

//   return { isLoading };
// }
