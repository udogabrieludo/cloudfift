import React from 'react';
import Jobs from '../components/jobs';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../features/slider-responsive';


const JobContainer = () => {

  
  return (
    <Jobs >
      <h2>Recommended Jobs</h2>
      <Carousel responsive={responsive} swipeable={false}
      partialVisible={true}
             
     removeArrowOnDeviceType={["tablet", "mobile"]}

        ssr={true}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    </Jobs>
    
  )
};

export default JobContainer;
