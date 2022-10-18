import { atom } from "recoil";

export const currentPos = atom({
  key: "currentPos",
  default: {},
});

export const stops = atom({
  key: "stops",
  default: [],
});

export const positionMarkers = atom({
  key: "positionMarkers",
  default: [],
});
