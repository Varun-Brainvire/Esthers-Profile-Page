import React, { useState } from "react";
import {
  PTag,
  ProfileDescriptionDiv,
  ProfileDetailContainer,
  ProfilePhoto,
  ProfilePhotoDiv,
  ProfileWrapper,
  StyledLink,
  StyledLinkDiv,
} from "./ProfileContainer.styles";
import ProfileImage from "../../../public/rd9yfaxzx3x3rrym3ooy.jpg";
import Description from "../../../Description.json" 

type Props = {};

const ProfileContainer = (props: Props) => {

    const [showFullParagraph, setShowFullParagraph] = useState(false);

    const linesToDisplay =  showFullParagraph ? Description.paragraph : Description.paragraph.slice(0,2)
    console.log(linesToDisplay.length )
    console.log(Description)

    const showMoreFunction = () => {
        setShowFullParagraph(!showFullParagraph)
    }

  return (
    <div style={{ backgroundColor: "white" }}>
      <ProfileDetailContainer>
        <ProfileWrapper>
          <ProfilePhotoDiv>
            <ProfilePhoto src={ProfileImage} alt="profile photo" />
          </ProfilePhotoDiv>

          <ProfileDescriptionDiv>
            <PTag>oliver</PTag>
            <div>
              <StyledLinkDiv>
                <StyledLink href="https://www.instagram.com/rajandas">https://www.instagram.com/rajandas</StyledLink>
              </StyledLinkDiv>
            </div>
            <div>
                {linesToDisplay.map((lines,index) => {
                    return(
                        <p>{lines}</p>
                    )
                })}
                {Description.paragraph > linesToDisplay && (
                    <span style={{fontWeight:"600", cursor:"pointer"}} onClick={showMoreFunction}>
                        ...{showFullParagraph ? 'Read Less' : "Read More"}
                    </span>
                )}
            </div>
          </ProfileDescriptionDiv>
        </ProfileWrapper>
      </ProfileDetailContainer>
    </div>
  );
};

export default ProfileContainer;
