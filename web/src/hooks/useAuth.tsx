/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';

import { useVerification } from '.';

import api from '../services/api';

interface SingInCredencials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  birthday: string;
  avatar: string;
}

interface Account {
  user: User;
}

interface AuthState {
  token: string;
  account: Account;
}

interface AuthContextData {
  account: Account;
  signIn(credencials: SingInCredencials): Promise<void>;
  signOut(): Promise<void>;
  updateAvatar(user: User): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@memoria:token');
    const account = localStorage.getItem('@memoria:account');

    if (token && account) {
      return { token, account: JSON.parse(account) };
    }

    return {} as AuthState;
  });

  const { cancelVerify } = useVerification();

  useEffect(() => {
    const token = localStorage.getItem('@memoria:token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });

      const { account, token } = response.data;

      localStorage.setItem('@memoria:token', token);
      localStorage.setItem('@memoria:account', JSON.stringify(account));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, account });
    } catch (err) {
      alert('Dados de usuário inválidos!');
    }
  }, []);

  const signOut = useCallback(async () => {
    const { account } = data;

    await api.delete(`/sessions/${account.user.id}`);

    localStorage.removeItem('@memoria:token');
    localStorage.removeItem('@memoria:account');

    cancelVerify();

    setData({} as AuthState);
  }, [cancelVerify, data]);

  const updateAvatar = useCallback(
    async (user: User) => {
      const account = {
        user,
      };

      localStorage.setItem('@memoria:account', JSON.stringify(account));
      setData({ account, token: data.token });
    },
    [data.token],
  );

  return (
    <AuthContext.Provider
      value={{ account: data.account, signIn, signOut, updateAvatar }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
