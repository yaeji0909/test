import { atom } from "recoil";
import { sessionStorageEffect } from "./util";

export const userPid = atom({
  key: "userPid",
  default: "",
  effects: [sessionStorageEffect("user_pid")],
});
