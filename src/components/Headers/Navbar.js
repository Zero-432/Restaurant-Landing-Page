import { useState } from "react";
import {
  Header,
  Nav,
  NavLogo,
  ImgLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavLinkButton,
  DotPatterns
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import LogoIcon from "../../assets/images/icon/logo.svg";

function Navbar({ logoName }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Header className="container">
        <Nav className="navbar">
          <NavLogo to="/">
            <ImgLogo src={LogoIcon} />
            {logoName}
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavLinks to="/">About</NavLinks>
            <NavLinks to="/blog">Blog</NavLinks>
            <NavLinks to="/pricing">Pricing</NavLinks>
            <NavLinks to="/contact-us">Contact Us</NavLinks>
            <NavLinks stylelink="true" to="/login">
              Login
            </NavLinks>
            <NavLinkButton stylebutton="true" to="/sign-up">
              Sign Up
            </NavLinkButton>
          </NavMenu>
        </Nav>
      </Header>
    </>
  );
}

export default Navbar;
