import styled from 'styled-components/macro'
import {Colors} from '../../../assets/theme'
import {Link as RouterLink} from 'react-router-dom'


export const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:1rem;

`
export const Row = styled.div`
display:flex;
align-items: center;
height: 100%;
width: 100%;
color: #949494;
justify-content: center;
max-width: 1200px;


`;

export const Nav = styled.div`
display:flex;
justify-content:space-between;
align-items: center;
width: 100%;

`

export const Logo = styled.img`

`;

export const Links = styled.div`
display: flex;
gap:15px;

`;

export const Link = styled(RouterLink)`
  color:${Colors.dark};
  text-decoration:none;
  padding:0 5px;
  
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;

`;
export const Button = styled.button`

 border-radius:${({borderRadius})=>borderRadius};
 background: ${({bgColor})=>bgColor ? bgColor :'transparent'} ;
 color: ${({color})=>color? color : Colors.dark};
 border:none;
 padding: 5px 20px;


`;