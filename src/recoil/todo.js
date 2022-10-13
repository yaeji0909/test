import { atom } from "recoil";

export const inputState = atom({
  key: "inputState",
  default: "",
});

export const todoState = atom({
  key: "todos",
  default: [
    {
      id: 1,
      contents: "스트레칭 하기",
      isCompleted: false,
    },
  ],
});
