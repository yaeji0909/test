import { atom } from "recoil";

export const userInfo = atom({
  key: "userInfo",
  default: {},
});

export const selectedCity = atom({
  key: "selectedCity",
  default: 31100,
});
