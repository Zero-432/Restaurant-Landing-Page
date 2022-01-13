import {
  Container,
  HighlightedText,
  ButtonHover,
  ImageStyles,
} from "../../../globalStyles/globalStyles";
import {
  FeatureMain,
  FeatureContentWrapper,
  FeatureContent,
  SubHeading,
  Heading,
  Desc,
  Statistics,
  Statistic,
  Value,
  Key,
  FeatureImage,
} from "./MainFeature2.elements";

import { ReactComponent as DotPattern } from "../../../assets/images/dot-pattern.svg";

function MainFeature2({
  subHeading,
  headingText,
  highlightedText,
  description,
  value1,
  key1,
  value2,
  key2,
  value3,
  key3,
  buttonName,
  imgFeature,
}) {
  return (
    <FeatureMain>
      <Container className="mainFeature2Responsive">
        <FeatureContentWrapper>
          <FeatureContent>
            <SubHeading>{subHeading}</SubHeading>
            <Heading>
              {headingText}
              <HighlightedText left>{highlightedText}</HighlightedText>
            </Heading>
            <Desc>{description}</Desc>
            <Statistics>
              <Statistic>
                <Value>{value1}</Value>
                <Key>{key1}</Key>
              </Statistic>
              <Statistic>
                <Value>{value2}</Value>
                <Key>{key2}</Key>
              </Statistic>
              <Statistic>
                <Value>{value3}</Value>
                <Key>{key3}</Key>
              </Statistic>
            </Statistics>
            <ButtonHover className="buttonStyle" to="/">
              {buttonName}
            </ButtonHover>
          </FeatureContent>
        </FeatureContentWrapper>
        <FeatureImage>
          <ImageStyles src={imgFeature}></ImageStyles>
          <DotPattern className="dot-pattern" />
        </FeatureImage>
      </Container>
    </FeatureMain>
  );
}

export default MainFeature2;
