import styled, { css } from "styled-components";

const Badge = styled.div`
  text-align: center;
  font-weight: 300;
  width: 2.8rem;
  height: 1.2rem;
  font-size: 0.8rem;
  border-radius: 0.2rem;
`;

const BusBadge = ({ type }) => {
  return (
    <>
      <BusInfoBox>
        <LeftBox>
          {type === "간선버스" ? (
            <BusBadge style={{ backgroundColor: "#59BE0A" }}>
              <span>간선</span>
            </BusBadge>
          ) : (
            <BusBadge style={{ backgroundColor: "#1E7ADB" }}>
              <span>급행</span>
            </BusBadge>
          )}
        </LeftBox>
      </BusInfoBox>
    </>
  );
};

const BusInfoBox = styled.div`
  padding: 1.5rem 3.5rem;
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

const BusList = styled.li`
  font-size: 1.2rem;
  margin: 0 1rem;
`;

export default BusBadge;
