import ToggleSwitch from "../common/ToggleSwitch";
import styled from "styled-components";
import { useState } from "react";
import CheckBox from "../common/CheckBox";

const cities = ["서울", "경기", "제주"];

const SetLocation = () => {
  const [autoSetting, setAutoSetting] = useState(false);
  console.log(autoSetting);

  return (
    <div>
      <AutoSetLocation>
        검색지역 자동설정
        <ToggleSwitch
          setAutoSetting={setAutoSetting}
          autoSetting={autoSetting}
        />
      </AutoSetLocation>
      {autoSetting
        ? cities.map((city, index) => (
            <CitiesBox key={index}>
              {city}
              <CheckBox city={city} />
            </CitiesBox>
          ))
        : ""}
    </div>
  );
};

const AutoSetLocation = styled.div`
  padding: 1.3rem 1rem;
  display: flex;
  border-bottom: 1px solid #e0e2e7;
  justify-content: space-between;
`;

const CitiesBox = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e0e2e7;
`;

export default SetLocation;
