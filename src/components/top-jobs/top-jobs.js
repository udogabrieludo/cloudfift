import React from 'react';
import logos from '../../assets/images/Logos.png'
import {Link} from 'react-router-dom'
import {Colors} from '../../assets/theme'
import { FiArrowRight } from "react-icons/fi";
import { ClipPath, Container, Row, Inner, Column, Text } from './styles/tob-jobs';

const TopJobs = () => {
  return (
    <Container>
        <ClipPath />
        <Row>
          <Inner>
          <Column>
          <h1>Over  1000+  jobs from top companies in our network</h1>
           <Text>Every day we index millions of jobs directly from employer websites. We’re committed to accurate, high-quality jobs so you won’t find old, duplicated, or spammy listings here.</Text>
           <Text>
           Organize and automate your job search while at home or on the go. We’ll deliver new, relevant jobs of interest straight to your inbox.
           </Text>
            <Link to='/'>Learn more <FiArrowRight style={{paddingLeft:'.3rem'}}/>  </Link>  
          </Column>
          <Column>
                <img src={logos} width='100%' />
          </Column>
          </Inner>
       </Row>
    </Container>

  );
};

export default TopJobs;
