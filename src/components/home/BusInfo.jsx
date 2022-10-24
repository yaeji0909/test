import styled from "styled-components";

function BusInfo({ color, type, num, busStop }) {
  return (
    <BusInfoBox>
      <BusList>{busStop.routeno}</BusList>
      <BusList>{busStop.routetp}</BusList>
    </BusInfoBox>
  );
}

const BusInfoBox = styled.div``;

const BusList = styled.li`
  border-bottom: 1px solid #e0e2e7;
  padding: 1.5rem;
`;
export default BusInfo;
