import MainResponsive from "../../components/main/MainResponsive";
import HomeLayout from "../../components/home/HomeLayout";
import MainTemplate from "../../components/main/MainTemplate";
import SearchPage from "./SearchPage";
import RecentSearchPage from "./RecentPage";
import MainPage from "./MainPage";
import { Routes,Route,useLocation } from 'react-router-dom';

const HomePage = () => {
  const location = useLocation();

  return (
    <MainTemplate>
      <MainResponsive>
        <HomeLayout
          main={
            <>
              <Routes location={location}>
                <Route path='/' element={<MainPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='recent' element={<RecentSearchPage />} />
              </Routes>
              </>
          }
        />
      </MainResponsive>
    </MainTemplate>
  );
};

export default HomePage;
