import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    box-shadow: 0px 10px 30px rgb(6 148 42 / 4%);
    border-radius: 50px;
    height: 45px;
    overflow: hidden;
     border-left: 1px solid #E5E5E5;
     @media (max-width:480px){
        flex-direction: column;
        height: 100%;
        border-radius:0;
     }

`
export const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    box-shadow: 0px 10px 30px rgb(6 148 42 / 4%);
    height: 45px;
    padding-left: 10px;
    outline: none;
    &:first-of-type{
        width: 270px;
        @media (max-width:800px){
            width: 250px;
        }
        @media (max-width:480px){
        width: 100%;
     }
    }
    
    ::placeholder{
        color:#d3d3d3;
        font-size: 14px
    }
    @media (max-width:800px){
            width: 130px;
        }
    @media (max-width:480px){
        width: 100%;
     }
    
}

`
export const InputGroup = styled.div`
position: relative;

svg{
    color: #cfcbcb;
    position: absolute;
    left: 10px;
    top: 15px;
}`
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #06942A;
    border-radius: 0px 50px 50px 0px;
    box-sizing: border-box;
    outline: none;
    border:none;
    height: 45px;
    width: 50px;
    cursor: pointer;
    @media (max-width:480px){
    width: 100%;
    border-radius: 0;
    }

`
