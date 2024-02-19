import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ProfileDetailContainer = styled.div`
  padding-left: 8px;
  width: calc(0% + 1320px);
  margin: 0px 108px;

  &.forFeedTabs {
    margin-top: 24px;
    @media (max-width: 576px) {
      padding-left: 16px;
      width: calc(0% + 427px);
      max-width: calc(0% + 550px);
      padding-right: 55px;
    }
  }

  &.forShop {
    @media (max-width: 576px) {
      padding-left: 9px;
      width: calc(0% + 380px);
      max-width: calc(0% + 550px);
      margin-top: 15px;
    }
  }
  &.forStyleBoards{
    @media (max-width: 576px) {
      padding-left: 4px;
      padding-right: 12px;
      width: calc(0% + 380px);
      max-width: calc(0% + 550px);
      margin-top: 15px;
    }
  }

  &.forMobile {
    @media (max-width: 576px) {
      width: calc(0% + 1198px);
    }
    padding: 0 !important;
  }
  @media (max-width: 576px) {
    width: (0% + 576px) !important;
    margin: 0px;
    padding-left: 15px;
  }
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px 0px 20px 0px;
  display: flex;
  overflow: hidden;
  @media (max-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-align: center;
    align-items: center;
  }
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

  @media (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`;

export const ProfileDescriptionDiv = styled.div`
  padding-top: 15px;
  padding-right: 15px;
  margin-left: 30px;
  width: 100%;
  &.mobileView {
    display: block;
    @media (max-width: 576px) {
      display: block;
    }
  }
`;

export const PTag = styled.p`
  font-size: 22px;
  font-weight: bold;
  line-height: 29px;
  color: #1a1a1a;
  margin-bottom: 10px;
  @media (max-width: 576px) {
    margin-bottom: 2px;
  }
`;

export const StyledLinkDiv = styled.div`
  margin-top: 15px;
  margin-bottom: 12px;
`;

export const StyledLink = styled(Link)`
  font-size: 15px;
  font-weight: 600;
  color: #34554a;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 12px;
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

export const NameAndLinkDiv = styled.div`
  &.description_for_mobile {
    display: none !important;
    @media (max-width: 576px) {
      margin: 10px 0px 12px !important;
      display: block !important;
    }
  }
`;

export const NameDiv = styled.div`
  padding-left: 20px;
`;
