import styled from 'styled-components/macro'
import { Colors } from '../../../assets/theme'


export const Container = styled.div`
width: 100%;
`
export const Row = styled.div`
display: grid;
grid-template-columns: 1fr 1fr ;
width: 100%;
margin:auto;
max-width:1200px;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

`

export const Column = styled.div`

&:last-of-type{
  margin-left: 5rem;
  padding: 0 2rem;
  @media (max-width:640px){
    margin-left: 0;
  }
  ;
}

`
export const CardWrapper = styled.div`

display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 30px;
grid-auto-rows: minmax(100px, auto);

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

`;



export const Image = styled.img`


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
