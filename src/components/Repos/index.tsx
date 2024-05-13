import { useEffect, useState } from "react"

const Repos = () => {

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
            <h1>Repos</h1>
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


export default Repos