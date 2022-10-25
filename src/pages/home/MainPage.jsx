import { Helmet } from "react-helmet-async";
// import Footer from "../../components/base/Footer";
import LargeSearchInput from "@components/search/LargeSearchInput";
import { useRecoilState } from "recoil";
import Map from "@components/base/map/Map";
import BusStopInfoPage from "@pages/home/BusStopInfoPage";
import { selectedStation } from "@recoil/home";
import BusStopList from "../../components/home/BusStopList";
import BottomTab from "../../components/common/BottomTab";
// import PostCardGrid from "./PostCardGrid";
// import BottomTab from "../../components/common/BottomTab";
function MainPage(props) {
  const [clickedBusStop, setClickedStation] = useRecoilState(selectedStation);

  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      {/* {clickedBusStop ? "" : <LargeSearchInput />} */}
      {clickedBusStop ? (
        <BusStopInfoPage />
      ) : (
        <>
          <LargeSearchInput />
          <Map />
          <BusStopList />
        </>
      )}
      {/* <BusStopInfo /> */}
      <BottomTab />
    </>
  );
}

export default MainPage;
