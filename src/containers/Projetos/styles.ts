import styled from "styled-components";

export const ListaProjetos = styled.ul`

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    list-style: none;

    @media (max-width: 1080px) {

        grid-template-columns:1fr;

    }

`


export const Card = styled.li`

    border: solid 1px #30363D;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 5px 5px 0px;

    div{
        display: flex;
        flex-direction: row;
    }

`

export const ReposWrapper = styled.div`

    margin: 40px 0;

`

export const RepoLink = styled.a`

    display: inline-block;
    padding: 4px 8px;
    border: solid 1px #30363D;
    border-radius: 4px;
    text-decoration: none;
    color:lightgrey;

    transition: 300ms;

    &:hover{
        background-color: aliceblue;
        color: #0D1117;
    }

`

export const Linguagem = styled.span`

    font-family: Consolas,"courier new";
    color: grey;
    font-size: 12px;
    padding: 2px;
    margin-left: 8px;

`