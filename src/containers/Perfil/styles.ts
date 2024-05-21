import styled from "styled-components";




export const PerfilWrapper = styled.div`

    margin-top: 80px;
    padding: 16px;
    border: solid 1px ${props => props.theme.corBorda};
    border-radius: 16px;
    background-color: ${props => props.theme.corFundo};
    display: flex;
    flex-direction: row;
    box-shadow: 5px 5px ${props => props.theme.corSombra};

    .img-perfil{
        width: 300px;
        filter: drop-shadow(0px 0px 10px ${props => props.theme.corPerfil});
    }
    
    
    @media (max-width: 1080px) {
        margin-top: 0;
        border: none;
        flex-direction: column;
        align-items: center;
        box-shadow: none;


        .img-perfil{
            margin: 16px 0;
        }

    }


`

export const Sobre = styled.div`

    margin-left: 36px;



    @media (max-width: 1080px) {

        margin-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;


        div, p, h3{
            width: 85%;

        }

    }

`

export const GithubSecao = styled.div`

    display: flex;

    img{

        height: 155px;


        @media (max-width: 1080px) {

            height: 135px;

        }
    }

    @media (max-width: 1080px) {

        flex-direction: column;
        

    }



` 