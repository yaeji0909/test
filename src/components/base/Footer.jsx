import MainResponsive from '../main/MainResponsive';
import styled from 'styled-components';
import { IoMdSearch } from 'react-icons/io';

const Footer = () => {
  return(
    <Block>
      <Inner>
        <IoMdSearch/>
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

export default Footer;
