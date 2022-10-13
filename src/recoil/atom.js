import { atom } from "recoil";

// atom func안에 key와 default로 이루어진 객체를 넣어줌
export const user = atom({
  key: "user",
  default: "",
});

export const counting = atom({
  key: "counting",
  default: 0,
});

export const favoritesState = atom({
  key: "favoritesState",
  default: [{}],
});
