import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import MainResponsive from "@components/main/MainResponsive";
import HomeLayout from "@components/home/HomeLayout";
import MainTemplate from "@components/main/MainTemplate";
import BottomTab from "@components/common/BottomTab";
import SearchPage from "./SearchPage";
import RecentSearchPage from "./RecentPage";
import MainPage from "./MainPage";
import BusStopInfoPage from "./BusStopInfoPage";
import SettingPage from "./SettingPage";
import EditFavListPage from "./EditFavListPage";
const HomePage = () => {
  const location = useLocation();

  return (
    <MainTemplate>
      <MainResponsive>
        <HomeLayout
          main={
            <>
              <Routes location={location}>
                {/* <Suspense fallback={<div>...loading</div>}> */}
                <Route path='/' element={<Navigate replace to='home' />} />
                <Route path='home' element={<MainPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='bus-stop' element={<BusStopInfoPage />} />
                <Route path='bus-edit' element={<EditFavListPage />} />
                <Route path='recent' element={<RecentSearchPage />} />
                <Route path='settings' element={<SettingPage />} />
                {/* </Suspense> */}
              </Routes>

              <BottomTab />
            </>
          }
        />
      </MainResponsive>
    </MainTemplate>
  );
};

export default HomePage;
