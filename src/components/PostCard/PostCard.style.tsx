import Image from "next/image";
import styled from "styled-components";

export const MainPostCardDiv = styled.div`
  height: 252px;
  max-width: 100%;
  object-fit: cover;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  width: 100%;
`;

export const ContentDiv = styled.div`
  position: absolute;
  max-width: 252px;
  height: 252px;
  right: 0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-direction: column;

  p {
    color: white;
    margin: 0;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const BagIcon = styled.div`
  position: absolute;
  top: 1%;
  right: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 32px;
  width: 32px;
`;

export const MainOverlayDiv = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  height: 252px;
  width: 252px;
  background: rgba(58, 58, 58, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-box-pack: justify;
  border-radius: 6px;
  padding: 15px;
`;

export const StyledImage = styled(Image)`
    height: 252;
    width: 100%;
    border-radius: 6px;
`