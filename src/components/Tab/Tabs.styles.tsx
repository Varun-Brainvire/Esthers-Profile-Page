import styled from "styled-components";

interface TabsType {
  isActive: boolean;
}

export const TabsDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  overflow: auto;
  border-top: 2px solid #eaf0f0;
  border-bottom: 2px solid #eaf0f0;
  .tabsForMobile {
    @media (max-width: 576px) {
      display: flex;
      flex-direction: row;
      overflow: auto;
      border-top: 2px solid #eaf0f0;
      border-bottom: 2px solid #eaf0f0;
    }
  }
`;

export const TabsUL = styled.ul`
  list-style-type: none;
  display: flex;

  @media (max-width: 576px) {
    margin: 0px;
    padding: 0px;
    color: inherit;
    position: relative;
    width: 100%;
    border-bottom: 2px solid rgb(234, 240, 240);
    border-top: 2px solid rgb(234, 240, 240);
    -webkit-box-pack: center;
  }
`;

export const TabsLI = styled.li<TabsType>`
  padding: 20px 40px 20px 35px;
  cursor: pointer;

  border-bottom: ${({ isActive }) =>
    isActive ? "3px solid rgb(58, 58, 58)" : ""};
  font-weight: ${({ isActive }) => (isActive ? "600" : "")};

  @media (max-width: 576px) {
    padding: 17px 27px 12px 21px;
  }
`;
