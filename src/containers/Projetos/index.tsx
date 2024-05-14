import { useEffect, useState } from "react"
import Titulo from "../../components/Titulo";

const Projetos = () => {

    const [repos, setRepos] = useState([])

    useEffect( () => {
        fetch('https://api.github.com/users/jpbepu/repos')
        .then(data => data.json())
        .then(res => (
            setRepos(res)

        ))
    
    }, []);

    console.log(repos)

    return (

        <>
            <Titulo>Projetos</Titulo>
            
            <ul>

                {repos.map( ({name, language, html_url, id}) => (
                    <li key={id}>
                        <b>Nome:</b> {name} <br />
                        <b>Linguagem Principal:</b> {language} <br />
                        <a target="_blank" href={html_url}>Ir Para o repositorio</a>
                        <br />
                        
                    </li>
                    
                ))}

            </ul>
        </>


    )

}


export default Projetos