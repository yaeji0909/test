import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

const CheckBox = ({ checkedItemHandler, bus, alreadySelectedBusList }) => {
  const [bChecked, setChecked] = useState(false);
  const checkBoxRef = useRef();

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(bus, target.checked);
  };

  useEffect(() => {
    alreadySelectedBusList?.map((e) =>
      e.id === checkBoxRef.current.name ? setChecked(true) : ""
    );
  }, []);

  useEffect(() => {
    if (setChecked) {
      checkedItemHandler(bus, checkBoxRef.current.checked);
    }
  }, [bChecked]);

  return (
    <Wrapper>
      <input
        ref={checkBoxRef}
        type='checkbox'
        name={`${bus.id}`}
        checked={bChecked}
        onChange={(e) => checkHandler(e)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input {
    width: 1rem;
    height: 1rem;
  }
`;
export default CheckBox;
