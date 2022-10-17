import { useQuery } from "react-query";
import axios from "axios";

export const getLocations = async () => {
  try {
    const { data } = await axios.get(
      `http://apis.data.go.kr/1613000/BusSttnInfoInqireService/getCrdntPrxmtSttnList?serviceKey=${
        process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY
      }&gpsLati=${33.450701}&gpsLong=${126.570667}&numOfRows=10&pageNo=1&_type=json`
    );
    // return data;
    return data.response.body.items.item;
  } catch (err) {
    throw new Error(err.response.status);
  }
};

export const useGetLocations = () => {
  return useQuery("locations", getLocations);
};
