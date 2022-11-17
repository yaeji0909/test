import styled from "styled-components";
import { useQuery } from "react-query";
import { getClickedBusInfo } from "@api/mapApi";
import Timer from "@components/home/utils/Timer";
import { useEffect } from "react";

const BusInfo = ({ list, busStop, type }) => {
  const { data: busArrival = [] } = useQuery(
    ["busArrival", list.no],
    () => getClickedBusInfo(busStop, list.id),
    { enabled: !!busStop !== [] && !!list.id !== [] }
  );

  const editSecondsToMinutes = (time = []) => {
    const result = time / 60;
    return result;
  };

  const result = editSecondsToMinutes(busArrival.arrtime);

  return (
    <>
      {busArrival ? (
        <BusInfoBox>
          <LeftBox>
            {list.ty === "간선버스" ? (
              <>
                <BusBadge style={{ backgroundColor: "#59BE0A" }}>
                  <span>간선</span>
                </BusBadge>
                <BusList style={{ color: "#59BE0A" }}>{list.no}</BusList>
              </>
            ) : (
              <>
                <BusBadge style={{ backgroundColor: "#1E7ADB" }}>
                  <span>급행</span>
                </BusBadge>
                <BusList style={{ color: "#1E7ADB" }}>{list.no}</BusList>
              </>
            )}
          </LeftBox>
          {type === "FAVORITE_LIST" && result !== 0 ? (
            <Timer style={{ position: "absolute" }} mm={result} ss={0} />
          ) : (
            <>도착정보없음</>
          )}
        </BusInfoBox>
      ) : (
        ""
      )}
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

export default BusInfo;
