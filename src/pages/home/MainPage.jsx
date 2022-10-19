import { Helmet } from "react-helmet-async";
// import Footer from "../../components/base/Footer";
import LargeSearchInput from "@components/search/LargeSearchInput";
import MapContainer from "@components/base/MapContainer";
import BottomTab from "../../components/common/BottomTab";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1.8rem;
  z-index: 5;
`;

function MainPage(props) {
  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <LargeSearchInput {...props} />
      <MapContainer />
      <Section>
        <BottomTab />
      </Section>
      {/* <StopList/> */}
    </>
  );
}

export default MainPage;
