import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const contents = [
  {
    title: "서비스설정",
    content: ["자동 새로고침 간격", "지역설정"],
  },
  {
    title: "개인정보",
    content: "위치 정보 이용동의",
  },
  {
    title: "약관 및 항목",
    content: ["서비스 이용약관", "정보 제공처"],
  },
  {
    title: "고객지원",
    content: "도움말",
  },
];

function ConfigMenu() {
  return (
    <>
      <Helmet>
        <title>ConfigMenu</title>
      </Helmet>
      <ConfigMenuBox>
        <ConfigMenuList>
          {contents.map((content) => (
            <>
              <ConfigMenuTitle>{content.title}</ConfigMenuTitle>
              <ConfigMenuContent>{content.content}</ConfigMenuContent>
            </>
          ))}
        </ConfigMenuList>
      </ConfigMenuBox>
    </>
  );
}

const ConfigMenuBox = styled.ul``;
const ConfigMenuList = styled.div``;
const ConfigMenuTitle = styled.div`
  background-color: #e0e2e7;
`;

const ConfigMenuContent = styled.li`
  background-color: #ffffff;
`;
export default ConfigMenu;
