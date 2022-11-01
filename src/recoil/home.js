import { atom } from "recoil";

export const userInfo = atom({
  key: "userInfo",
  default: {},
});

export const favoritesList = atom({
  key: "favorites",
  default: [],
});
