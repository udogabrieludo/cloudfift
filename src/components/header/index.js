import React from 'react';
import { Clipath, Container} from './styles/header';


const Header = ({children}) => {
  return <Container>
          <Clipath>
          </Clipath>
          {children}
        </Container>;
};

export default Header;
