import styled from 'styled-components/macro'
import {Colors} from '../../../assets/theme'


export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items:center;
flex: 0 0 23%;
max-width: 23%;
background: #FFFFFF;
border: 1px solid #E5E5E5;
box-sizing: border-box;
border-radius: 10px;
padding: 3rem 0;
margin: 1rem 0;
`

export const CardHeader = styled.div``

export const CardBody = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`

export const IconBox = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${Colors.secondary};
`

export const CardFooter = styled.div``