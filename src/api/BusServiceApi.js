import { objectToParam } from "@utils/utils.js";
import axios from "axios";

const busAxios = axios.create({
  baseURL: "http://localhost:8090",
});

export const searchBusStop = async (searchKeyword) => {
  const param = objectToParam({
    city: 31230,
    key: searchKeyword,
  });
  const { data } = await busAxios.get(`station/list${param}`);
  return data || [];
};
