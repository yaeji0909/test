import { objectToParam } from "@utils/utils.js";
import axios from "axios";
import { result } from "lodash";

const busAxios = axios.create({
  baseURL: "http://localhost:8090",
});

export const searchBusStop = async ({ pageParam = 1 }, searchKeyword) => {
  const param = objectToParam({
    city: 31230,
    key: searchKeyword,
  });
  const { data } = await busAxios.get(`station/list${param}/${pageParam}`);
  return (
    {
      data,
      nextPage: pageParam + 1,
      isLast: data.is_last,
    } || []
  );
};
