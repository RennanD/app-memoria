import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

import { useAuth } from '.';

import api from '../services/api';

interface VerificationContextData {
  phone_number: string;
  verified: string | undefined;
  requestCode(phone_number: string): Promise<void>;
  verifyCode(phone_number: string, code: string): Promise<void>;
  cancelVerify(): Promise<void>;
}

const VerificationContext = createContext<VerificationContextData>(
  {} as VerificationContextData,
);

export const VerifcationProvider: React.FC = ({ children }) => {
  const { account } = useAuth();

  const [phone, setPhone] = useState<string>('');
  const [verified, setVerified] = useState<string>();

  useEffect(() => {
    async function loadPhone(): Promise<void> {
      const verified_phone = localStorage.getItem('@memoria:verified');
      const storagedPhone = localStorage.getItem('@memoria:phone');

      if (storagedPhone) {
        setPhone(storagedPhone);
      }

      if (verified_phone) {
        setVerified(verified_phone);
      }
    }

    loadPhone();
  }, []);

  useEffect(() => {
    async function verifyCodeEffect() {
      const localVerify = localStorage.getItem('@memoria:verified');

      if (localVerify) {
        setVerified(localVerify);
      }
    }

    verifyCodeEffect();
  }, [account]);

  const requestCode = useCallback(async phone_number => {
    try {
      const response = await api.post('/account', {
        phone_number,
      });

      setPhone(phone_number);
      localStorage.setItem('@memoria:phone', phone_number);

      alert(response.data.content);
    } catch ({ response }) {
      throw new Error(response.data.message);
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

      setVerified('true');

      localStorage.setItem('@memoria:verified', 'true');

      alert(response.data.content);
    } catch ({ response }) {
      throw new Error(response.data.message);
    }
  }, []);

  const cancelVerify = useCallback(async () => {
    setVerified('');
    localStorage.removeItem('@memoria:verified');
  }, []);

  return (
    <VerificationContext.Provider
      value={{
        phone_number: phone,
        requestCode,
        verifyCode,
        verified,
        cancelVerify,
      }}
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
