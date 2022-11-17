import { atom } from "recoil";
import { sessionStorageEffect } from "./util";

export const userInfo = atom({
  key: "userInfo",
  default: {},
});

export const clickedBusStop = atom({
  key: "clickedBusStop",
  default: [],
  effects: [sessionStorageEffect("clicked_busStop")],
});

export const selectedCity = atom({
  key: "selectedCity",
  default: 39,
});
