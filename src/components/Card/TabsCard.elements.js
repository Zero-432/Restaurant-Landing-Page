import styled from "styled-components";
import { motion } from "framer-motion";

export const Card = styled.div`
  position: relative;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 48px 0;
  }
`;
export const HeaderText = styled.h1`
  font-size: 48px;
  font-weight: 900;
  letter-spacing: 0.025rem;

  @media screen and (max-width: 1024px) {
    font-size: 40px;
  }

  @media screen and (max-width: 415px) {
    text-align: center;
  }
`;
export const HeaderTabsControl = styled.div`
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0 10px;
  background-color: #edf2f7;
  padding: 10px;
  line-height: 1;
  border-radius: 0.25rem;

  @media screen and (max-width: 1024px) {
    flex-wrap: nowrap;
  }

  @media screen and (max-width: 415px) {
    flex-wrap: wrap;
    gap: 0.5rem 0;
    text-align: center;
  }
`;
export const TabControl = styled.div`
  width: auto;
  font-size: 18px;
  margin-top: 0;
  padding: 12px 30px;
  color: #718096;
  transition-duration: 300ms;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.active ? "white" : "#465062")};
    background-color: ${(props) => (props.active ? "#6415fa" : "#ced9e8")};
  }

  background-color: ${(props) => props.active && "#6415fa"};
  color: ${(props) => props.active && "white"};

  @media screen and (max-width: 415px) {
    width: 50%;
  }
`;

export const TabData = styled(motion.div)`
  grid-template-columns: repeat(4, 1fr);
  margin-top: 72px;
  gap: 40px 48px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    gap: 32px 24px;
  }

  @media screen and (max-width: 415px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const CardData = styled.div``;
export const CardContainer = styled(motion.a)`
  text-decoration: none;
  color: inherit;
  display: block;
  background-color: #f7fafc;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;
export const CardImage = styled.div`
  background-image: ${(props) => (props.imgsrc ? `url(${props.imgsrc})` : "")};
  position: relative;
  height: 256px;
  background-position: center;
  background-size: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;
export const CardRating = styled.div`
  position: absolute;
  display: flex;
  background-color: #f7fafc;
  bottom: 0;
  left: 0;
  margin-left: 12px;
  margin-bottom: 12px;
  border-radius: 1rem;
  padding: 10px 20px;
  align-items: center;
`;
export const Rating = styled.div`
  margin-right: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;

  svg {
    width: 16px;
    height: 16px;
    color: #d8d806;
    margin-right: 5px;
  }
`;
export const Review = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #718096;
`;
export const CardHover = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CardContent = styled.div`
  padding: 1rem;
  color: #1a202c;
`;
export const CardTitle = styled.h5`
  font-weight: 700;
  font-size: 20px;
`;
export const CardName = styled.p`
  margin-top: 5px;
  color: #718096;
`;
export const CardPrice = styled.div`
  margin-top: 1rem;
  font-size: 24px;
  font-weight: 800;
`;
