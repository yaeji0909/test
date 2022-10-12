import styled from 'styled-components';
import  { useEffect,useState } from 'react';

const { kakao } = window;

function getBoundInfo({ bound }) {
  const ret = {
      sw_lat: bound.getSouthWest().Ma,
      sw_lon: bound.getSouthWest().La,
      ne_lat: bound.getNorthEast().Ma,
      ne_lon: bound.getNorthEast().La,
  };

  return ret;
}

const MapContainer = () => {
  
  const [map,setMap] = useState(null);
  const [bound, setBound] = useState(null);

  useEffect(()=>{
    mapscript();
   
},[])

const mapscript = () =>{
  const container = document.getElementById('map');
  const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
  const kakaoMap = new kakao.maps.Map(container, options);
  kakao.maps.event.addListener(kakaoMap, 'dragend', () => {
    const bound = kakaoMap.getBounds();
    setBound(getBoundInfo({ bound }));
  });
  kakaoMap.setMaxLevel(5);

  const initBound = kakaoMap.getBounds();
  setBound(getBoundInfo({ bound: initBound }));
  setMap(kakaoMap)
}

    return (
      <div
      style={{
          width: '100%',
          display: 'inline-block',
          marginLeft: '5px',
          marginRight: '5px',
          zIndex:'-2px'
      }}
  >
      <div id="map" style={{ width: '99%', height: '400px' }}></div>
  </div>
    );

   

}
export default MapContainer;
