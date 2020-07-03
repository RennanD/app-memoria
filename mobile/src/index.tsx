import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes/index.routes';

import { VerifcationProvider } from './hooks/useVerification';

const Index: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#65C4B0" />
    <VerifcationProvider>
      <Routes />
    </VerifcationProvider>
  </NavigationContainer>
);

export default Index;
