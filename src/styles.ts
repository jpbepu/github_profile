import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body{
        background-color: ${props => props.theme.corFundo};
        overflow-x: hidden;
    }

`

export default GlobalStyle


export const Container = styled.div`

    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1064px) {
        max-width: 80%;

    }

    @media (max-width: 400px) {
        max-width: 100%;

    }

`