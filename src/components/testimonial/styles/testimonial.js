import styled from 'styled-components/macro'
import {Colors} from '../../../assets/theme'

export const Container = styled.div`
display: flex;
justify-content: center;
padding:0 2rem;

`

export const Row = styled.div`
display: flex;
width: 100%;
max-width:1200px;
flex-direction: column;
padding: 5rem 0;
@media (max-width:640px){
    padding: 2rem 0;
}


`
export const Inner = styled.div`
display: flex;
padding: 2rem 0;
@media (max-width:640px){
  flex-direction: column;
}

`
export const Title = styled.div`
width: 100%;
max-width:400px;
padding-bottom: 2rem;
@media (max-width:640px){
    padding-bottom: 0;
    h1 {
        text-align: center;
        margin: 0;
    }
}
`
export const ImageBox = styled.div``

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    max-width: 700px;
    padding-left: 3rem;
    position: relative;
    
h4{
    margin:0;
}
p{
    line-height:2;
    &:last-of-type{
        color:${Colors.gray}
    }
}
@media (max-width:640px){
    padding-left: 0rem;
    margin-top: 1rem;
}

`