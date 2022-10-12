import HomePage from "./pages/home/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NotFound from "./pages/NotFoundPage.jsx";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Bus service</title>
        <meta name='description' content='실시간 버스 정보를 제공합니다.' />
      </Helmet>
      <Router>
        <Routes>
          <Route path='home/*' element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
