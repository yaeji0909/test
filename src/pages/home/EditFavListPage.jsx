import { Helmet } from "react-helmet-async";
import BusStopInfo from "@components/bus-stop/BusStopInfo";
import { useLocation } from "react-router-dom";

function EditFavListPage() {
  const location = useLocation();

  // 즐겨찾기 클릭시
  return (
    <>
      <Helmet>
        <title>EditFavListPage</title>
      </Helmet>
      {
        // 버스 정류장 상세페이지로 이동시 type 전달
        location.state.list.map((el, index) => (
          <BusStopInfo
            list={el}
            key={index}
            type={location.state.type ? location.state.type : ""}
          />
        ))
      }
    </>
  );
}

export default EditFavListPage;
