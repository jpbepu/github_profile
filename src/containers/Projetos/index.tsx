import { useEffect, useState } from "react"
import Titulo from "../../components/Titulo";
import Paragrafo from "../../components/Paragrafo";
import { Card, ListaProjetos, ReposWrapper, RepoLink, Linguagem } from "./styles";

const Projetos = () => {

    const [repos, setRepos] = useState([])

    useEffect( () => {
        fetch('https://api.github.com/users/jpbepu/repos')
        .then(data => data.json())
        .then(res => (
            setRepos(res)

        ))
    
    }, []);




    return (

        <ReposWrapper>
            <Titulo fontSize={24}>Repositórios</Titulo>
            
            <ListaProjetos>

                {repos.map( ({name, language, html_url, description, id}) => (
                    
                    <Card key={id}>
                        
                        <div>
                            <Titulo fontSize={16}>{name} </Titulo>
                            <Linguagem> {language} </Linguagem>
                        </div>

                        <Paragrafo> {description}</Paragrafo>
                        <RepoLink target="_blank" rel='noreferrer' href={html_url}>Ver no Github</RepoLink>

                    </Card>
                    
                ))}

            </ListaProjetos>
        </ReposWrapper>


    )

}


export default Projetos