import { Helmet } from "react-helmet-async";
import BusStopInfo from "@components/bus-stop/BusStopInfo";
import { useLocation } from "react-router-dom";

const EditFavListPage = () => {
  // 즐겨찾기 클릭시
  const location = useLocation();

  return (
    <>
      <Helmet>
        <title>EditFavListPage</title>
      </Helmet>
      {location.state.list.map((el, index) => (
        <BusStopInfo
          list={el}
          key={index}
          type={location.state.type ? location.state.type : ""}
        />
      ))}
    </>
  );
};

export default EditFavListPage;
