import React from 'react';
import FancyCard from '../fancy-image-card';
import { Container, Row, Inner, Title, ImageBox, Content} from './styles/testimonial';
import client from '../../assets/images/client.svg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button, CustomArrow } from '../../container/carousel';
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Testimonial = () => {

  const  responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
 
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
  
        },
        mobile: { 
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 15
        }
      };

      const goLeft = ()=>{

        Carousel.next()
      }
      
      const goRight = ()=>{
        Carousel.previous()
    
      }
    
    
  return (
      <Container>
         <Row>
             <Title>
             <h1>
             What are our customers saying
             </h1>
             </Title>
             <Carousel responsive={responsive} 
                partialVisible={true}      
                 removeArrowOnDeviceType={["tablet", "mobile"]}
               ssr={true}>
        
           <Inner>
              
              <ImageBox>
              <FancyCard height='300px' size='300px' maxWidth='250px' width='300px' image={client} />
              </ImageBox>
              <Content>
              <CustomArrow>
              <Button  onClick={() =>{goLeft()}}><HiOutlineArrowNarrowLeft  size={35}/></Button>
              <Button onClick={() => {goRight()}}><HiOutlineArrowNarrowRight size={35} /></Button>
              </CustomArrow>
                 <p>The platform is really convenient to reach out to companies & I have managed to secure 2 interviews already! I can also track my application status instead of wondering whether the company has seen or shortlisted me</p>
                 <h4><strong>Irma Black</strong> </h4> 
                  <p>
                  HR Manager at MasterCard
                  </p> 

               </Content>
             </Inner>
          </Carousel> 
             
             
             
         </Row>
      </Container>
  );
};

export default Testimonial;

