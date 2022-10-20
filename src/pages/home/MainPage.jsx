import { Helmet } from "react-helmet-async";
// import Footer from "../../components/base/Footer";
import LargeSearchInput from "@components/search/LargeSearchInput";
import MapContainer from "@components/base/MapContainer";
// import PostCardGrid from "./PostCardGrid";
// import BottomTab from "../../components/common/BottomTab";
function MainPage(props) {
  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <LargeSearchInput {...props} />
      <MapContainer />
      {/* <PostCardGrid /> */}
      {/* <BottomTab /> */}
      {/* <StopList/> */}
    </>
  );
}

export default MainPage;
