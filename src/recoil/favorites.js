import { atom } from "recoil";
import { sessionStorageEffect } from "./util";

export const favBusStopList = atom({
  key: "favBusStopList",
  default: [],
});

export const favBusList = atom({
  key: "favBusList",
  default: [],
});

export const filteredBusStop = atom({
  key: "filteredBusStop",
  default: [],
  effects: [sessionStorageEffect("filtered_busStop")],
});
