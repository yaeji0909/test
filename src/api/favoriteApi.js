import { objectToParam } from "@utils/utils.js";
import axios from "axios";

const favoriteAxios = axios.create({
  baseURL: "http://localhost:8090",
});

export const addFavoriteList = async () => {
  const param = objectToParam({
    user: 801,
    city: 39,
    station: "JEB405000646",
    seq: 11,
  });
  const { data } = await favoriteAxios.put(`favorite${param}`);
  return data || [];
};

export const deleteFavoriteList = async () => {
  const param = objectToParam({
    user: 801,
    city: 39,
    station: "JEB405000646",
  });
  const { data } = await favoriteAxios.delete(`favorite${param}`);
  return data || [];
};

export const getFavoriteList = async () => {
  const param = objectToParam({
    user: 801,
    city: 39,
  });
  const { data } = await favoriteAxios.get(`favorite/list${param}`);
  return data || [];
};
