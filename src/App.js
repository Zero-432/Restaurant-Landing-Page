import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { default as GlobalStyle, Wrapper } from "./globalStyles/globalStyles";
import {
  Hero,
  MainFeature,
  TabsCard,
  Feature,
  MainFeature2,
  Testimonials,
  Footer,
} from "./components";
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import HeroImage from "./assets/images/hero-image-1.jpg";
import MainFeatureImage from "./assets/images/mainFeature-image-2.jpg";
import FeatureCardLogo1 from "./assets/images/shop-icon.svg";
import FeatureCardLogo2 from "./assets/images/chef-icon.svg";
import FeatureCardLogo3 from "./assets/images/celebration-icon.svg";
import MainFeature2Image from "./assets/images/mainFeature2-image-1.jpg";
import ChefImage1 from "./assets/images/chef-1.png";
import ChefImage2 from "./assets/images/chef-2.jpg";
import ChefImage3 from "./assets/images/chef-3.jpg";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Wrapper className="App">
        <AnimationRevealPage>
          <Hero
            title1="Delicious & Affordable"
            title2="Meals Near You."
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonName="Order Now"
            videoButtonName="Meet the chefs"
            imgHero={HeroImage}
          />
          <MainFeature
            imgFeature={MainFeatureImage}
            subHeading="Established Since 2014"
            headingText="We've been serving for"
            highlightedText="over 5 years."
            description1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            description2="Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            buttonName="Lastet Offers"
          />
          <TabsCard headerText="Checkout our" highlightedText="menu." />
          <Feature
            titleHeading="Amazing"
            highlightedText="Services."
            imgSrc1={FeatureCardLogo1}
            cardTitle1="300+ Locations"
            cardDesc1="Lorem ipsum donor amet siti ceali placeholder text"
            imgSrc2={FeatureCardLogo2}
            cardTitle2="Professional Chefs"
            cardDesc2="Lorem ipsum donor amet siti ceali placeholder text"
            imgSrc3={FeatureCardLogo3}
            cardTitle3="Birthday Catering"
            cardDesc3="Lorem ipsum donor amet siti ceali placeholder text"
            nameLink="Learn More"
          />
          <MainFeature2
            subHeading="A Reputed Brand"
            headingText="Why"
            highlightedText="Choose Us ?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            value1="14000+"
            key1="Orders"
            value2="10000+"
            key2="Customers"
            value3="1500+"
            key3="Chefs"
            buttonName="Order Now"
            imgFeature={MainFeature2Image}
          />
          <Testimonials
            headingText="Customers"
            highlightedText="Love Us."
            imgSrc1={ChefImage1}
            quote1="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
            author1="- Phạm Tuấn Hải"
            imgSrc2={ChefImage2}
            quote2="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
            author2="- Martin Yan"
            imgSrc3={ChefImage3}
            quote3="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
            author3="- Nguyễn Thị Diệu Thảo"
          />
          <Footer />
        </AnimationRevealPage>
      </Wrapper>
    </Router>
  );
}

export default App;
