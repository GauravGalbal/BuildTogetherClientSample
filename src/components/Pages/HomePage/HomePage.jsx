import React from 'react';
import { styled } from '@mui/material/styles';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import MapImage from '../../assests/map.png';
import LogoImage from '../../assests/logo.png';
import Image1Image from '../../assests/Desktop1_image_1.png';
import Image2Image from '../../assests/Desktop1_image_2.png';
import Image3Image from '../../assests/Desktop1_image_3.png';
import Image4Image from '../../assests/Desktop1_image_4.png';
import Image5Image from '../../assests/Desktop1_image_5.png';
import Image6Image from '../../assests/Desktop1_image_6.png';
import AboutUsImage from '../../assests/AboutUs.png';

import Footer from './Footer';

const Desktop11 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `5043px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Map1 = styled('img')({
  height: `629.07px`,
  width: `1570px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Navigation = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `20px`,
  boxSizing: `border-box`,
  width: `1570px`,
  height: `76px`,
  left: `0px`,
  top: `0px`,
});

const LogoWithCompanyName = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `121px`,
  height: `32px`,
  margin: `0px`,
});

const BuildTogetherSpan1 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(19, 65, 236, 1)`,
  fontStyle: `normal`,
  fontFamily: `Syne`,
  fontWeight: `700`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `capitalize`,
});

const BuildTogetherSpan2 = styled('span')({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Risque`,
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `capitalize`,
});

const BuildTogether = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: 'unset',
  fontWeight: `400`,
  fontSize: `30px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `capitalize`,
  position: `absolute`,
  left: `32px`,
  top: `-6px`,
});

const AsdfTransformed1 = styled('img')({
  height: `33px`,
  width: `35px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `-5px`,
  top: `-1px`,
});

const Navigation1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 268px`,
});

const Product = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `46px`,
  height: `21px`,
  margin: `0px`,
});

const Home = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `21px`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Solutions = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `73px`,
  height: `21px`,
  margin: `0px 0px 0px 40px`,
});

const AboutUs = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `21px`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Resources = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `93px`,
  height: `21px`,
  margin: `0px 0px 0px 40px`,
});

const Community = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `21px`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Company = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `102px`,
  height: `21px`,
  margin: `0px 0px 0px 40px`,
});

const Testimonials = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `21px`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Company1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `89px`,
  height: `21px`,
  margin: `0px 0px 0px 40px`,
});

const ContactUs = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `21px`,
  textTransform: `none`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const ButtonRequestDemo = styled('div')({
  backgroundColor: `rgba(19, 65, 236, 1)`,
  borderRadius: `6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `12px 28px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 268px`,
});

const LogIn = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `500`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `21px`,
  textTransform: `none`,
  margin: `0px`,
});

const Community1 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `64px 96px`,
  boxSizing: `border-box`,
  width: `1570px`,
  left: `0px`,
  top: `1129px`,
});

const CommunityText = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Community2 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(193, 184, 184, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `600`,
  fontSize: `110px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  opacity: `0.5`,
  margin: `0px`,
});

const Community3 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `700`,
  fontSize: `60px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `14px`,
  top: `55px`,
}));

const Image1 = styled('img')({
  height: `443px`,
  width: `672px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `91px`,
  top: `1407px`,
});

const Image2 = styled('img')({
  height: `435.71px`,
  width: `700px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `759px`,
  top: `1890px`,
});

const Image3 = styled('img')({
  height: `466.35px`,
  width: `700px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `91px`,
  top: `2398px`,
});

const Image4 = styled('img')({
  height: `443px`,
  width: `666px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `812px`,
  top: `1407px`,
});

const Image5 = styled('img')({
  height: `468.27px`,
  width: `620px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `91px`,
  top: `1890px`,
});

const Image6 = styled('img')({
  height: `470px`,
  width: `600px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `845px`,
  top: `2366px`,
});

const AboutUs1 = styled('img')({
  height: `609.43px`,
  width: `1570px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `0px`,
  top: `629px`,
});

const KnowMore = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(19, 65, 236, 1)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `12px 36px`,
  boxSizing: `border-box`,
  width: `216px`,
  height: `71px`,
  left: `74px`,
  top: `1058px`,
  overflow: `hidden`,
}));

const KnowMore1 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `500`,
  fontSize: `26px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  margin: `0px`,
});

const Testinomials = styled('div')({
  display: `flex`,
  isolation: `isolate`,
  position: `relative`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `651.76px`,
  top: `2700px`,
  left: `420px`,
  alignItems: `center`,
  boxSizing: `border-box`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
});

