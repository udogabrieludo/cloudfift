import styled from 'styled-components/macro'
import {Colors} from '../../../assets/theme'
export const Container = styled.div`

background-color: #ffffff;
border-radius: 5px;

box-shadow: 1px 0px 8px 8px rgb(251 251 251);
-webkit-box-shadow: 1px 0px 8px 8px rgb(251 251 251);
min-height: 250px;
margin: .5rem;

p{
    margin: 0;
}
`


export const CardHeader = styled.div`
display: flex;
justify-content:flex-end;
padding: 1rem;
p{
background: #d9dfda87;
padding: .3rem .5rem;
border-radius:20px;
font-size:.8rem;

}

`

export const CardBody = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding: 1.5rem 0;
p{
font-weight: bold;
margin: 0;
}
`

export const IconBox = styled.div`
    width: 150px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  
`

export const CardFooter = styled.div`\
display: flex;
flex-direction: column;
justify-content: center;
border-top: 1px solid ${Colors.lightGray};
height: 100px;



` 
export const Column = styled.div`
display:flex;
justify-content:space-between;
padding:.5rem 1rem;
p{
    display: flex;
    align-items: center;
    justify-content: center;
    svg{

        padding-right: .5rem;
        color: ${Colors.lightGray};
        font-size:1rem;
        
    }
}


`
export const Button = styled.button`
display:flex;
justify-content:center;
align-items: center;
cursor: pointer;
padding:.3rem 1rem;
color: ${Colors.primary};
background:transparent;
border: none;
outline: none;
font-size:.9rem;
&:hover{
    background:${Colors.secondary};
    border-radius:20px;
   
}


`