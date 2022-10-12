import MainResponsive from '../main/MainResponsive';
import styled from 'styled-components';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Header = () => {
  return(
    <Block>
      <Inner>
        <MdOutlineArrowBackIosNew/>
      </Inner>
    </Block>
  )
};

const Block = styled.div`
height: 4rem;
`;

const Inner = styled(MainResponsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
