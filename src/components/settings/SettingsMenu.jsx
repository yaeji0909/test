import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const contents = [
  {
    title: "서비스설정",
    content: ["자동 새로고침 간격", "지역설정"],
  },
  {
    title: "개인정보",
    content: ["위치 정보 이용동의"],
  },
  {
    title: "약관 및 항목",
    content: ["서비스 이용약관", "정보 제공처"],
  },
  {
    title: "고객지원",
    content: ["도움말"],
  },
];

function SettingsMenu() {
  return (
    <>
      <Helmet>
        <title>SettingsMenu</title>
      </Helmet>
      <SettingsMenuBox>
        <SettingsList>
          {contents.map((content) => (
            <>
              <SettingsMenuTitle>{content.title}</SettingsMenuTitle>
              <SettingMenuContent>
                {content.content[0]}
                <MdOutlineArrowForwardIos />
              </SettingMenuContent>
              {content.content[1] ? (
                <SettingMenuContent>
                  {content.content[1]}
                  <MdOutlineArrowForwardIos />
                </SettingMenuContent>
              ) : (
                ""
              )}
            </>
          ))}
        </SettingsList>
      </SettingsMenuBox>
    </>
  );
}

const SettingsMenuBox = styled.ul``;
const SettingsList = styled.div``;
const SettingsMenuTitle = styled.div`
  background-color: #e0e2e7;
  padding: 0.2rem 0.8rem;
  color: #3f4150;
`;

const SettingMenuContent = styled.li`
  background-color: #ffffff;
  padding: 1.2rem;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #e0e2e7;
  svg {
    color: #8c8d96;
  }
`;
export default SettingsMenu;
