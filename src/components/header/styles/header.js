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
width: 65%;
border-radius: 0 30px 20px 20px;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color:${Colors.light};
clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 76%);


`