import React from 'react';
import { Container,Row, Overlay,Inner,Column, Button } from './styles/get-started';

const GetStart = () => {
  return <Container>
          <Row>
          <Inner>
          <Column>
            <h1>Get a Job you actually like</h1>
            <p>Create an account and start applying</p>
             <Button>
                 Get Started
             </Button>
         </Column>
          </Inner>
          <Overlay />
           
          </Row>
      </Container>;
};

export default GetStart;
