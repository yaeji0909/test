import styled from "styled-components";
import CheckBox from "../common/CheckBox";
import { useState } from "react";

const BusInfo = ({
  busStop = [],
  clickedBusStop = [],
  setSelectedList = [],
}) => {
  const [clickToggle, setClickToggle] = useState(false);
  const addFavorites = (e) => {
    setClickToggle((prev) => !prev);
    console.log(e.currentTarget.outerText);
  };

  return (
    <Wrapper>
      <BusInfoBox>
        <LeftBox>
          {busStop.routetp === "간선버스" ? (
            <>
              <BusBadge style={{ backgroundColor: "#59BE0A" }}>
                <span>간선</span>
              </BusBadge>
              <BusList style={{ color: "#59BE0A" }}>{busStop.routeno}</BusList>
            </>
          ) : (
            <>
              <BusBadge style={{ backgroundColor: "#1E7ADB" }}>
                <span>급행</span>
              </BusBadge>
              <BusList style={{ color: "#1E7ADB" }}>{busStop.routeno}</BusList>
            </>
          )}
        </LeftBox>
        <CheckBox data={busStop} setSelectedList={setSelectedList} />
      </BusInfoBox>
    </Wrapper>
  );
};

const BusInfoBox = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e2e7;
  width: 100%;
`;
const LeftBox = styled.div`
  display: flex;
  align-items: center;
`;
const BusBadge = styled.div`
  text-align: center;
  font-weight: 300;
  width: 2.8rem;
  height: 1.2rem;
  font-size: 0.8rem;
  border-radius: 0.2rem;
  color: #ffffff;
`;
const BusList = styled.li`
  font-size: 1.2rem;
  margin: 0 1rem;
`;
const Wrapper = styled.div``;

export default BusInfo;
