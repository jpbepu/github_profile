

import Projetos from './containers/Projetos'
import Perfil from './containers/Perfil';
import Sobre from './containers/Sobre';
import GlobalStyle, { Container } from './styles.ts'



function App() {
  return (
    <div className="App">

      <GlobalStyle/>

      <Container>

        <Perfil />
        <Sobre />
        <Projetos />

      </Container>


    </div>
  );
}

export default App;
