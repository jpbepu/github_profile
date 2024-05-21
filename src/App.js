
import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import Perfil from './containers/Perfil';
import GlobalStyle, { Container } from './styles.ts'

import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import { useState } from 'react';



function App() {

  const [isDark, setIsDark] = useState(true)

  function changeTheme(){
    setIsDark(!isDark)
  }

  return (
    <div className="App">
      <ThemeProvider theme={isDark ? darkTheme: lightTheme}>
        <GlobalStyle/>

        <Container>

          <Perfil changeTheme={changeTheme} />
          <Projetos />

        </Container>
      </ThemeProvider>

    </div>
  );
}

export default App;
