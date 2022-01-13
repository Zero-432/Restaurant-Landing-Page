import styled from "styled-components";
import { DotPatternStyle } from "../../../globalStyles/globalStyles";

export const FeatureMain = styled.div`
  position: relative;

  @media screen and (max-width: 415px) {
    .mainFeature2Responsive {
      flex-direction: column-reverse;
    }
  }
`;

export const FeatureContentWrapper = styled.div`
  max-width: none;
  margin: 0 4rem auto 0;

  @media screen and (max-width: 768px) {
    width: 45%;
  }

  @media screen and (max-width: 415px) {
    width: 100%;
    margin-right: 0;
  }
`;
export const FeatureContent = styled.div`
  padding: 2rem 0;
  text-align: left;

  .buttonStyle {
    display: inline-block;
    margin-top: 50px;

    @media screen and (max-width: 1024px) {
      margin-top: 40px;
    }
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
  font-weight: 900;
  margin-top: 1rem;
  line-height: 120%;

  @media screen and (max-width: 1024px) {
    font-size: 40px;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 415px) {
    margin-top: 1rem;
    font-size: 1.875rem;
  }
`;
export const Desc = styled.p`
  margin-top: 24px;
  line-height: 150%;
  font-size: 18px;
  color: #718096;

  @media screen and (max-width: 415px) {
    font-size: 1rem;
  }
`;
export const Statistics = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 0 48px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 415px) {
    flex-direction: column;
    gap: 10px 0;
  }
`;
export const Statistic = styled.div`
  display: inline-block;
  margin-top: 12px;
`;
export const Value = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: #243e63;
  letter-spacing: 0.025rem;
`;
export const Key = styled.div`
  color: #6415ff;
  font-weight: 500;
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
