import styled from "styled-components";
import { useState } from "react";

const RadioButtonGroup = ({ value }) => {
  const [select, setSelect] = useState("");
  const handleSelectChange = (event) => {
    const val = event.target.value;
    console.log(val);
    setSelect(val);
  };
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type='radio'
          name='radio'
          value={value}
          checked={select === value}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 3rem;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 2px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  cursor: pointer;
  &:hover ~ ${RadioButtonLabel} {
    background: #eeeeee;
    &::after {
      content: "";
      border-radius: 50%;
      width: 12px;
      height: 12px;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #ffffff;
      border: 2px solid #006FFD;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        margin: 3px;
        background: linear-gradient(180deg, #4C80F1 0%, #0051D9 100%);
      }
    }
  `}
`;

export default RadioButtonGroup;
