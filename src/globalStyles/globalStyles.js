import { Link } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }

`;

export const Wrapper = styled.div`
  position: relative;
  padding: 2rem;
  color: #243e63;
  overflow: hidden;
`;
export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const ContainerFluid = styled.div`
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
  padding-bottom: 80px;
`;

export const IconHover = styled(Link)`
  color: #464648;
  font-weight: 600;
  letter-spacing: 0.025rem;
  transition-duration: 300ms;
  padding-bottom: 0.25rem;
  border-bottom-width: 2px;
  border-color: transparent;
  text-decoration: none;
  &:hover {
    color: #6415ff;
  }
`;

export const ButtonHover = styled(Link)`
  padding: ${(props) => (props.bigsize ? "16px 48px" : "12px 40px")};
  background-color: #6415ff;
  color: white;
  border-radius: ${(props) =>
    props.halfradius ? "0 0.5rem 0.5rem 0" : "0.5rem"};
  text-decoration: none;
  transition-duration: 300ms;
  font-weight: 700;
  &:hover {
    background-color: #5011cc;
  }
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
      rgba(66, 153, 225, 0.5) 0px 0px 0px 3px;
  }
`;

export const ImageStyles = styled.img`
  border-radius: 2.5rem;
  max-width: 100%;
  height: auto;
`;

export const DotPatternStyle = css`
  width: 140px;
  height: 140px;
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0.25;
  color: #6415ff;
  fill: currentColor;
  pointer-events: none;
  z-index: -2;
`;

export const HighlightedText = styled.span`
  display: inline-block;
  padding: 0 1rem;
  background-color: #6415ff;
  color: #f7fafc;
  margin-left: ${(props) => (props.left ? "12px" : 0)};
  transform: skew(-12deg, 0);
`;

export default GlobalStyle;
