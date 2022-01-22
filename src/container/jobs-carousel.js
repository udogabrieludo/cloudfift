import React from 'react';
import Jobs from '../components/jobs';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../features/slider-responsive';
import { Container, Row } from './carousel';
import CarouselCard from '../components/carousel-card';
import { joblist } from '../features/joblist';



const JobCarousel = () => {

    
  return (
    <Container >
      <Row>
      <h2>Recommended Jobs</h2>
      
      <Carousel responsive={responsive} 
       partialVisible={true}
             
        removeArrowOnDeviceType={["tablet", "mobile"]}

        ssr={true}>
         {joblist.map((item, i)=>(
           <CarouselCard key={i} item={item} />
         ))}
       
      </Carousel> 
      </Row>
    </Container>
      
   
    
  )
};

export default JobCarousel;
