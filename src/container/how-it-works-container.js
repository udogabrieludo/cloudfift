import React from 'react';
import GridCard from '../components/grid-card';
import { Steps } from '../features/how-it-works';
import {Colors} from '../assets/theme'
import {FiCheck} from "react-icons/fi";
import { Container, Row, Column, Text,Lists, List, ListHeader,Title, ListContent, IconBox  } from '../components/grid-card/styles/grid-card';

const HowItWorks = () => {
  return (
     <Container>
         <Row>
            <Column>
            <GridCard  />
            </Column>
            <Column>
               <h1>
                   How it Works
               </h1>
               <Text>
               Getajob helps you find the right job easily. Getajob helps you find the right job easily. Getajob helps you find the right job easily.
               </Text>
               <Lists>
                   {Steps.map((item, i)=>(
                       <List key={i}>
                       <ListHeader>
                        <IconBox>  
                            <FiCheck color={Colors.primary} size={20} />
                        </IconBox>
                         <Title>
                             {item.title}
                         </Title>
                       </ListHeader>
                        <ListContent>
                            <Text>
                            {item.content}
                            </Text>
                        </ListContent>
                  </List>
                   ))}
               </Lists>
            </Column>
         </Row>

     </Container>
  );
};

export default HowItWorks;
