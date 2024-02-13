import styled from "styled-components";

export const ProductCardMainDiv = styled.div`
  border-radius: 6px;
  border: 1px solid #dddddd;
  width: 100%;
  height: 474px;
  position: relative;
  overflow: hidden;
`;

export const ProductImageWrapper = styled.div`
  height: 285px;
  width: 100%;
  padding: 10px;
  position: relative;
`;

export const ProductImage = styled.img`
  object-position: center;
  object-fit: contain;
  height: 100%;
  width: 100%;
  display: block;
`;

export const ProductDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const ProductName = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
`;

export const CompanyNameDiv = styled.div`
  margin-top: 10px;
`;

export const CompanyName = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  opacity: 0.7;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 100%;
`;

export const Price = styled.p`
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  white-space: initial;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: bold;
`;

export const ProductType = styled.p`
  background-color: #f4f0ec;
  font-size: 12px;
  font-weight: 600;
  color: rgb(58, 58, 58);
  opacity: 1;
  display: inline-block;
  border-radius: 5px;
  padding: 3px 8px;
  margin-top: 10px;
  width: fit-content;
  text-transform: capitalize;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const Buttons = styled.button`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  background-color: white;
  color: rgb(58, 58, 58);
  height: 32px;
  width: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 99px;
  border: none;
  transition: background 0.2s ease 0s;
  padding: 7px;
  opacity: 1;
  margin-left: 10px;
  cursor: pointer;
`;
