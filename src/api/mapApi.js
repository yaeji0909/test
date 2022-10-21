import { objectToParam } from "@utils/utils.js";
import axios from "axios";

const govAxios = axios.create({
  baseURL: "http://apis.data.go.kr/1613000",
});

export const getBusStopByLocation = async () => {
  // 현 위치를 기준으로 근처 500m이내의 정류소 조회

  try {
    const param = objectToParam({
      serviceKey: process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY,
      gpsLati: "33.450701",
      gpsLong: "126.570667",
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
    });
    const { data } = await govAxios.get(
      `/BusSttnInfoInqireService/getCrdntPrxmtSttnList${param}`
    );
    return data.response.body.items.item || [];
  } catch (err) {
    throw new Error(err.response.status);
  }
};

export const getStopInfo = async () => {
  try {
    const param = objectToParam({
      serviceKey: process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY,
      cityCode: 39,
      nodeid: "JEB405001622",
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
    });

    const { data } = await govAxios.get(
      `/BusSttnInfoInqireService/getSttnThrghRouteList${param}`
    );
    return data || [];
  } catch (err) {
    throw new Error(err.response.status);
  }
};

export const getBusArrivalInfo = async () => {
  try {
    const param = objectToParam({
      serviceKey: process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY,
      cityCode: 39,
      nodeId: "JEB405001622",
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
    });

    const { data } = await govAxios.get(
      `/ArvlInfoInqireService/getSttnAcctoArvlPrearngeInfoList${param}`
    );
    return data || [];
  } catch (err) {
    throw new Error(err.response.status);
  }
};

export const getClickedBusInfo = async () => {
  try {
    const param = objectToParam({
      serviceKey: process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY,
      cityCode: 39,
      nodeId: "JEB405001622",
      routeId: "JEB405242602",
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
    });

    const { data } = await govAxios.get(
      `/ArvlInfoInqireService/getSttnAcctoSpcifyRouteBusArvlPrearngeInfoList${param}`
    );
    return data || [];
  } catch (err) {
    throw new Error(err.response.status);
  }
};
