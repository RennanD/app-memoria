import React from 'react';
import { useVerification, VerifcationProvider } from './useVerification';

const AppProvider: React.FC = ({ children }) => (
  <VerifcationProvider>{children}</VerifcationProvider>
);

export { useVerification, AppProvider };
