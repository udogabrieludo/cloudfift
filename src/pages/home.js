import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import heroImage from '../assets/images/hero-image.svg'


const Home = () => {
  return (
    <Header>
          <Menu  />
        
          <div style={{display: 'flex', justifyContent:'space-between',alignItems:'center', padding:"0 8rem" }}>
                <div style={{width:'50%', flex:'1'}}>
                <h1>
                Find a job easily
                </h1>
                <p>
                With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.
                </p>
                </div>
                <div  style={{width:'50%', flex:'1'}}>
                    <img src={heroImage}  alt='' style={{height:'500px', borderRadius:'20px'}}  />

                </div>
            </div>
          
    </Header>
  )
};

export default Home;
