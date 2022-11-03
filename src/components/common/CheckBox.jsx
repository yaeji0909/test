import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectedCity } from "@recoil/home";

const CheckBox = ({ city }) => {
  const [checkItems, setCheckItems] = useRecoilState(selectedCity);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked) => {
    if (city.id === checked) setCheckItems(city.num);
    console.log(checkItems);
  };

  return (
    <Wrapper>
      <input
        type='checkbox'
        name={`${city.id}`}
        onChange={(e) => handleSingleCheck(e.currentTarget.name)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  input {
    width: 1rem;
    height: 1rem;
  }
`;
export default CheckBox;
