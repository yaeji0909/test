import { Helmet } from "react-helmet-async";
import Header from "../../components/base/Header";

function BusInfoPage() {
  return (
    <>
      <Helmet>
        <title>BusInfoPage</title>
      </Helmet>
      <Header />
      <div>
        <h3>BusInfoPage</h3>
      </div>{" "}
    </>
  );
}

export default BusInfoPage;
