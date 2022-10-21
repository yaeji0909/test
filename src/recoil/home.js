import { atom } from "recoil";

export const currentMapState = atom({
  key: "currentMapState",
  default: {
    center: { lat: 33.452613, lng: 126.570888 },
    isPanto: true,
  },
});

export const stops = atom({
  key: "stops",
  default: [],
});

export const positionMarkers = atom({
  key: "positionMarkers",
  default: [],
});

export const userInfo = atom({
  key: "userInfo",
  default: {},
});
