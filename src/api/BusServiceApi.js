import { objectToParam } from "@utils/utils.js";
import axios from "axios";

const busAxios = axios.create({
  baseURL: "http://localhost:8090",
});

export const searchBusStop = async (city, searchKeyword) => {
  const param = objectToParam({
    city: city,
    key: searchKeyword,
  });
  const { data } = await busAxios.get(`station/list${param}`);
  return data || [];
};
