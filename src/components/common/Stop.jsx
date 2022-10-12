import {useState} from 'react';
import { useSetRecoilState } from "recoil";
import { favoritesState } from "../../atom";
import styled from 'styled-components';


const Stop = () => {
  let id = 0;
  function getId() {
    return id++;
  }
  const input = styled.div=`
  background-color:#e0c0c0`
  

  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(favoritesState);

  const addItem = () => {
    setTodoList((oldValue) => [
      ...oldValue,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  const onChange = ({target: {value}}) => {
    setInputValue(value);
  };
    return(
      <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
    )
}

export default  Stop;
