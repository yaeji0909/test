import { atom } from "recoil";

export const currentMapState = atom({
  key: "currentMapState",
  default: {
    center: { lat: 33.452613, lng: 126.570888 },
    isPanto: true,
  },
});

export const stations = atom({
  key: "stations",
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

export const selectedStation = atom({
  key: "selectedStation",
  default: [],
});
