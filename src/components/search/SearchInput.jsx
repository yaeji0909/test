import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi';


const SearchInput = () => {

const SearchInputBlock = styled.div`
display: flex;
  height: 2.5rem;
  padding: 0 0.625rem;
  align-items: center;
  transition: all 0.125s ease-in;
  cursor: text;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  svg {
    transition: all 0.125s ease-in;
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    fill: black;
    flex-shrink: 0;
  }
  input {
    transition: all 0.125s ease-in;
    font-size: 0.875rem;
    flex: 1;
    display: block;
    line-height: 1rem;
    height: 1rem;
    padding: 0;
    border: none;
    outline: 0;
    background: transparent;
    color:black;
    min-width: 0;
    &::placeholder {
      color: black;
    }
  }
`


return(
  <SearchInputBlock>
  <GiHamburgerMenu/>
  <input type="text" />
  </SearchInputBlock>
)
}

export default  SearchInput;
