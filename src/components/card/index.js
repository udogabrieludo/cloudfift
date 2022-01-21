import React from 'react';
import { Container,CardHeader,CardBody,CardFooter, IconBox  } from './styles/card';

const Card = ({item}) => {
  return (
      <Container>
          <CardHeader>

          </CardHeader>
          <CardBody>
              <IconBox>
              <img src={item.icon} alt={item.title}  />
              </IconBox>
              <div style={{textAlign: 'center'}}>
                  <p><strong>{item.title}</strong></p>
                  <small>({item.count} new jobs)</small>
              </div>
          </CardBody>
          <CardFooter>
              
          </CardFooter>
      </Container>
  );
};

export default Card;
