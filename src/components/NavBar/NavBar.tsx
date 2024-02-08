import React, { useState } from "react";
import {
  AnchorTag,
  BarButtonWrapper,
  ButtonContainer,
  ImageWrapperDiv,
  LiWrapper,
  NavButtonWrapper,
  NavDiv,
  NavWrapperContainer,
  RootHeaderWrapper,
  SearchButtonWrapper,
  SignInButtonWrapper,
  UlWrapper,
} from "./NavBar.style";
import darkLogo from "../../../public/darkLogo.png";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
// import Button from "../button/Button";
import Image from "next/image";
  
const Navbar = () => {  

  return (
    <div>
      <NavDiv>
        <RootHeaderWrapper screen={true}>
          <ImageWrapperDiv>
            <Link href="/">
              <Image src={darkLogo} alt="darkLogo" />
            </Link>
          </ImageWrapperDiv>
          <NavWrapperContainer>
            <UlWrapper>
              <LiWrapper>
                <AnchorTag href="/inspiration/home">
                  Home
                </AnchorTag>
              </LiWrapper>
              <LiWrapper>
                <AnchorTag href="/inspiration/home">
                  Beauty
                </AnchorTag>
              </LiWrapper>
              <LiWrapper>
                <AnchorTag href="/inspiration/home">
                  Fashion
                </AnchorTag>
              </LiWrapper>
            </UlWrapper>
          </NavWrapperContainer>

          <NavButtonWrapper>
            <ButtonContainer>
              <SearchButtonWrapper>
                <BiSearch />
              </SearchButtonWrapper>
              <BarButtonWrapper>
                <FaBars />
              </BarButtonWrapper>
              <SignInButtonWrapper>
                {/* <Link href="/login"> */}
                  {/* <Button content={"Sign in"} /> */}
                {/* </Link> */}
              </SignInButtonWrapper>
            </ButtonContainer>
          </NavButtonWrapper>
        </RootHeaderWrapper>
      </NavDiv>
    </div>
  );
};

export default Navbar;
