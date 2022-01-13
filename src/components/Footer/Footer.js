import { ButtonHover } from "../../globalStyles/globalStyles";
import {
  FooterContainer,
  FooterContent,
  FooterList,
  FooterItem,
  ItemName,
  ListItem,
  Item,
  Link,
  Subscribe,
  ItemDesc,
  ItemForm,
  Input,
  Divider,
  FooterInfo,
  InfoLogo,
  LogoImage,
  LogoName,
  InfoCopyright,
  InfoSocialLinks,
  SocialLink,
} from "./Footer.elements";
import LogoIcon from "../../assets/images/icon/logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ImTwitter } from "react-icons/im";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterList>
          <FooterItem>
            <ItemName>Main</ItemName>
            <ListItem>
              <Item>
                <Link>Blog</Link>
              </Item>
              <Item>
                <Link>FAQs</Link>
              </Item>
              <Item>
                <Link>Support</Link>
              </Item>
              <Item>
                <Link>About Us</Link>
              </Item>
            </ListItem>
          </FooterItem>
          <FooterItem>
            <ItemName>Product</ItemName>
            <ListItem>
              <Item>
                <Link>Log In</Link>
              </Item>
              <Item>
                <Link>Personal</Link>
              </Item>
              <Item>
                <Link>Business</Link>
              </Item>
              <Item>
                <Link>Team</Link>
              </Item>
            </ListItem>
          </FooterItem>
          <FooterItem>
            <ItemName>Press</ItemName>
            <ListItem>
              <Item>
                <Link>Logos</Link>
              </Item>
              <Item>
                <Link>Events</Link>
              </Item>
              <Item>
                <Link>Stories</Link>
              </Item>
              <Item>
                <Link>Office</Link>
              </Item>
            </ListItem>
          </FooterItem>
          <FooterItem className="legal">
            <ItemName>Legal</ItemName>
            <ListItem>
              <Item>
                <Link>GDPR</Link>
              </Item>
              <Item>
                <Link>Privacy Policy</Link>
              </Item>
              <Item>
                <Link>Terms of Service</Link>
              </Item>
              <Item>
                <Link>Disclaimer</Link>
              </Item>
            </ListItem>
          </FooterItem>
          <FooterItem className="subscribeResponsive">
            <Subscribe>
              <ItemName>Subscribe to our newsletter</ItemName>
              <ItemDesc>
                We deliver high quality blog posts written by professionals
                weekly. And we promise no spam.
              </ItemDesc>
              <ItemForm>
                <Input type="email" placeholder="Your Email Address" />
                <ButtonHover className="buttonFooter" halfradius="true" to="/">
                  Subscribe
                </ButtonHover>
              </ItemForm>
            </Subscribe>
          </FooterItem>
        </FooterList>
        <Divider></Divider>
        <FooterInfo>
          <InfoLogo>
            <LogoImage src={LogoIcon}></LogoImage>
            <LogoName>Treact Inc.</LogoName>
          </InfoLogo>
          <InfoCopyright>© 2022 Treact Inc. All Rights Reserved.</InfoCopyright>
          <InfoSocialLinks>
            <SocialLink href="https://facebook.com">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <IoLogoYoutube />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <ImTwitter />
            </SocialLink>
          </InfoSocialLinks>
        </FooterInfo>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
