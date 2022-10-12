import { Helmet } from "react-helmet-async";
import Header from "../../components/base/Header";

function SearchPage() {
  return (
    <>
      <Helmet>
        <title>SearchPage</title>
      </Helmet>
      <Header/>
      <div>
       <h3>SearchPage</h3>
      </div>    </>
  );
}

export default SearchPage;
