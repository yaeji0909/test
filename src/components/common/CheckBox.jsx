import { useState } from "react";
import styled from "styled-components";

const CheckBox = ({ city }) => {
  const data = [city];
  console.log(data);
  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems((prev) => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  return (
    <Wrapper>
      {/* <input
        type='checkbox'
        name='select-all'
        onChange={(e) => handleAllCheck(e.target.checked)}
        // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
        checked={checkItems.length === data.length ? true : false}
      /> */}
      {data?.map((data, key) => (
        <div key={key}>
          <input
            type='checkbox'
            name={`select-${data.id}`}
            onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
            // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
            checked={checkItems.includes(data.id) ? true : false}
          />
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 20rem;
  display: inline-block;
  input {
    width: 1rem;
    height: 1rem;
  }
`;
export default CheckBox;
