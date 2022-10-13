import { useEffect, useState } from "react";

const { kakao } = window;

const MapContainer = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    const container = document.getElementById("map");
    const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    const kakaoMap = new kakao.maps.Map(container, options);
    kakaoMap.setMaxLevel(5);
    setMap(kakaoMap);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "inline-block",
        marginLeft: "5px",
        marginRight: "5px",
        zIndex: "-2px",
      }}
    >
      <div id='map' style={{ width: "99%", height: "400px" }}></div>
    </div>
  );
};
export default MapContainer;
