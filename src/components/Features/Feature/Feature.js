import {
  FeatureMain,
  TitleHeading,
  TitleMain,
  TitleColumn,
  Card,
  CardLogo,
  ImageLogo,
  CardTitle,
  CardDesc,
  CardLink,
  NameLink,
} from "./Feature.elements";
import {
  HighlightedText,
  ContainerFluid,
} from "../../../globalStyles/globalStyles";
import { BsArrowRight } from "react-icons/bs";

function Feature({
  titleHeading,
  highlightedText,
  imgSrc1,
  cardTitle1,
  cardDesc1,
  imgSrc2,
  cardTitle2,
  cardDesc2,
  imgSrc3,
  cardTitle3,
  cardDesc3,
  nameLink,
}) {
  return (
    <FeatureMain>
      <ContainerFluid>
        <TitleHeading>
          {titleHeading}
          <HighlightedText left>{highlightedText}</HighlightedText>
        </TitleHeading>
        <TitleMain>
          <TitleColumn>
            <Card>
              <CardLogo>
                <ImageLogo src={imgSrc1}></ImageLogo>
              </CardLogo>
              <CardTitle>{cardTitle1}</CardTitle>
              <CardDesc>{cardDesc1}</CardDesc>
              <CardLink href="https://google.com" target="_blank">
                <NameLink>{nameLink}</NameLink>
                <BsArrowRight />
              </CardLink>
            </Card>
          </TitleColumn>
          <TitleColumn>
            <Card>
              <CardLogo>
                <ImageLogo src={imgSrc2}></ImageLogo>
              </CardLogo>
              <CardTitle>{cardTitle2}</CardTitle>
              <CardDesc>{cardDesc2}</CardDesc>
              <CardLink href="https://facebook.com" target="_blank">
                <NameLink>{nameLink}</NameLink>
                <BsArrowRight />
              </CardLink>
            </Card>
          </TitleColumn>
          <TitleColumn>
            <Card>
              <CardLogo>
                <ImageLogo src={imgSrc3}></ImageLogo>
              </CardLogo>
              <CardTitle>{cardTitle3}</CardTitle>
              <CardDesc>{cardDesc3}</CardDesc>
              <CardLink href="https://youtube.com" target="_blank">
                <NameLink>{nameLink}</NameLink>
                <BsArrowRight />
              </CardLink>
            </Card>
          </TitleColumn>
        </TitleMain>
      </ContainerFluid>
    </FeatureMain>
  );
}

export default Feature;
