import styled from "styled-components";

interface PropsTypes {
  lastImage?: boolean;
  brightness?: number;
}

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 7px;
  background-color: #f4f0ec;
  width: 100%;
  height: 200px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

export const GridItem = styled.div<PropsTypes>`
  border-radius: 5px;
  padding: 1em;
  background-image: url("https://res.cloudinary.com/esthers/image/upload/w_115,dpr_2.0,c_fill,e_sharpen:100/v1682323300/user_photos_dev/son4gbbjuvhtlfoicd2r.jpg");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(brightness);
  /* filter: brightness(${(lastImage) => (lastImage ? "0.7" : "")}); */
  /* filter: ${(lastImage) => (lastImage ? "" : "brightness(0.7)")}; */
  &.item-1,
  &.item-6,
  &.item-8 {
    grid-column: span 2;
  }
  &.item-7 {
    grid-row: span 2;
  }
  &.item-3 {
    grid-column: span 1;
  }
  &.item-9 {
    grid-column: span 2;
    grid-row: span 2;
  }
  &.item-10 {
    grid-row: span 2;
  }
  &.item-11,
  &.item-13 {
    grid-column: span 2;
  }
`;

export const UpperGridDiv = styled.div`
  display: grid;
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

export const NumberDiv = styled.div`
  color: white;
  position: absolute;
  top: 60%;
  left: 81%;
  transform: translate(-50%, -50%);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
`;

export const StyleBoardPTag = styled.p`
  font-size: ${(noOfProducts) => (noOfProducts ? "22px" : "14px")};
  font-weight: 600;
  padding-left: 12px;
  margin-top: 10px;
  color: #3a3a3a;
  overflow: hidden;
`;
export const NumberOfProducts = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding-left: 12px;
  margin-top: 6px;
  color: #3a3a3a;
  overflow: hidden;
`;
