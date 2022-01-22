import React from 'react';
import { Container, Row, Column,InnerColumn, Link, LinkBox,SocialLinks, IconBox, Logo,Text, Inner, CopyRight, InnerRow } from './styles/footer';
import {FiFacebook, FiLinkedin,FiTwitter,FiInstagram} from 'react-icons/fi'
import {Colors} from '../../assets/theme'
import logo from '../../assets/images/logo2.svg'

const Footer = () => {
  return (
      <Container>
          <Row> 
              <InnerRow>
              <Column>
                 <Logo src={logo} alt="logo" />
                 <Text>
                 Getajobng provides a full online service for anyone looking for a new job. We're not a recruitment agency, we're a job site.
                 </Text>
              </Column>
              <Column>
                <Inner>
                <InnerColumn>
                 <h3>Information</h3>
                 <LinkBox>
                    <Link to='/'>
                        About Us
                    </Link>
                    <Link to='/'>
                        Contact Us
                    </Link>
                    <Link to='/'>
                        Terms & Conditions
                    </Link>
                 </LinkBox>
              </InnerColumn>
              <InnerColumn>
              <h3>Job Seekers</h3>
              <LinkBox>
              <Link to='/'>
                       Creat Account
                    </Link>
                    <Link to='/'>
                        Job List
                    </Link>
                    <Link to='/'>
                       FAQ
                    </Link>
                 </LinkBox>
                 
              </InnerColumn>
              <InnerColumn>
              <h3>Employers</h3>
              <LinkBox>
                    <Link to='/'>
                       Creat Account
                    </Link>
                    <Link to='/'>
                        Post a Job
                    </Link>
                    <Link to='/'>
                       FAQ
                    </Link>
                 </LinkBox>
                 
              </InnerColumn>
              <InnerColumn>
              <h3>Social Media</h3>
              <SocialLinks>
                  <Link to='/'>
                    <IconBox>     
                        <FiFacebook color={Colors.primary} />      
                    </IconBox>
                    </Link>
                    <Link to='/'>
                    <IconBox>     
                        <FiInstagram color={Colors.primary} />      
                    </IconBox>
                    </Link>
                    <Link to='/'>
                    <IconBox>     
                        <FiTwitter color={Colors.primary} />      
                    </IconBox>
                    </Link>
                    <Link to='/'>
                    <IconBox>     
                        <FiLinkedin color={Colors.primary} />      
                    </IconBox>
                    </Link>
                 </SocialLinks>
                 
              </InnerColumn>
                </Inner>
              </Column>
              </InnerRow>
              <InnerRow>
               <CopyRight>
                   <Text>© Copyright Get-A-Job RMS 2019, All right reserved</Text>
               </CopyRight>
           </InnerRow>
          </Row>
           
      </Container>
  );
};

export default Footer;
