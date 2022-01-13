import styled from "styled-components";

export const FeatureMain = styled.div`
  position: relative;
`;

export const TitleHeading = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  text-align: center;
  letter-spacing: 0.025rem;
`;
export const TitleMain = styled.div`
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto 0;

  @media screen and (max-width: 415px) {
    flex-direction: column;
  }
`;
export const TitleColumn = styled.div`
  max-width: 320px;
  width: calc(100% / 3);

  @media screen and (max-width: 415px) {
    width: 100%;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 2rem 1rem;
  transition-duration: 300ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export const CardLogo = styled.span`
  border-radius: 50%;
  background-color: #f7fafc;
  padding: 10px;
`;
export const ImageLogo = styled.img`
  width: 80px;
  height: 80px;
`;
export const CardTitle = styled.span`
  margin-top: 1rem;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
`;
export const CardDesc = styled.p`
  margin-top: 1rem;
  font-size: 16px;
  color: #718096;
`;

export const CardLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #6415ff;
  padding-top: 20px;
  margin-top: auto;
  line-height: 1;
  transition-duration: 300ms;
  text-decoration: none;

  &:hover {
    color: #300487;
  }
`;

export const NameLink = styled.span``;
