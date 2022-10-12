import { Helmet } from "react-helmet-async";
import Footer from "../../components/base/Footer";
import SearchInput from '../../components/search/SearchInput'
import StopList from "../../components/common/StopsList";
import MapContainer from "../../components/base/MapContainer";

function MainPage() {
  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
       <SearchInput/>
       <MapContainer/>
       <StopList
        // posts={data?.trendingPosts || []}
        // forHome
        // loading={!data || loading}
       />
       {/* <Footer/> */}
    </>
  );
}

export default MainPage;
