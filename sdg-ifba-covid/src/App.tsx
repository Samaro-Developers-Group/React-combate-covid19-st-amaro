import React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components'
import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';
import Header from './components/Header/index';
import Home from './containers/Home';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}> 
    <div>
    <GlobalStyle/>
    <Header toggleTheme={toggleTheme}>
    <Home/>
    </Header>
   
    </div>

    </ThemeProvider>
  );
}

export default App;
