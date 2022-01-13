import styled from "styled-components";

export const Testimonial = styled.div`
  position: relative;
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 0.025rem;
  text-align: center;
`;
export const TestimonialList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px 0;
  }
`;
export const TestimonialItem = styled.div`
  margin-top: 4rem;
`;
export const Profile = styled.div`
  max-width: 350px;
  padding: 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;
export const Quote = styled.blockquote`
  margin-top: 20px;
  color: #718096;
  font-weight: 500;
  line-height: 2;
  font-size: 18px;
`;
export const AuthorName = styled.p`
  margin-top: 20px;
  color: #1a202c;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.025rem;
  text-transform: uppercase;
`;
