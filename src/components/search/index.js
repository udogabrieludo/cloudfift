import React from 'react';
import { Container,Input,Button} from './styles/search';
import { FiSearch } from "react-icons/fi";
import { Colors } from '../../assets/theme';

const Search = () => {
  return (
      <Container>    
          <Input type='text' placeholder=' Enter keywords, skill, interest' />
          <Input type='text' placeholder="  Location"/>     
          <Button>
              <FiSearch color={Colors.white} />    
          </Button>    
      </Container>
  );
};

export default Search;
