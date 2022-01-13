import { Link } from "react-router-dom";
import styled from "styled-components";
import { IconHover, ButtonHover } from "../../globalStyles/globalStyles";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 0%;
`;

export const NavLogo = styled(IconHover)`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 30px !important;
  margin-left: 0 !important;
`;

export const ImgLogo = styled.img`
  width: 40px;
  margin-right: 12px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
    z-index: 20;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 0 48px;
  list-style: none;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 95%;
    margin: 1.5rem 1rem;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    border: 1px solid #D8dcde;
    border-radius: 0.5rem;
    background-color: white;
    gap: 24px 0;
    z-index: 10;
  }
`;

export const NavLinks = styled(IconHover)`
  font-size: 18px;
  margin-left: ${(props) => (props.stylelink ? "24px" : 0)};
  &:hover {
    border-bottom: 2px solid #6415ff;
  }

  @media screen and (max-width: 960px) {
    margin-left: 0;
    font-size: 20px;
  }
`;

export const NavLinkButton = styled(ButtonHover)`
  padding: 12px 40px;
  font-weight: 600;
  letter-spacing: 0.025rem;
  transition-duration: 300ms;
  margin-left: ${(props) => (props.stylebutton ? "-24px" : 0)};

  @media screen and (max-width: 960px) {
    margin-left: 0;
    font-size: 20px;
  }
`;
