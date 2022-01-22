import styled from 'styled-components/macro';
import { Colors } from '../assets/theme';

export const Container = styled.div`
display: flex;
justify-content:center; 
margin-left:2rem;
padding:5rem 0 ;
@media (max-width:600px){
    margin-left: 2rem;
}

`
export const Row = styled.div`
width: 100%;
max-width: 1300px;


`
export const CustomArrow = styled.div`
display: flex;
justify-content:flex-end;
align-items: center;
padding: .5rem 1rem;
gap: 10px;
`
export const Button = styled.div`
background: transparent;
cursor: pointer;
&:first-of-type{
       svg{
        color: ${({isPrevious})=> isPrevious  ? Colors.lightGray : Colors.primary};
       }
    }
svg{
    color: ${({currentState})=> currentState === -1 ? Colors.lightGray : Colors.primary};
   
}
`