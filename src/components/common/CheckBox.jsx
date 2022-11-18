import styled, { css } from "styled-components";
import { useRef, useState, useEffect } from "react";
import starImage from "@static/svg/star.svg";
import disabledStarImage from "@static/svg/star-disabled.svg";

const CheckBox = ({
  checkedItemHandler,
  bus = [],
  alreadySelectedBusList = [],
  type,
  addBusInFavList,
}) => {
  const [bChecked, setChecked] = useState(false);
  const checkBoxRef = useRef();

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(bus, target.checked);
    addBusInFavList();
  };

  useEffect(() => {
    if (alreadySelectedBusList) {
      alreadySelectedBusList.map((bus) =>
        bus.id === checkBoxRef.current.name ? setChecked(true) : ""
      );
    }
  }, []);

  useEffect(() => {
    if (setChecked && checkedItemHandler) {
      checkedItemHandler(bus, checkBoxRef.current.checked);
    }
  }, [bChecked]);

  return (
    <Wrapper>
      <StyledCheckBox star={type ? true : ""}>
        <input
          ref={checkBoxRef}
          type='checkbox'
          name={bus ? `${bus.id}` : null}
          checked={bChecked}
          onChange={(e) => checkHandler(e)}
        />
      </StyledCheckBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input {
    width: 1rem;
    height: 1rem;
  }
`;
const StyledCheckBox = styled.div`
  position: absolute;
  right: 4%;
  top: 33%;
  ${(props) =>
    props.star &&
    css`
      position: absolute;
      left: 0%;
      margin-left: 0.5rem;
      input[type="checkbox"] {
        cursor: pointer;
        width: 1.5rem;
        height: 1.5rem;
        appearance: none;
        background-repeat: no-repeat;
        background-image: url(${disabledStarImage});
      }
      input[type="checkbox"]:checked {
        background-image: url(${starImage});
      }
    `}
`;
export default CheckBox;
