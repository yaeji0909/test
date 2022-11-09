import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

const CheckBox = ({
  defaultChecked,
  checkedItemHandler,
  bus,
  busListInFavList,
}) => {
  const [bChecked, setChecked] = useState(false);
  const checkBoxRef = useRef();

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(bus, target.checked);
  };

  useEffect(() => {
    busListInFavList.map((e) =>
      e.no === checkBoxRef.current.name ? setChecked(true) : ""
    );
  }, []);

  return (
    <Wrapper>
      <input
        ref={checkBoxRef}
        type='checkbox'
        name={`${bus.routeno}`}
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
