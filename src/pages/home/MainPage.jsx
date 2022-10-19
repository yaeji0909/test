import { Helmet } from "react-helmet-async";
// import Footer from "../../components/base/Footer";
import LargeSearchInput from "@components/search/LargeSearchInput";
import MapContainer from "@components/base/MapContainer";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 1.8rem;
`;

function MainPage(props) {
  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <Section>
        <LargeSearchInput {...props} />
      </Section>
      <MapContainer />
      {/* <StopList/> */}
    </>
  );
}

export default MainPage;
