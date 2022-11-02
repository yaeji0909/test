import { objectToParam } from "@utils/utils.js";
import axios from "axios";

const govAxios = axios.create({
  baseURL: "http://apis.data.go.kr/1613000",
});

export const getBusStopByLocation = async (lat, lng) => {
  // 현 위치를 기준으로 근처 500m이내의 정류소 조회
  try {
    const param = objectToParam({
      serviceKey: process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY,
      gpsLati: lat,
      gpsLong: lng,
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

export const getStopInfo = async (clickedStation) => {
  // 버스 정류장 운행중인 노선 정보
  try {
    const param = objectToParam({
      serviceKey: process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY,
      cityCode: 39,
      nodeid: clickedStation,
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
    });

    const { data } = await govAxios.get(
      `/BusSttnInfoInqireService/getSttnThrghRouteList${param}`
    );
    return data.response.body.items.item || [];
  } catch (err) {
    throw new Error(err.response.status);
  }
};

export const getBusArrivalInfo = async (clickedStation) => {
  // 검색한 정류장에 대한 모든 노선 도착 정보
  try {
    const param = objectToParam({
      serviceKey: process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY,
      cityCode: 39,
      nodeId: clickedStation,
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
    });

    const { data } = await govAxios.get(
      `/ArvlInfoInqireService/getSttnAcctoArvlPrearngeInfoList${param}`
    );
    return data.response.body.items || [];
  } catch (err) {
    throw new Error(err.response.status);
  }
};

export const getClickedBusInfo = async (clickedStation, routeId) => {
  // 특정 노선에 대한 정보
  try {
    const param = objectToParam({
      serviceKey: process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY,
      cityCode: 39,
      nodeId: clickedStation,
      routeId: routeId,
      numOfRows: 10,
      pageNo: 1,
      _type: "json",
    });

    const { data } = await govAxios.get(
      `/ArvlInfoInqireService/getSttnAcctoSpcifyRouteBusArvlPrearngeInfoList${param}`
    );
    return data.response.body.items.item || [];
  } catch (err) {
    throw new Error(err.response.status);
  }
};

// export const getBusRouteInfo = async (routeId) => {
//   // 특정 노선에 대한 정보
//   try {
//     const param = objectToParam({
//       serviceKey: process.env.REACT_APP_SEARCH_BUS_WITH_LOC_KEY,
//       cityCode: 39,
//       routeId: routeId,
//       numOfRows: 10,
//       pageNo: 1,
//       _type: "json",
//     });

//     const { data } = await govAxios.get(
//       `BusRouteInfoInqireService/getRouteNoList${param}`
//     );
//     return data.response.body.items || [];
//   } catch (err) {
//     throw new Error(err.response.status);
//   }
// };
