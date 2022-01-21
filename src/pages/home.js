import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import HeaderContainer from '../container/header-container';
import JobContainer from '../container/jobs-container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../features/slider-responsive';
import { joblist } from '../features/joblist';
import Card from '../components/card';
import HowItWorks from '../container/how-it-works-container';



const Home = () => {
  return (
    <>
     <Header>    
      <Menu  />
      <HeaderContainer  />
      </Header>
     <JobContainer />

      {/* <div>
      <Carousel responsive={responsive} swipeable={false}
      partialVisible={true}        
        removeArrowOnDeviceType={["tablet", "mobile"]}
        ssr={true}>
        {joblist.map((job, i)=>(
          <div key={i}>
            {job.companyName}
          </div>
        ))}
      </Carousel>
      </div> */}
     <HowItWorks  />
     
    
    </>
    
  )
};

export default Home;
