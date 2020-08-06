import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Dashboard from './pages/Dashboard';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  const [theme, setTheme] = useState(dark);

  const toggletheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Dashboard toggletheme={toggletheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
