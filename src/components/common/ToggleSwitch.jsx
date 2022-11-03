import styled, { css } from "styled-components";

const ToggleSwitch = ({ setAutoSetting, autoSetting }) => {
  const clickedToggle = () => {
    setAutoSetting((prev) => !prev);
  };
  return (
    <div>
      <ToggleBtn onClick={clickedToggle} autoSetting={autoSetting}>
        <Circle autoSetting={autoSetting} />
      </ToggleBtn>
    </div>
  );
};
const ToggleBtn = styled.button`
  width: 11vw;
  height: 3vh;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.autoSetting ? "#DDDDDD;" : "#006FFD")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: white;
  width: 1rem;
  height: 1rem;
  border-radius: 50px;
  position: absolute;
  left: 9%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.autoSetting &&
    css`
      transform: translate(18px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

export default ToggleSwitch;
