import styled from "styled-components";
// import starIcon from "@static/svg/star-icon.svg";
import { FiStar } from "react-icons/fi";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { favorites } from "@recoil/home";

const SearchResult = ({ item, query, no }) => {
  const [clickToggle, setClickToggle] = useState(false);

  const addFavorites = (e) => {
    setClickToggle(!clickToggle);
    console.log(e.currentTarget.outerText);
  };

  return item.includes(query) ? (
    <SearchContentsList>
      <List onClick={addFavorites}>
        {item.split(query)[0]}
        <span style={{ color: "#3186C4" }}>{query}</span>
        {item.split(query)[1]}
        <span className='stop-num'>{no}</span>
      </List>
      <ImgBox>
        {clickToggle ? (
          <FiStar alt={"starBtn"} color='#f2e528' fill='#f2e528' />
        ) : (
          <FiStar alt={"starBtn"} />
        )}
      </ImgBox>
    </SearchContentsList>
  ) : (
    <></>
  );
};

const List = styled.li`
  padding: 1.5rem 1rem;
  .stop-num {
    display: block;
    color: #8c8d96;
  }
`;

const ImgBox = styled.div`
  padding: 1.5rem;
  font-size: 1.2rem;
`;
const SearchContentsList = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e2e7;
`;

export default SearchResult;
