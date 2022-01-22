import styled from 'styled-components/macro';
import {Colors} from '../../../assets/theme/'


export const Container = styled.div`
display: flex;
justify-content:center;
padding: 0 2rem;
margin: 4rem 0;

@media (max-width:640px){
 padding: 0;
}

`
export const Row = styled.div`
background: url('/banner.png');
background-position: center center;
background-size: cover;
position: relative;
border-radius: 30px;
overflow: hidden;
width: 100%;
height:350px;
max-width:1200px;
color:${Colors.white};

`
export const Inner = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content:flex-end;
z-index:1;
position: relative;
align-items: center;

@media (max-width:640px){
justify-content:center;  
}

`
export const Column = styled.div`
width:50%;
z-index:1;
position: relative;
h1{
    font-size:2.5rem;
}
@media (max-width:640px){
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
    font-size:1.5rem;
    margin: 0;
}
}
`
export const Overlay = styled.div`
position:absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
background:${Colors.gradient};

`
export const Button = styled.button`
background:${Colors.primary};
padding:.8rem 4.2rem;
border-radius: 20px;
border-radius: 20px;
border: none;
outline: none;
color: ${Colors.white};
margin: 1rem 0;
cursor: pointer;
&:hover{
background: ${Colors.light};
color: ${Colors.primary};
}
@media (max-width:640px){
    padding:.5rem 2rem;
}
`


