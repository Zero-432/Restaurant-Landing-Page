import styled from "styled-components";
import { DotPatternStyle } from "../../globalStyles/globalStyles";

export const HeroMain = styled.div`
  position: relative;

  @media screen and (max-width: 1024px) {
    .container {
      gap: 0 24px;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;
    }
  }
`;

export const HeroContent = styled.div`
  position: relative;
  width: 50%;
  text-align: left;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 700px;
  }
`;

export const HeroTitles = styled.h1`
  max-width: 750px;
  line-height: 150%;
  font-size: 48px;
  font-weight: 900;

  @media screen and (max-width: 768px) {
    text-align: center;
  }

  @media screen and (max-width: 415px) {
    font-size: 1.875rem;
  }
`;

export const HeroDesc = styled.p`
  margin: 2rem 0;
  color: #718096;
  font-size: 18px;
  max-width: 500px;

  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
  gap: 0 36px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 415px) {
    flex-direction: column;
    gap: 1rem 0;
    .button {
      padding: 1rem 2.5rem;
    }
  }
`;

export const HeroVideoButton = styled.button`
  display: flex;
  align-items: center;
  transition-duration: 300ms;
  color: #718096;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #6415ff;
  }
`;

export const PlayIcon = styled.span`
  .playIcon {
    width: 48px;
    height: 48px;
    stroke-width: 1;
  }
`;

export const PlayIconText = styled.span`
  margin-left: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const HeroImage = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .dot-pattern {
    transform: translate(45px, 45px);
    ${DotPatternStyle}
  }
`;
