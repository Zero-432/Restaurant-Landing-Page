import styled, { css } from "styled-components";
import { DotPatternStyle } from "../../../globalStyles/globalStyles";

export const Feature = styled.div`
  position: relative;

  @media screen and (max-width: 415px) {
    .mainFeatureResponsive {
      flex-direction: column;
    }
  }
`;

export const FeatureImage = styled.div`
  position: relative;
  max-width: none;
  width: 50%;
  margin: auto 0;
  flex-shrink: 0;

  .dot-pattern {
    left: 50%;
    transform: translate(-50%, 40%);
    ${DotPatternStyle}
  }

  @media screen and (max-width: 415px) {
    width: 100%;
    margin-bottom: 3.5rem;
  }
`;

export const FeatureContentWrapper = styled.div`
  margin-left: 64px;

  @media screen and (max-width: 415px) {
    margin-left: 0;
  }
`;

export const FeatureContent = styled.div`
  padding: 32px 0;
  text-align: left;

  .mainFeature-button {
    display: inline-block;
    margin-top: 2rem;
  }

  @media screen and (max-width: 415px) {
    text-align: center;
  }
`;

export const SubHeading = styled.h5`
  font-weight: 700;
  color: #6415ff;
  font-size: inherit;
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 150%;
  font-weight: 900;
  margin-top: 1rem;

  @media screen and (max-width: 1024px) {
    font-size: 40px;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    line-height: 120%;
  }

  @media screen and (max-width: 415px) {
    font-size: 1.875rem;
  }
`;

export const Desc = styled.p`
  margin-top: 48px;
  font-size: 18px;
  color: #718096;
  line-height: 150%;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;
