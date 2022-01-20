import React from 'react';
import { Container,Nav,Logo, Links,Link, ButtonGroup, Button, Row} from './styles/menu';
import logo from '../../assets/images/logo.svg'
import {Colors} from  '../../assets/theme'


const Menu = () => {
  return (
      <Container>
           <Row>
           <Nav>      
               <Logo src={logo} alt='logo' />
              
               <Links>
                  <Link to='/'>
                  Companies
                  </Link>
                  <Link  to='/'>
                  Candidates
                  </Link>
                  <Link  to='/'>
                  Assessment
                  </Link>
                  <Link  to='/'>
                  Post a Job
                  </Link>
                  <Link  to='/'>
                  Career Advice
                  </Link>
                </Links>
               

               <ButtonGroup>
                    <Button>
                        Sign Up
                    </Button>
                    <Button bgColor={Colors.secondary} color={Colors.primary} borderRadius={'50px'} >
                        Log In
                    </Button>
                </ButtonGroup>
              
           </Nav>
           </Row>
         
      </Container>
  );
};

export default Menu;
