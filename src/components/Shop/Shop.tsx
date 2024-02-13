import React from "react";
import { CoverPhotoDiv } from "../Profile Page/ProfilePage.styles";
import ProfileContainer from "../ProfileContainer/ProfileContainer";
import Tabs from "../Tab/Tabs";
import PostCard from "../PostCard/PostCard";
import { ProfileDetailContainer } from "../ProfileContainer/ProfileContainer.styles";
import { P, SelectImageDiv, SelectSpan, StyledSelect } from "./Shop.styles";
import Image from "next/image";
import HomeImage from "../../../public/home image.webp"
import Beauty from "../../../public/beauty.webp"
import Fashion from "../../../public/fashion.webp"
import ProductCard from "../Product Card/ProductCard";

const Shop = () => {
  const data:any = [
    {
      value: 1,
      text: "Home",
      icon: (
        <Image
        src={HomeImage}
        alt="Home Image"
        height={30}
        width={30}
      />
      ),
    },
    {
      value: 2,
      text: "Beauty",
      icon: (
        <Image
        src={Beauty}
        alt="Home Image"
        height={30}
        width={30}
      />
      ),
    },
    {
      value: 3,
      text: "Fashion",
      icon: (
        <Image
        src={Fashion}
        alt="Home Image"
        height={30}
        width={30}
      />
      ),
    },
  ];

  const customSelectStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      outline: "#eeeeee solid 1px",
      "&:hover": {
        border: "1px solid #313131",
      },
      "&:active": {
        border: "1px solid #313131",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#e0e0e0" : "white",
      color: state.isSelected ? "white" : "black",
      overflow: "hidden",
      display: "inline-block",
      family: "Strawford,Lexend Deca, Inter, sans-serif",
      FontFace: "9px",
      "&:hover": {
        backgroundColor: "#e0e0e0;",
        color: "black",
      },
    }),
  };

  return (
    <div>
      <CoverPhotoDiv />
      <ProfileContainer />
      <Tabs />
      <ProfileDetailContainer className="forShop">
        <StyledSelect
          options={data}
          getOptionLabel={(e: any) => (
            <SelectImageDiv>
              {e.icon}
              <SelectSpan>{e.text}</SelectSpan>
            </SelectImageDiv>
          )}
          styles={customSelectStyles}
        />
      <P>Commissionable links </P>
      </ProfileDetailContainer>
      <ProductCard />
    </div>
  );
};

export default Shop;
