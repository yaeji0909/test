import { Helmet } from "react-helmet-async";
import SettingsMenu from "@components/settings/SettingsMenu";

const SettingPage = () => {
  return (
    <>
      <Helmet>
        <title>SettingPage</title>
      </Helmet>
      <div>
        <SettingsMenu />
      </div>
    </>
  );
};

export default SettingPage;
