import React from "react";
import {
  GridDiv,
  GridImage,
  MainGridDiv,
  UpperGridDiv,
} from "./StyleboardImageGrid.styles";
import { ProfileDetailContainer } from "../ProfileContainer/ProfileContainer.styles";
import ImagesData from "../../../ImagesData.json"

const StyleboardImageGrid = () => {
  return (
    <ProfileDetailContainer>
      <UpperGridDiv>
    {ImagesData.records.map((item) => {
      console.log(item)
      return(
        <MainGridDiv>
          <GridDiv count={item.image_count}>
            {item.images.map((image) => {
              return(
                <GridImage className="img1" src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg" />    
              )
            })}
            {/* <GridImage className="nav1" src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg" />
            <GridImage className="nav2"src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg" />
            <GridImage className="nav3" src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg" />
            <GridImage className="nav4" src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg" />
            <GridImage className="nav5" src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg" />
            <GridImage className="nav6" src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg" /> */}
          </GridDiv>
        </MainGridDiv>
      )
    })}
      </UpperGridDiv>
    </ProfileDetailContainer>
  );
};

export default StyleboardImageGrid;
