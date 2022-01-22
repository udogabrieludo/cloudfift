import React from 'react';
import Card from '../../components/card';
import { Categories } from '../../features/categories'
import { CategoryCards, Container, Row } from './styles/category-list';

const CategoryList = () => {
  return (
      <Container>
          <Row>
               <h1>Popular Categories</h1>
            <CategoryCards>
                {Categories.map((item, i)=>(
                    <Card key={i} item={item}  /> 
                ))}
            </CategoryCards>     
           </Row>   
      </Container>
  )
};

export default CategoryList;
