import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdDirectionsBus } from "react-icons/md";
import { Link } from "react-router-dom";

function BottomTab({ props }) {
  return (
    // <Sticky top={118}>
    <Block>
      <Link to='/search'>
        <Left>
          <AiOutlineSearch />
          <TextBox>최근 검색</TextBox>
        </Left>
      </Link>
      <Center>
        <Link to='/home'>
          <MdDirectionsBus />
        </Link>
      </Center>
      <Link>
        <Right>
          <IoMdSettings />
          <TextBox>설정</TextBox>
        </Right>
      </Link>
    </Block>
    // </Sticky>
  );
}

const Block = styled.div`
  width: 100%;
  height: 6vh;
  background-color: #ffffff;
  z-index: 5;
  left: 0;
  position: absolute;
  display: flex;
  padding: 0.5rem 0;
  justify-content: space-around;
  bottom: 0%;
  color: #8c8d96;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
`;

const Left = styled.div`
  svg {
    font-size: 1.5rem;
    margin-left: 0.8rem;
  }
`;
const Center = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  bottom: 42%;
  border-radius: 10px;
  background: linear-gradient(180deg, #4c80f1 0%, #0051d9 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2rem;
    color: #ffffff;
  }
`;
const TextBox = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

const Right = styled.div`
  svg {
    font-size: 1.5rem;
  }
`;
export default BottomTab;
