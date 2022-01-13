import {
  ContainerFluid,
  HighlightedText,
} from "../../globalStyles/globalStyles";
import {
  Testimonial,
  Heading,
  TestimonialList,
  TestimonialItem,
  Profile,
  ProfileImage,
  Quote,
  AuthorName,
} from "./Testimonials.elements";

function Testimonials({
  headingText,
  highlightedText,
  imgSrc1,
  quote1,
  author1,
  imgSrc2,
  quote2,
  author2,
  imgSrc3,
  quote3,
  author3,
}) {
  return (
    <Testimonial>
      <ContainerFluid>
        <Heading>
          {headingText}
          <HighlightedText left>{highlightedText}</HighlightedText>
        </Heading>
        <TestimonialList>
          <TestimonialItem>
            <Profile>
              <ProfileImage src={imgSrc1}></ProfileImage>
              <Quote>"{quote1}"</Quote>
              <AuthorName>{author1}</AuthorName>
            </Profile>
          </TestimonialItem>
          <TestimonialItem>
            <Profile>
              <ProfileImage src={imgSrc2}></ProfileImage>
              <Quote>"{quote2}"</Quote>
              <AuthorName>{author2}</AuthorName>
            </Profile>
          </TestimonialItem>
          <TestimonialItem>
            <Profile>
              <ProfileImage src={imgSrc3}></ProfileImage>
              <Quote>"{quote3}"</Quote>
              <AuthorName>{author3}</AuthorName>
            </Profile>
          </TestimonialItem>
        </TestimonialList>
      </ContainerFluid>
    </Testimonial>
  );
}

export default Testimonials;
