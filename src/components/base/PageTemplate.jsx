import styled from 'styled-components';
import Header from './Header';
import FloatingHeader from './FloatingHeader';

const PageTemplateBlock = styled.div``;


const PageTemplate = ({
  hideHeader,
  style,
  className,
  children,
}) => {
  return (
    <PageTemplateBlock style={style} className={className}>
      {!hideHeader && (
        <>
          <Header />
          <FloatingHeader />
        </>
      )}
      {children}
    </PageTemplateBlock>
  );
};

export default PageTemplate;