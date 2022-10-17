import { atom } from "recoil";

export const currentPos = atom({
  key: "currentPos",
  default: {
    center: {
      lat: "33.450701",
      lng: "126.570667",
    },
    errMsg: null,
    isLoading: true,
  },
});

export const busStop = atom({
  key: "busStop",
  default: [
    {
      citycode: 39,
      gpslati: 33.454671,
      gpslong: 126.571567,
      nodeid: "JEB405002345",
      nodenm: "제주장애인요양원",
    },
  ],
});

export const positionMarkers = atom({
  key: "positionMarkers",
  default: [
    {
      content: <div style={{ color: "#000" }}>12</div>,
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
  ],
});
