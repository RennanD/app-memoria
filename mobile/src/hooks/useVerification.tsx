import React, { createContext, useCallback, useState, useContext } from 'react';
import { Alert } from 'react-native';

import api from '../services/api';

interface VerificationContextData {
  phone_number: string;
  requestCode(phone_number: string): Promise<void>;
  verifyCode(phone_number: string, code: string): Promise<void>;
}

const VerificationContext = createContext<VerificationContextData>(
  {} as VerificationContextData,
);

export const VerifcationProvider: React.FC = ({ children }) => {
  const [phone, setPhone] = useState<string>('');

  const requestCode = useCallback(async phone_number => {
    try {
      const response = await api.post('/account', {
        phone_number,
      });

      setPhone(phone_number);

      Alert.alert('Sucesso', response.data.content);
    } catch (err) {
      Alert.alert('Error', 'Tente novamente');
    }
  }, []);

  const verifyCode = useCallback(async (phone_number, code) => {
    try {
      const response = await api.get('/account', {
        params: {
          phone_number,
          verification_code: code,
        },
      });

      Alert.alert('Sucesso', response.data.content);
    } catch ({ response }) {
      Alert.alert('Erro', response.data.message);
    }
  }, []);

  return (
    <VerificationContext.Provider
      value={{ phone_number: phone, requestCode, verifyCode }}
    >
      {children}
    </VerificationContext.Provider>
  );
};
export function useVerification(): VerificationContextData {
  const context = useContext(VerificationContext);

  if (!context) {
    throw new Error(
      'useVerification must be used within a VerifcationProvider',
    );
  }

  return context;
}
