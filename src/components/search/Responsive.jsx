import styled from "styled-components";
import media from "@lib/styles/media";

const ResponsiveBlock = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  ${media.small} {
    width: 100%;
  }
`;

const Responsive = ({ children, className, style }) => {
  return (
    <ResponsiveBlock children={children} className={className} style={style} />
  );
};

export default Responsive;
