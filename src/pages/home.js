import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import HeaderContainer from '../container/header-container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../features/slider-responsive';

import HowItWorks from '../container/how-it-works-container';
import TopJobs from '../components/top-jobs/top-jobs';
import GetStart from '../components/get-started';
import Footer from '../components/footer';
import CategoryList from '../components/category-list';
import JobCarousel from '../container/jobs-carousel';
import Testimonial from '../components/testimonial';




const Home = () => {
  return (
    <>
     <Header>    
      <Menu  />
      <HeaderContainer  />
      </Header>
    
      <JobCarousel />
      <HowItWorks  />
      <CategoryList />
      <TopJobs />
       <Testimonial />
       <GetStart />
       <Footer />
      
    </>
    
  )
};

export default Home;
