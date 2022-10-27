import { Helmet } from "react-helmet-async";
import Header from "@components/base/Header";
import ConfigMenu from "@components/config/ConfigMenu";

const ConfigPage = () => {
  return (
    <>
      <Helmet>
        <title>ConfigPage</title>
      </Helmet>
      <Header title={"설정"} />
      <div>
        <h3>ConfigPage</h3>
        <ConfigMenu />
      </div>
    </>
  );
};

export default ConfigPage;
