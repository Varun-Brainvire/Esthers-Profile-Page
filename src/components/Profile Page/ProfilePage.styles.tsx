import styled from "styled-components";

export const CoverPhotoDiv = styled.div`
  width: 100%;
  height: 255px;
  background-image: url("https://res.cloudinary.com/esthers/image/upload/v1703760610/user_photos_dev/profile/UuLw9TMeBaaKGV9idVGAVwDUgvj1/i1rhpbvgqwwgkuhj5cs1.jpg");
  background-repeat: no-repeat;
  position: relative;
  background-position: center center;
  background-size: cover;
  @media (max-width: 576px) {
    height: 160px;
    display: flex;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    z-index: 1;
  }
`;
