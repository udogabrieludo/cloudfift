import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../features/slider-responsive';
import { Container, Row, CustomArrow, Button} from './carousel';
import CarouselCard from '../components/carousel-card';
import { joblist } from '../features/joblist';
import {HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight} from 'react-icons/hi'



const JobCarousel = () => {

  const goLeft = ()=>{

    Carousel.next()
  }
  
  const goRight = ()=>{
    Carousel.previous()

  }





  return (
    <Container >
      <Row>
      <h2>Recommended Jobs</h2>
      
      <Carousel responsive={responsive} 
       partialVisible={true}
       ref={(el) => (Carousel = el)} arrows={false}  
       infinite={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}

        ssr={true}>
         {joblist.map((item, i)=>(
           <CarouselCard key={i} item={item} />
         ))}
       
      </Carousel> 
       <CustomArrow >
       <Button  onClick={() =>{goLeft()}}><HiOutlineArrowNarrowLeft  size={35}/></Button>
       <Button onClick={() => {goRight()}}><HiOutlineArrowNarrowRight size={35} /></Button>
       </CustomArrow>
      </Row>
    </Container>
      
   
    
  )
};

export default JobCarousel;
