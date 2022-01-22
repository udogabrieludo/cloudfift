import styled from 'styled-components/macro'
import {Colors} from '../../../assets/theme'

export const Container = styled.div`
display:flex;
justify-content: center;
position: relative;
width: ${({width})=>width ? width : '100%'};

@media (max-width:640px){
    width: 100%;
    max-width: 280px;
}
`

export const LineBox = styled.div`
border: 2px solid ${Colors.primary};
border-radius: 20px;
position: absolute;
top: 20px;
width: 100%;
right: 0;
height:${({height})=>height ? height :' 550px'};
max-width: ${({maxWidth})=>maxWidth ? maxWidth :' 450px;'};
z-index: 0;

@media (max-width:640px){
    width: 100%;
    height: 285px;
    max-width: 280px;
}

`
export const ImgBox = styled.div`
z-index: 1;
height:${({size})=>size ? size :' 550px'}; 
border-radius:20px;
overflow:hidden;

`
export const Image = styled.img`
height: 100%;
object-fit: contain: ;

`