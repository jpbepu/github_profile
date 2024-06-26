import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { PerfilWrapper, GithubSecao, Sobre, ThemeBtn, NameWrapper } from "./styles"

type Props = {
    changeTheme: () => void;
    icon: string;
}

const Perfil = (props: Props) =>(

    <PerfilWrapper>
        <div>
            <img className="img-perfil" src="https://avatars.githubusercontent.com/u/45445802?v=4" alt="imagem de perfil" />
            
        </div>
        <Sobre>

            <NameWrapper>
                <Titulo fontSize={36}>João Pedro Bepu</Titulo>
                <ThemeBtn onClick={props.changeTheme}>
                    <img src={props.icon} alt="mudar tema" />
                </ThemeBtn>
            </NameWrapper>




            <Paragrafo>
                Tenho um interesse enorme por design e tudo 
                o que envolve código! Formado em Design Gráfico pela ESPM, atualmente estou
                desenvolvendo alguns projetos pessoais na
                área de front-end com React!
            </Paragrafo>
            <br />
            <GithubSecao>
                <img src="https://github-readme-stats.vercel.app/api?username=jpbepu&show_icons=true&hide_border=true&include_all_commits=true&count_private=true&icon_color=d93f59&text_color=9f9f9f&bg_color=151515"/>
                <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jpbepu&layout=compact&langs_count=7&hide_border=true&text_color=9f9f9f&bg_color=151515"/>
            </GithubSecao>
            
        </Sobre>
    </PerfilWrapper>

)



export default Perfil