import MainTemplate from "./MainTemplate";
import Header from "../base/Header";

function MainPageTemplate({ children }) {
  return (
    <MainTemplate>
      <Header />
      {children}
    </MainTemplate>
  );
}

export default MainPageTemplate;
