import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const ProfileDetailContainer = styled.div`
  padding-left: 48px;
  padding-right: 48px;
  width: calc(0% + 1320px);
  margin: 0px 108px;
  /* height: 100%;
    width: 100%; */
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 40px 0pc;
  display: flex;
  overflow: hidden;
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
