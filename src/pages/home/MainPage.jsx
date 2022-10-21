import { Helmet } from "react-helmet-async";
// import Footer from "../../components/base/Footer";
import LargeSearchInput from "@components/search/LargeSearchInput";
import Map from "@components/base/Map";
// import PostCardGrid from "./PostCardGrid";
// import BottomTab from "../../components/common/BottomTab";
function MainPage(props) {
  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <LargeSearchInput {...props} />
      <Map />
      {/* <PostCardGrid /> */}
      {/* <BottomTab /> */}
      {/* <StopList/> */}
    </>
  );
}

export default MainPage;
