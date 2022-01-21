import styled from 'styled-components/macro'
import {Colors} from '../../../assets/theme'


export const Container = styled.div`
height: 750px;
position: relative;
display:flex;
flex-direction: column;

`
export const Clipath = styled.div`
height:100%;
width: 70%;
border-radius: 0 30px 30px 30px;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color:${Colors.light};

clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 76%);

@media (max-width:768px){
    width: 100%;  
}

`

export const Row = styled.div`

z-index:2;
display:flex;
align-items:center;
justify-content:center;
padding: 0 2rem;

     
`

export const InnerRow = styled.div`

display:flex;
align-items: center;
height: 100%;
width: 100%;
color: #949494;
justify-content: space-around;
max-width: 1200px;



`


export const Column = styled.div`
width:50%;
flex:1;

&:first-of-type{
    padding-right: 2rem;
    @media (max-width:768px){
        padding-right: 0;
    }
}

&:last-of-type{
@media (max-width:768px){
 display: none;
}
}

`
export const H1 = styled.h1`
font-size:48px;
color: ${Colors.dark};
`
export const Span = styled.span`
 color: ${Colors.primary};
`
export const Text = styled.p`
line-height: 1.8;

`
export const InnerColumn = styled.div`
display:flex;
justify-content: center;
position: relative;
width: 100%;
`

export const LineBox = styled.div`
border: 2px solid ${Colors.primary};
border-radius: 20px;
position: absolute;
top: 20px;
width: 100%;
right: 0;
height: 550px;
max-width: 450px;
z-index: 0;
}

`
export const ImgBox = styled.div`
z-index: 1;
height:550px; 
border-radius:20px;
overflow:hidden;

`
export const Image = styled.img`
height: 100%;
object-fit: contain: ;

`
export const Brands = styled.div`
display:flex;
gap:20px;
align-items: center;

`
export const BrandLogo = styled.img`

@media (max-width:768px){
    width: 60px; 
}

`