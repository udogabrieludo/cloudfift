import React from 'react';
import {Container, Row} from './styles/jobs'


const Jobs = ({children}) => {

  return <Container>
        <Row>
        {children}
        </Row>  
        
      </Container>;
};

export default Jobs;
