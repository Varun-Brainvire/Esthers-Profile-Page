import styled from "styled-components";

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr;
  grid-template-rows: ${(count:any) => count == 3 ? 2 : 2};
  /* grid-template-areas:
    ${(count:any) => count === 1 ? "img1" : count == 2 ? "img1 img2" : count == 3 ? "img1 img2 img3" : count == 4 ? "img1 img3 img2 img4":""}; */
    grid-template-areas:"img1";
  gap: 7px;
`;

export const UpperGridDiv = styled.div`
  display: flex;
  margin-top: 6px;
`;
export const MainGridDiv = styled.div`
  width: fit-content;
  background-color: #f4f0ec;
  padding: 7px;
  border-radius: 6px;
  height: 197px;
`;

export const GridImage = styled.img`
  width: auto;
  height: 197px;
  object-fit: contain;
  border-radius: 6px;
  &.nav1 {
    grid-area: img1;
  }
  &.nav2 {
    grid-area: img2;
  }
  &.nav3 {
    grid-area: img3;
  }
  &.nav4 {
    grid-area: img4;
  }
  &.nav5 {
    grid-area: img5;
  }
  &.nav6 {
    grid-area: img6;
  }
`;
