import { Helmet } from "react-helmet-async";
// import Footer from "../../components/base/Footer";
import SearchInput from "../../components/search/SearchInput";
import MapContainer from "../../components/base/MapContainer";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

function MainPage(props) {
  return (
    <>
      <Helmet>
        <title>MainPage</title>
      </Helmet>
      <Section>
        <SearchInput {...props} />
      </Section>
      <MapContainer />
      {/* <StopList/> */}
    </>
  );
}

export default MainPage;
