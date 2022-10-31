import styled from "styled-components";
import RadioButton from "../common/RadioButton";

const times = ["새로고침 안함", "10초", "20초", "30초", "40초", "60초"];

const SetRefreshTime = () => {
  return (
    <div>
      {times.map((time, index) => (
        <StyledUl key={index}>
          <StyledList>{time}</StyledList>
          <RadioButton value={time} />
        </StyledUl>
      ))}
      <BottomBox>
        <Button>취소</Button>
        <Button>저장</Button>
      </BottomBox>
    </div>
  );
};
const StyledUl = styled.ul`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #e0e2e7;
`;
const BottomBox = styled.div`
  position: absolute;
  bottom: 0%;
  background-color: #ffffff;
  border: 1px solid #f0f0f0f0;
  width: 27rem;
  height: 6vh;
  z-index: 8;
`;
const Button = styled.button`
  width: 50%;
  height: 100%;
  color: #8c8d96;
  border-left: 1px solid #f0f0f0f0;
`;
const StyledList = styled.li``;
export default SetRefreshTime;
