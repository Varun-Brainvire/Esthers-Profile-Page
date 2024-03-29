import React, { useState } from "react";
import {
  NameAndLinkDiv,
  NameDiv,
  PTag,
  ProfileDescriptionDiv,
  ProfileDetailContainer,
  ProfilePhoto,
  ProfilePhotoDiv,
  ProfileWrapper,
  Span,
  StyledLink,
  StyledLinkDiv,
  UL,
} from "./ProfileContainer.styles";
import ProfileImage from "../../../public/rd9yfaxzx3x3rrym3ooy.jpg";
import Description from "../../../Description.json";
import ReactReadMoreReadLess from "react-read-more-read-less";

const ProfileContainer = () => {
  const [showFullParagraph, setShowFullParagraph] = useState(false);
  const linesToDisplay = showFullParagraph
    ? Description.paragraph
    : Description.paragraph.slice(0, 1);
  const remainingLine = Description.paragraph.slice(1);

  const showMoreFunction = () => {
    setShowFullParagraph((current) => !current);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <ProfileDetailContainer>
        <ProfileWrapper>
          <ProfilePhotoDiv>
            <ProfilePhoto src={ProfileImage} alt="profile photo" />
          </ProfilePhotoDiv>
            <NameDiv className="">
            <PTag>oliver</PTag>
                <StyledLink href="https://www.instagram.com/rajandas">
                  https://www.instagram.com/rajandas
                </StyledLink>
            </NameDiv>

            <NameAndLinkDiv className="description_for_mobile">
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more"}
                readLessText={"Read less"}
              >
                {Description.paragraph[0]}
              </ReactReadMoreReadLess>
            </NameAndLinkDiv>
            {/* <div style={{fontSize:"16px"}}>
              {linesToDisplay.map((lines, index) => {
                return <p>{lines}</p>;
              })}
              {!showFullParagraph &&
                Description.paragraph.length >= linesToDisplay.length && (
                  <Span onClick={showMoreFunction}>...Read More</Span>
                )}
              {showFullParagraph && remainingLine.length > 0 && (
                <div style={{paddingTop:"10px"}}>
                  <UL>
                    {remainingLine.map((line,index) => {
                      return <li>{"◆ " + line}</li>;
                    })}
                  </UL>
                  <Span onClick={showMoreFunction}>Read Less</Span>
                </div>
              )}
            </div> */}
        </ProfileWrapper>
      </ProfileDetailContainer>
    </div>
  );
};

export default ProfileContainer;
