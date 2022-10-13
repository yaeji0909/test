import { atom } from "recoil";

// atom func안에 key와 default로 이루어진 객체를 넣어줌
export const favoriteStates = atom({
  key: "favoriteStates",
  default: {
    id: "",
    name: "",
  },
});
