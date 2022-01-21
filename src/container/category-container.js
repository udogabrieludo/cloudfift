import React from 'react';
import Card from '../components/card';
import { CardBody } from '../components/card/styles/card';
import { Categories } from '../features/categories';

const CategoryContainer = () => {
  return (
      <div style={{padding:'0 2rem', display: 'flex',justifyContent:'center'}}>
          <div style={{
            display: 'flex',
           justifyContent:'center',
           alignItems:'center', 
           width:'100%', 
           flexDirection: 'column',
           maxWidth:'1200px'
           }}>
               <h1>Popular Categories</h1>
            <div style={{
            display: 'flex',
           justifyContent:'space-between', 
           flexWrap:'wrap', width:'100%', 
          
           }}>
                {Categories.map((item)=>(
                    <Card  item={item}  /> 
                ))}
            </div>
           
           </div>   
      </div>
  )
};

export default CategoryContainer;
