import React from 'react';
import { Container,CardHeader,CardBody, IconBox,CardFooter, Column, Button } from './styles/carousel-card';
import { IoLocationOutline } from "react-icons/io5";

const CarouselCard = ({item}) => {

  return (
    <Container>
    <CardHeader>
        <p>{item.type}</p>
    </CardHeader>
    <CardBody>
        
        <IconBox>
        <img src={item.logo} alt={item.title}  />
        </IconBox>
        <p>{item.jobTitle}</p>
    </CardBody>
    <CardFooter>
        <Column>
           <p><strong>{item.companyName}</strong></p>
        </Column>
        <Column>
            <p>
             <IoLocationOutline />
            {item.location}
            </p>
            <Button>
                Apply now
            </Button>
        </Column>
    </CardFooter>
</Container>

  )
};

export default CarouselCard;
