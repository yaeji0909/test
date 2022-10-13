import { useState } from "react";
import { useRecoilState } from "recoil";
import { favoriteStates } from "../../recoil/home";

const Stop = () => {
  const [inputValue, setInputValue] = useState("");
  const setList = useRecoilState(favoriteStates);

  const addItem = () => {
    setList((oldValue) => [...oldValue, inputValue]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default Stop;
