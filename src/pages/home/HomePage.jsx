import MainResponsive from "../../components/main/MainResponsive";
import HomeLayout from "../../components/home/HomeLayout";
import MainTemplate from "../../components/main/MainTemplate";
import SearchPage from "./SearchPage";
import RecentSearchPage from "./RecentPage";
import MainPage from "./MainPage";
import TodoPage from "./TodoPage";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import ReactQueryPage from "./ReactQueryPage";
import ParallelPage from "./ParallelPage";
import DependentPage from "./DependentPage";

const HomePage = () => {
  const location = useLocation();

  return (
    <MainTemplate>
      <MainResponsive>
        <HomeLayout
          main={
            <>
              <Routes location={location}>
                <Route path='/' element={<Navigate replace to='home' />} />
                <Route path='home' element={<MainPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='recent' element={<RecentSearchPage />} />
                <Route path='todo' element={<TodoPage />} />
                <Route path='query' element={<ReactQueryPage />} />
                <Route path='query/parallel' element={<ParallelPage />} />
                <Route path='query/dependent' element={<DependentPage />} />
              </Routes>
            </>
          }
        />
      </MainResponsive>
    </MainTemplate>
  );
};

export default HomePage;
