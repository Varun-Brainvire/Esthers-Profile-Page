import React from "react";
import { GridDiv, GridItem, NumberDiv, NumberOfProducts, StyleBoardPTag } from "./StyleboardImageGrid.styles";
import { ProfileDetailContainer } from "../ProfileContainer/ProfileContainer.styles";
import ImagesData from "../../../ImagesData.json";
import { StyledCol } from "../PostCard/PostCard.style";
import { Row } from "styled-bootstrap-grid";

const StyleboardImageGrid = () => {
  
  const ImageFunction = () => {
    const finalImage: any = ImagesData.records.map((item, i) => {
      let jsxToRender;

      if (item.image_count === 2) {
        jsxToRender = (
          <StyledCol lg={3} md={6} xl={3} xs={12} sm={6}>
            <GridDiv>
              <GridItem className="item-9"></GridItem>
              <GridItem className="item-10"></GridItem>
            </GridDiv>
            <StyleBoardPTag>Demo Name</StyleBoardPTag>
            <NumberOfProducts>2 Products</NumberOfProducts>
          </StyledCol>
        );
      } else if (item.image_count === 3) {
        jsxToRender = (
          <StyledCol lg={3} md={6} xl={3} xs={12} sm={6}>
            <GridDiv>
              <GridItem className="item-6"></GridItem>
              <GridItem className="item-7"></GridItem>
              <GridItem className="item-8"></GridItem>
            </GridDiv>
            <StyleBoardPTag>Demo Name</StyleBoardPTag>
            <NumberOfProducts>3 Products</NumberOfProducts>
          </StyledCol>
        );
      } else if (item.image_count === 4) {
        jsxToRender = (
          <StyledCol lg={3} md={6} xl={3} xs={12} sm={6}>
            <GridDiv>
              <GridItem className="item-11"></GridItem>
              <GridItem className="item-12"></GridItem>
              <GridItem className="item-13"></GridItem>
              <GridItem className="item-14"></GridItem>
            </GridDiv>
            <StyleBoardPTag>Demo Name</StyleBoardPTag>
            <NumberOfProducts>4 Products</NumberOfProducts>
          </StyledCol>
        );
      } else if (item.image_count === 5) {
        jsxToRender = (
          <StyledCol lg={3} md={6} xl={3} xs={12} sm={6}>
            <GridDiv>
              <GridItem className="item-1"></GridItem>
              <GridItem className="item-2"></GridItem>
              <GridItem className="item-3"></GridItem>
              <GridItem className="item-4"></GridItem>
              <GridItem className="item-5"></GridItem>
            </GridDiv>
            <StyleBoardPTag>Demo Name</StyleBoardPTag>
            <NumberOfProducts>5 Products</NumberOfProducts>
          </StyledCol>
        );
      } else if (item.image_count === 6) {
        jsxToRender = (
          <StyledCol lg={3} md={6} xl={3} xs={12} sm={6}>
            <GridDiv>
              <GridItem className="item-15"></GridItem>
              <GridItem className="item-16"></GridItem>
              <GridItem className="item-17"></GridItem>
              <GridItem className="item-18"></GridItem>
              <GridItem className="item-19"></GridItem>
              <GridItem className="item-20"></GridItem>
            </GridDiv>
            <StyleBoardPTag>Demo Name</StyleBoardPTag>
            <NumberOfProducts>6 Products</NumberOfProducts>
          </StyledCol>
        );
      } else if (item.image_count >= 6) {
        jsxToRender = (
          <StyledCol lg={3} md={6} xl={3} xs={12} sm={6}>
            <GridDiv>
              <GridItem className="item-15"></GridItem>
              <GridItem className="item-16"></GridItem>
              <GridItem className="item-17"></GridItem>
              <GridItem className="item-18"></GridItem>
              <GridItem className="item-19"></GridItem>
              <GridItem lastImage={true} brightness={0.7} className="item-20"></GridItem>
              <NumberDiv>{item.image_count - 6}+</NumberDiv>
            </GridDiv>
            <StyleBoardPTag>Demo Name</StyleBoardPTag>
            <NumberOfProducts>2 Products</NumberOfProducts>
          </StyledCol>
        );
      }
      return jsxToRender;
    });
    return finalImage;
  };

  return (
    <ProfileDetailContainer className="forStyleBoards">
      <Row>{ImageFunction()}</Row>
    </ProfileDetailContainer>
  );
};

export default StyleboardImageGrid;
