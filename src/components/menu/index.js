import React from 'react';
import { Container,Nav,Logo, Links,Link, ButtonGroup, Button, Row,BuggerMenu} from './styles/menu';
import logo from '../../assets/images/logo.svg'
import {Colors} from  '../../assets/theme'
import { GiHamburgerMenu } from "react-icons/gi";


const Menu = () => {
  return (
      <Container>
           <Row>
           <Nav>      
              <Link to='/home'>
              <Logo src={logo} alt='logo' />
              </Link>
              
               <Links>
                  <Link to='/home'>
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
                <BuggerMenu>
                    <GiHamburgerMenu color={Colors.primary} size={30}/>
                </BuggerMenu>
              
           </Nav>
           </Row>
         
      </Container>
  );
};

export default Menu;
