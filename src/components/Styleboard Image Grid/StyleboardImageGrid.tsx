import React from "react";
import { GridDiv } from "./StyleboardImageGrid.styles";
import { ProfileDetailContainer } from "../ProfileContainer/ProfileContainer.styles";

const StyleboardImageGrid = () => {
  return (
    <ProfileDetailContainer>
      <div
        style={{
          display: "flex",
          marginTop: "6px",
        }}
      >
        <div style={{ width: "fit-content",backgroundColor: "#f4f0ec", padding:"7px", borderRadius:"6px" }}>
          <GridDiv>
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain",borderRadius:"6px" }}
              src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg"
            />
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain",borderRadius:"6px" }}
              src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg"
            />
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain",borderRadius:"6px" }}
              src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg"
            />
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain",borderRadius:"6px" }}
              src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg"
            />
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain",borderRadius:"6px" }}
              src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg"
            />
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain",borderRadius:"6px" }}
              src="https://ean-images.booztcdn.com/outdoor-research/1300x1700/orh277573_cblack.jpg"
            />
          </GridDiv>
        </div>
      </div>
    </ProfileDetailContainer>
  );
};

export default StyleboardImageGrid;
