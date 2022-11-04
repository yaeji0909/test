import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectedCity } from "@recoil/home";

const CheckBox = ({ data = [], setSelectedList = "" }) => {
  const [checkItems, setCheckItems] = useRecoilState(selectedCity);

  console.log(data);
  // 체크박스 단일 선택
  const handleSingleCheck = (checked) => {
    if (data.id === checked) setCheckItems(data.num);
    setSelectedList(checked);
  };

  return (
    <Wrapper>
      <input
        type='checkbox'
        name={`${data.routeno}` || `${data.id}`}
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
