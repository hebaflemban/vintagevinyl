import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    // color: #242424;
    // background-color: white
    color: ___CSS_0___;
    background-color: ___CSS_1___
  }
`;
export const Header = styled.header`
  background: 
  linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),
  url("header.png");
  background-size: cover;
  height: 100vh;

`;

export const HeaderImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%,
  background-size: cover;
  height: 100vh;

`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-transform: uppercase;
  margin: 0;
  font-size: 6rem;
  white-space: nowrap;
  font-weight: 900

`;

export const Subtitle = styled.h3`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;


`;

export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ItemWrapper = styled.div`
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
    height: 150px;
  };
  h5 {
    text-align: center;
  };
  p{
    text-align: center;
    &.vinyl-price {
      color: ${props => props.theme.pink};
    }
  };

`;

