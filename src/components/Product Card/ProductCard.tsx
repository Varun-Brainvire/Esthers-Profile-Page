import React from "react";
import {
  Buttons,
  ButtonsDiv,
  CompanyName,
  CompanyNameDiv,
  Price,
  ProductCardMainDiv,
  ProductDetailDiv,
  ProductImage,
  ProductImageWrapper,
  ProductName,
  ProductType,
} from "./ProductCard.styles";
import { ProfileDetailContainer } from "../ProfileContainer/ProfileContainer.styles";
import { Container, Row, Col } from "styled-bootstrap-grid";
import ProductData from "../../../ProductData.json";

const ProductCard = () => {
  return (
    <ProfileDetailContainer style={{ marginTop: "15px" }}>
      {/* <Container> */}
        <Row>
          {ProductData.data.map((item) => {
            return (
              <Col
                lg={3}
                md={3}
                xl={3}
                xs={3}
                style={{ marginBottom: "16px" }}
              >
                <ProductCardMainDiv>
                  <ProductImageWrapper>
                    <ProductImage src={item.imageSrc} alt="product image" />
                  </ProductImageWrapper>

                  <ProductDetailDiv>
                    <ProductName>{item.productName}</ProductName>
                    <CompanyNameDiv>
                      <CompanyName>{item.companyName}</CompanyName>
                    </CompanyNameDiv>
                    <div style={{ marginTop: "10px" }}>
                      <Price>{item.price} SEK</Price>
                    </div>
                    <ProductType>{item.type}</ProductType>
                    <ButtonsDiv>
                      <Buttons>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <path
                            d="M192,224l-64.0074-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          ></path>
                        </svg>
                      </Buttons>
                      <Buttons>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <rect width="256" height="256" fill="none"></rect>
                          <path
                            d="M128,216S28,160,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92C228,160,128,216,128,216Z"
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="16"
                          ></path>
                        </svg>
                      </Buttons>
                    </ButtonsDiv>
                  </ProductDetailDiv>
                </ProductCardMainDiv>
              </Col>
            );
          })}
        </Row>
      {/* </Container> */}
    </ProfileDetailContainer>
  );
};

export default ProductCard;
