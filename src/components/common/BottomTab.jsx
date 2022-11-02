import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { MdDirectionsBus } from "react-icons/md";
import { Link } from "react-router-dom";

function BottomTab() {
  return (
    <Block>
      <Link to='/search'>
        <LeftBox>
          <AiOutlineSearch />
          <TextBox>최근 검색</TextBox>
        </LeftBox>
      </Link>
      <Link to='/home'>
        <Center>
          <MdDirectionsBus />
        </Center>
      </Link>
      <Link to='/settings'>
        <RightBox>
          <IoMdSettings />
          <TextBox>설정</TextBox>
        </RightBox>
      </Link>
    </Block>
  );
}

const Block = styled.div`
  position: fixed;
  width: 100%;
  height: 7%;
  background-color: #ffffff;
  z-index: 5;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding: 0.8rem 3rem;
  justify-content: space-around;
  bottom: 0%;
  color: #8c8d96;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
`;

const LeftBox = styled.div`
  svg {
    font-size: 1.5rem;
    margin-left: 0.8rem;
  }
`;

const Center = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  bottom: 50%;
  left: 44%;
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

const RightBox = styled.div`
  svg {
    font-size: 1.5rem;
  }
`;

const TextBox = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

export default BottomTab;
