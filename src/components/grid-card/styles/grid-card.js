import styled from 'styled-components/macro'
import { Colors } from '../../../assets/theme'


export const Container = styled.div`
padding: 0 2rem;
display: flex;
justify-content: center;
align-items: center;
`
export const Row = styled.div`
display: flex;
align-items: center;
max-width:1200px;
width: 100%;
justify-content:'center';

@media (max-width:800px){
    flex-direction:column;
  }

`

export const Column = styled.div`
width:50%;

&:last-of-type{
  padding: 0 5rem;
  @media (max-width:800px){
    padding: 0
  }
  ;
}
@media (max-width:800px){
    width:100%;
  }

`
export const CardWrapper = styled.div`



display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 2rem;

`

export const CardOne = styled.div`
grid-column: 1 / 2;
background-color: ${Colors.white};
grid-row: 1/3;
overflow: hidden;
border-radius:20px;
box-shadow: 10px 10px 21px 0px rgba(212,206,206,0.75);
-webkit-box-shadow: 10px 10px 21px 0px rgba(212,206,206,0.75);
-moz-box-shadow: 10px 10px 21px 0px rgba(212,206,206,0.75);

@media (max-width:540px){
  grid-column: 1/3;
    grid-row: 1/ 3;
}

`
export const CardTwo = styled.div`
grid-column: 2 / 3;
grid-row: 2 / 4;
background-color: ${Colors.white};
overflow: hidden;
border-radius:20px;
box-shadow: 10px 10px 21px 0px rgba(212,206,206,0.75);
-webkit-box-shadow: 10px 10px 21px 0px rgba(212,206,206,0.75);
-moz-box-shadow: 10px 10px 21px 0px rgba(212,206,206,0.75);
@media (max-width:540px){
  grid-column: 1/3;
    grid-row: 3/ 4;
}

`

export const CardThree = styled.div`
grid-column: 1;
grid-row: 3/ 5;
background-color: ${Colors.white};
gap: 0.5em;
overflow: hidden;
border-radius:20px;
box-shadow: 10px 10px 21px 0px rgba(212,206,206,0.75);
-webkit-box-shadow: 10px 10px 21px 0px rgba(212,206,206,0.75);
-moz-box-shadow: 10px 10px 21px 0px rgba(212,206,206,0.75);
@media (max-width:540px){
  grid-column: 1/3;
    grid-row: 4/ 5;
}

`;



export const Image = styled.img`
width: 100%;
height: auto;


`;
export const Footer = styled.div`
padding: 1.5rem .5rem;

`;
export const Text = styled.p`
text-align:${({align})=>align ? align : 'left'};
line-height:1.5;
span{
  color: ${Colors.primary};
}
`

export const Lists = styled.div`
 display: flex;
 flex-direction: column;
`
export const List = styled.div`
 display: flex;
 flex-direction: column;
 padding: 1rem 0;

`
export const ListHeader = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
 
`
export const Title = styled.h3`
margin:5px 0;
`

export const ListContent = styled.div`;`

export const IconBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius:50%;
  position: relative;
  background-color:${Colors.secondary};
  svg{
    position: absolute;
    top:2px;
    right:0;
    margin-right: -3px;
  }
`
