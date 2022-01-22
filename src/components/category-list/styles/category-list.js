import styled from 'styled-components/macro'

export const Container = styled.div`
display: flex;
justify-content:center;
padding:0 2rem; 

`
export const Row = styled.div`
display: flex;
justify-content:center;
align-items:center;
width:100%;
flex-direction: column;
max-width:1200px;
padding:5rem 0;
@media (max-width: 640px) {
    h1{
    font-size:1.5em;
    }
}

`
export const CategoryCards = styled.div`
display: flex;
gap:20px;
flex-wrap:wrap; 
width:100%; 
   

`