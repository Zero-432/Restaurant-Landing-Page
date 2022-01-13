import {
  Feature,
  FeatureImage,
  FeatureContentWrapper,
  FeatureContent,
  SubHeading,
  Heading,
  Desc,
} from "./MainFeature.elements";

import {
  Container,
  ImageStyles,
  ButtonHover,
  HighlightedText,
} from "../../../globalStyles/globalStyles";

import { ReactComponent as DotPattern } from "../../../assets/images/dot-pattern.svg";

function MainFeature({
  imgFeature,
  subHeading,
  headingText,
  highlightedText,
  description1,
  description2,
  buttonName,
}) {
  return (
    <Feature>
      <Container className="mainFeatureResponsive">
        <FeatureImage>
          <ImageStyles src={imgFeature}></ImageStyles>
          <DotPattern className="dot-pattern" />
        </FeatureImage>
        <FeatureContentWrapper>
          <FeatureContent>
            <SubHeading>{subHeading}</SubHeading>
            <Heading>
              {headingText}
              <HighlightedText>{highlightedText}</HighlightedText>
            </Heading>
            <Desc>
              {description1} <br /> <br /> {description2}
            </Desc>
            <ButtonHover className="mainFeature-button" to="/">{buttonName}</ButtonHover>
          </FeatureContent>
        </FeatureContentWrapper>
      </Container>
    </Feature>
  );
}

export default MainFeature;
