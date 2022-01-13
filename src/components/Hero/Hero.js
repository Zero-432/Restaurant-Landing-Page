import { default as Navbar } from "../Headers/Navbar";
import {
  HeroMain,
  HeroContent,
  HeroTitles,
  HeroDesc,
  HeroActions,
  HeroVideoButton,
  PlayIcon,
  PlayIconText,
  HeroImage,
  ImageContainer,
} from "./Hero.elements";
import { Container, ImageStyles, HighlightedText, ButtonHover } from "../../globalStyles/globalStyles";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { ReactComponent as DotPattern } from "../../assets/images/dot-pattern.svg";

function Hero({ title1, title2, desc, buttonName, videoButtonName, imgHero }) {
  return (
    <>
      <Navbar logoName="Zero" />
      <HeroMain className="hero">
        <Container className="container">
          <HeroContent>
            <HeroTitles className="titles">
              {title1}
              <HighlightedText>{title2}</HighlightedText>
            </HeroTitles>
            <HeroDesc className="description">{desc}</HeroDesc>
            <HeroActions className="actions">
              <ButtonHover bigsize="true" to="/" className="button">
                {buttonName}
              </ButtonHover>
              <HeroVideoButton>
                <PlayIcon className="play-button">
                  <AiOutlinePlayCircle className="playIcon" />
                </PlayIcon>
                <PlayIconText>{videoButtonName}</PlayIconText>
              </HeroVideoButton>
            </HeroActions>
          </HeroContent>
          <HeroImage className="hero-image">
            <ImageContainer className="image-container">
              <ImageStyles src={imgHero} className="image-style" />
              <DotPattern className="dot-pattern" />
            </ImageContainer>
          </HeroImage>
        </Container>
      </HeroMain>
    </>
  );
}

export default Hero;
