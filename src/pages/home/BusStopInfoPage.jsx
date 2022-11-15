import { Helmet } from "react-helmet-async";

import StaticBusStopInfo from "../../components/bus-stop/StaticBusStopInfo";

function BusStopInfoPage() {
  // 주변 정류소 클릭시

  return (
    <>
      <Helmet>
        <title>BusStopInfoPage</title>
      </Helmet>
      <StaticBusStopInfo />
    </>
  );
}

export default BusStopInfoPage;