const Testimonials2 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(19, 65, 236, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `600`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `36px`,
  textTransform: `none`,
  margin: `0px`,
  fontSynthesis: `none`,
  fontFamily: `Rubik`,
  fontSize: `32px`,
  fontStyle: `normal`,
  fontWeight: `600`,
  letterSpacing: `0px`,
  lineHeight: `36px`,
  textAlign: `left`,
  textDecoration: `none`,
  textTransform: `none`,
  whiteSpace: `pre-wrap`,
}));

const TestinomialsAbout = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px 76px`,
  boxSizing: `border-box`,
  margin: `0px`,
  alignItems: `center`,
  boxSizing: `border-box`,
  flexDirection: `row`,
  justifyContent: `center`,
});

const Testimonials1 = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(229, 229, 229, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `600`,
  fontSize: `96px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  opacity: `0.5`,
  margin: `0px`,
  fontSynthesis: `none`,
  fontFamily: `Rubik`,
  fontSize: `96px`,
  fontStyle: `normal`,
  fontWeight: `600`,
  letterSpacing: `0px`,
  textAlign: `left`,
  textDecoration: `none`,
  textTransform: `none`,
  whiteSpace: `pre-wrap`,
});

const OurValuableTrustedCl = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Rubik`,
  fontWeight: `700`,
  fontSize: `48px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `81px`,
  textTransform: `none`,
  width: `723px`,
  position: `absolute`,
  left: `13px`,
  top: `33px`,
  fontSynthesis: `none`,
  fontFamily: `Rubik`,
  fontSize: `48px`,
  fontStyle: `normal`,
  fontWeight: `700`,
  letterSpacing: `0px`,
  lineHeight: `81px`,
  textAlign: `left`,
  textDecoration: `none`,
  textTransform: `none`,
  whiteSpace: `pre-wrap`,
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const HomePage = ((props) => {
  const images = [
    Image1Image,
    Image2Image,
    Image3Image
  ];
  return (
    <Desktop11 className={props.className}>
      <Map1 src={MapImage} loading="lazy" alt={'map 1'} />
      <Navigation>
        <LogoWithCompanyName>
          <BuildTogether>
            <BuildTogetherSpan1>{`Build`}</BuildTogetherSpan1>
            <BuildTogetherSpan2>{`Together`}</BuildTogetherSpan2>
          </BuildTogether>
          <AsdfTransformed1
            src={LogoImage}
            loading="lazy"
            alt={'asdf-transformed 1'}
          />
        </LogoWithCompanyName>
        <Navigation1>
          <Product>
            <Home>{`Home`}</Home>
          </Product>
          <Solutions>
            <AboutUs>{`About Us`}</AboutUs>
          </Solutions>
          <Resources>
            <Community>{`Community`}</Community>
          </Resources>
          <Company>
            <Testimonials>{`Testimonials`}</Testimonials>
          </Company>
          <Company1>
            <ContactUs>{`Contact Us`}</ContactUs>
          </Company1>
        </Navigation1>
        <ButtonRequestDemo>
          <LogIn>{`Login`}</LogIn>
        </ButtonRequestDemo>
      </Navigation>
      <Community1>
        <CommunityText>
          <Community2>{`Community`}</Community2>
          <Community3>{`Community`}</Community3>
        </CommunityText>
      </Community1>
      <Image1 src={Image1Image} loading="lazy" alt={'image 1'} />
      <Image2 src={Image2Image} loading="lazy" alt={'image 2'} />
      <Image3 src={Image3Image} loading="lazy" alt={'image 3'} />
      <Image4 src={Image4Image} loading="lazy" alt={'image 4'} />
      <Image5 src={Image5Image} loading="lazy" alt={'image 5'} />
      <Image6 src={Image6Image} loading="lazy" alt={'image 6'} />
      <AboutUs1 src={AboutUsImage} loading="lazy" alt={'AboutUs 1'} />
      <KnowMore>
        <KnowMore1>{`Know More`}</KnowMore1>
      </KnowMore>
      <Testinomials>
        <Testimonials2>{`Testimonials`}</Testimonials2>
        <TestinomialsAbout>
          <Testimonials1>{`Testimonials`}</Testimonials1>
          <OurValuableTrustedCl>
            {`Our Valuable & Trusted Clients`}
          </OurValuableTrustedCl>
        </TestinomialsAbout>
      </Testinomials>
      <Footer />
      <Carousel 
              responsive={responsive}
              swipeable={false}
              draggable={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              >
                  {
                      images.map(data => (
                        <img src="https://i.ibb.co/T8swRSZ/Carasoul.png" alt="Carasoul" border="0" />
                      ))
                  }
          </Carousel>
    </Desktop11>
  );
})

export default HomePage;