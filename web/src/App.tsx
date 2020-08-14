import React from 'react';

import Routes from './routes';

import GlobalStyles from './styles/global';
import { AppProvider } from './hooks';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />

      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
