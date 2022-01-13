import styled from "styled-components";

export const FooterContainer = styled.div`
  position: relative;
  padding: 6rem 2rem;
  background-color: #edf2f7;
  margin-left: -2rem;
  margin-right: -2rem;
  margin-bottom: -2rem;

  @media screen and (max-width: 1024px) {
    padding-top: 4rem;
  }

  @media screen and (max-width: 415px) {
    padding-bottom: 4rem;
  }
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;
export const FooterList = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -48px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    .subscribeResponsive {
      width: 100%;
    }

    .legal {
      width: 100%;
    }
  }

  @media screen and (max-width: 415px) {
    text-align: center;
  }
`;
export const FooterItem = styled.div`
  width: auto;
  padding-top: 3rem;

  @media screen and (max-width: 415px) {
  }
`;
export const ItemName = styled.h5`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
`;
export const ListItem = styled.ul`
  list-style: none;
  margin-top: 24px;
  font-size: 18px;
`;
export const Item = styled.li`
  margin-top: 12px;
`;
export const Link = styled.a`
  border-bottom-width: 2px;
  border-color: transparent;
  padding-bottom: 0.25rem;
  transition-duration: 300ms;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #4a5568;
  }
`;

export const Subscribe = styled.div`
  max-width: 24rem;
  text-align: left;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 1.5rem auto;
  }
`;
export const ItemDesc = styled.p`
  margin-top: 24px;
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.025rem;
`;
export const ItemForm = styled.form`
  margin-top: 24px;
  display: flex;
  max-width: none;

  @media screen and (max-width: 415px) {
    flex-direction: column;
    gap: 1rem 0;
  }

  @media screen and (max-width: 415px) {
    .buttonFooter {
      border-radius: 0.5rem;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 24px;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 2px solid #cbd5f4;
  transition-duration: 300ms;

  &:hover {
    border: 2px solid #6415ff;
  }

  @media screen and (max-width: 415px) {
    background-color: #e0e6f0;
    border-radius: 0.5rem;
  }
`;
export const Divider = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
  border-bottom: 2px solid #cbd5f4;
`;
export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 415px) {
    flex-direction: column;
    gap: 2rem 0;
  }
`;
export const InfoLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
export const LogoImage = styled.img`
  width: 2rem;
  max-width: 100%;
  height: auto;
`;
export const LogoName = styled.h5`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 0.05rem;
`;
export const InfoCopyright = styled.p`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
`;
export const InfoSocialLinks = styled.div`
  display: flex;
  gap: 0 1rem;
`;
export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: black;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;

  svg {
    color: white;
  }
`;
