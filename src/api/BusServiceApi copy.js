import { objectToParam } from "@utils/utils.js";
import axios from "axios";

const busAxios = axios.create({
  baseURL: "http://localhost:8090",
});

export const busApi = {
  searchBusStop: async (pageParam) => {
    const param = objectToParam({
      city: 31230,
      key: "학교",
    });

    const res = await busAxios.get(`station/list${param}/${pageParam}`);
    const { content } = res.data;
    const { last } = res.data;
    return { posts: content, nextPage: pageParam + 1, isLast: last };
  },
};
