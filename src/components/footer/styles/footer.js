import styled from 'styled-components/macro';
import {Link as RouterLink} from 'react-router-dom';
import {Colors} from '../../../assets/theme'

export const Container = styled.div`
display: flex;
align-items: center;
padding: 0 2rem;
flex-direction: column;

`
export const Row = styled.div`
display: flex;
flex-direction:column;
width: 100%;
max-width: 1200px;
padding: 4rem 0;
border-top: 1px solid ${Colors.lightGray};



`
export const InnerRow = styled.div`
display: flex;
@media (max-width:640px){
  flex-direction: column;
}

`
export const Column = styled.div`
&:first-of-type{
    width: 30%;
    @media (max-width:640px){
    width: 100%;
}

}
&:last-of-type{
    width: 70%;
    @media (max-width:640px){
    width: 100%;
}

}


`
export const Inner = styled.div`
display: flex;
flex-wrap: wrap;
padding-left: 2rem;
@media (max-width:640px){
padding-left:0;
}
`

export const InnerColumn = styled.div`
flex: 0 0 20%;
max-width: 20%;

@media (max-width: 800px){
    flex: 0 0 30%;
    max-width: 35%;
}
@media (max-width:640px){
flex: 0 0 45%;
max-width: 45%;
}

`
export const Logo = styled.img`
width: 100%;
max-width:120px;

`
export const Text = styled.p`

`

export const LinkBox = styled.div`
display: flex;
flex-direction: column;

`
export const Link = styled(RouterLink)`
text-decoration: none;
padding:.7rem 0;
color: ${Colors.dark};
`
export const IconBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius:50%;
background: ${Colors.secondary};
height: 35px;
width: 35px;

`
export const SocialLinks = styled.div`
 display: flex;
 gap:10px;
 align-items: center;
`
export const CopyRight = styled.div`
 display: flex;
 justify-content:center;
 align-items: center;
 width:100%;
 padding-top:3rem;
 p{
     text-align: center;
     font-size: .9rem;
 }
`