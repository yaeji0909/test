import { Helmet } from "react-helmet-async";
import Header from "@components/base/Header";
import SettingsMenu from "@components/settings/SettingsMenu";

const SettingPage = () => {
  return (
    <>
      <Helmet>
        <title>SettingPage</title>
      </Helmet>
      <Header title={"설정"} />
      <div>
        <SettingsMenu />
      </div>
    </>
  );
};

export default SettingPage;
