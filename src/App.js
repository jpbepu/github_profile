

import Projetos from './containers/Projetos'
import Perfil from './containers/Perfil';
import GlobalStyle, { Container } from './styles.ts'



function App() {
  return (
    <div className="App">

      <GlobalStyle/>

      <Container>

        <Perfil />
        <Projetos />

      </Container>


    </div>
  );
}

export default App;
