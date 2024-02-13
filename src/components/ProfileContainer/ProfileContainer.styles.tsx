import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ProfileDetailContainer = styled.div`
  padding-left: 48px;
  padding-right: 48px;
  width: calc(0% + 1320px);
  margin: 0px 108px;

  &.forFeedTabs {
    @media (max-width: 576px) {
      width: calc(0% + 1198px);
    }
  }

  .forMobile {
    @media (max-width: 576px) {
      width: calc(0% + 1198px);
    }
    padding: 0 !important;
  }

  @media (max-width: 576px) {
    margin: 0px;
    padding-left: 15px;
  }

  .forShop {
    @media (max-width: 576px) {
      width: calc(0% + 1198px);
    }
  }
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px 0pc;
  display: flex;
  overflow: hidden;
  /* @media (max-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
  } */
`;

export const ProfilePhotoDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfilePhoto = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b6b6b;
  border-radius: 99px;
  height: 164px;
  width: 165px;
  position: relative;
  box-shadow: rgb(244, 240, 236) 0px 0px 0px 5px;
`;

export const ProfileDescriptionDiv = styled.div`
  padding-top: 15px;
  padding-right: 15px;
  margin-left: 30px;
  width: 100%;
  .description_for_mobile {
    display: none;
    @media (max-width: 576px) {
      display: block;
    }
  }
`;

export const PTag = styled.p`
  font-size: 32px;
  font-weight: bold;
  line-height: 29px;
  color: #1a1a1a;
`;

export const StyledLinkDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 12px;
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  color: #34554a;
  cursor: pointer;
  text-decoration: none;
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const UL = styled.ul`
  list-style-type: none;
  padding: 0;
`;
