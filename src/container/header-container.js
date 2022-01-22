import React from 'react';
import { Row, InnerRow, Column, H1, Text, Span,Image, ImgBox,InnerColumn, LineBox,Brands,BrandLogo } from '../components/header/styles/header';
import heroImage from '../assets/images/hero-image.svg'
import paystack from '../assets/images/paystack.svg'
import google from '../assets/images/google.svg'
import kpmg from '../assets/images/kpmg.svg'
import Search from '../components/search';
import FancyCard from '../components/fancy-image-card';

const HeaderContainer = () => {
  return (
    <Row>
      <InnerRow>
        <Column>
        <H1>
         Find a <Span>job</Span> easily
        </H1>
        <Text>
        With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.
        </Text>

              <Search  />
            <Text>
                <strong>Trusted by:</strong>
            </Text>
            <Brands>
              <BrandLogo src={paystack} alt='paystack' />
              <BrandLogo src={google} alt='google' />
              <BrandLogo src={kpmg} alt='kpmg' />
            </Brands>
        </Column>

        <Column>
           <FancyCard image={heroImage} />
        </Column>
    </InnerRow>
  </Row>

  );
};

export default HeaderContainer;
