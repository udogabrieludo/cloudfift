import styled from 'styled-components/macro'
import {Colors} from '../../../assets/theme'

export const Container = styled.div`
display: flex;
position:relative;
height:100%; 
justify-content:center;
flex-direction: column;
align-items: center;
padding: 0 2rem;
min-height:600px;
`
export const Row = styled.div`
width:100%;
max-width:1200px;
z-index:2;
background-color:${Colors.light};
a{
display:flex;
align-items:center;
color:${Colors.primary};
text-decoration:none;
}

@media (max-width:480px){
h1{
font-size: 1.5rem;
padding-right: 1rem;
}
}

`
export const ClipPath = styled.div`
position: absolute;
top:0;
right:0;
width:50%; 
height: 100%;
clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
background-color:${Colors.light};
@media (max-width:640px){
    width:100%;   
}
`

export const Inner = styled.div`
display:flex;
padding:4rem ;
@media (max-width:640px){
flex-direction: column;
padding:4rem 0;
}

`
export const Column = styled.div`
width:50%;
@media (max-width:640px){
    width:100%;
}
`
export const Text = styled.div`
line-height: 2;
padding: 1rem 0;
`