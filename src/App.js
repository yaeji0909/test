import HomePage from "./pages/home/HomePage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Test from "./Test.js";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Bus service</title>
        <meta name='description' content='실시간 버스 정보를 제공합니다.' />
      </Helmet>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/t' element={<Test />} exact />
          <Route
            path='*'
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </>
  );
};
export default App;
