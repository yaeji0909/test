import Header from "../../components/base/Header";
import MainResponsive from "../../components/main/MainResponsive";
import HomeLayout from "../../components/home/HomeLayout";
import MainTemplate from "../../components/main/MainTemplate";
import { Route } from "react-router-dom";
import SearchPage from "./SearchPage";

const HomePage = () => {
  return (
    <MainTemplate>
      <Header />
      <MainResponsive>
        <HomeLayout
          main={
            <>
              <Route path='/' component={SearchPage} exact />
            </>
          }
        />
      </MainResponsive>
    </MainTemplate>
  );
};

export default HomePage;
