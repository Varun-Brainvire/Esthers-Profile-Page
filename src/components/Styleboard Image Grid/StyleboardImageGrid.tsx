import React from "react";
import {
  GridDiv,
  GridImage,
  GridItem,
  MainGridDiv,
  UpperGridDiv,
} from "./StyleboardImageGrid.styles";
import { ProfileDetailContainer } from "../ProfileContainer/ProfileContainer.styles";
import ImagesData from "../../../ImagesData.json";

const StyleboardImageGrid = () => {
  return (
    <ProfileDetailContainer>
      <div style={{ display: "flex" }}>
        {ImagesData.records.map((items) => {
          return( 
          <div>
            
          </div>
          );
        })}
        <GridDiv>
          <GridItem className="item-9"></GridItem>
          <GridItem className="item-10"></GridItem>
        </GridDiv>
        <GridDiv>
          <GridItem className="item-6"></GridItem>
          <GridItem className="item-7"></GridItem>
          <GridItem className="item-8"></GridItem>
        </GridDiv>
        <GridDiv>
          <GridItem className="item-11"></GridItem>
          <GridItem className="item-12"></GridItem>
          <GridItem className="item-13"></GridItem>
          <GridItem className="item-14"></GridItem>
        </GridDiv>
        <GridDiv>
          <GridItem className="item-1"></GridItem>
          <GridItem className="item-2"></GridItem>
          <GridItem className="item-3"></GridItem>
          <GridItem className="item-4"></GridItem>
          <GridItem className="item-5"></GridItem>
        </GridDiv>
        <GridDiv>
          <GridItem className="item-15"></GridItem>
          <GridItem className="item-16"></GridItem>
          <GridItem className="item-17"></GridItem>
          <GridItem className="item-18"></GridItem>
          <GridItem className="item-19"></GridItem>
          <GridItem className="item-20"></GridItem>
        </GridDiv>
      </div>
    </ProfileDetailContainer>
  );
};

export default StyleboardImageGrid;
